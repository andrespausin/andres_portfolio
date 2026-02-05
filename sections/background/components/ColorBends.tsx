import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { CSSProperties } from "react";
import './ColorBends.css';

const MAX_COLORS = 8;

// === CAMBIO AQUÍ: Shader Frag modificado para controlar el brillo en modo opaco ===
const frag = `#define MAX_COLORS ${MAX_COLORS}
uniform vec2 uCanvas;
uniform float uTime;
uniform float uSpeed;
uniform vec2 uRot;
uniform int uColorCount;
uniform vec3 uColors[MAX_COLORS];
uniform int uTransparent;
uniform float uOpacity; // Ahora controlará el brillo global siempre
uniform float uScale;
uniform float uFrequency;
uniform float uWarpStrength;
uniform vec2 uPointer;
uniform float uMouseInfluence;
uniform float uParallax;
uniform float uNoise;
varying vec2 vUv;

void main() {
  float t = uTime * uSpeed;
  vec2 p = vUv * 2.0 - 1.0;
  p += uPointer * uParallax * 0.1;
  vec2 rp = vec2(p.x * uRot.x - p.y * uRot.y, p.x * uRot.y + p.y * uRot.x);
  
  // Fix aspect ratio distortion
  vec2 q = vec2(rp.x * (uCanvas.x / uCanvas.y), rp.y);
  
  q /= max(uScale, 0.0001);
  q /= 0.5 + 0.2 * dot(q, q);
  q += 0.2 * cos(t) - 7.56;
  vec2 toward = (uPointer - rp);
  q += toward * uMouseInfluence * 0.2;

  vec3 col = vec3(0.0);
  float cover = 0.0; // Variable para saber "cuanta" onda hay aquí

  if (uColorCount > 0) {
    vec2 s = q;
    vec3 sumCol = vec3(0.0);
    for (int i = 0; i < MAX_COLORS; ++i) {
      if (i >= uColorCount) break;
      s -= 0.01;
      vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
      float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(i)) / 4.0);
      float kBelow = clamp(uWarpStrength, 0.0, 1.0);
      float kMix = pow(kBelow, 0.3);
      float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
      vec2 disp = (r - s) * kBelow;
      vec2 warped = s + disp * gain;
      float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(i)) / 4.0);
      float m = mix(m0, m1, kMix);
      float w = 1.0 - exp(-6.0 / exp(6.0 * m));
      sumCol += uColors[i] * w;
      cover = max(cover, w);
    }
    col = clamp(sumCol, 0.0, 1.0);
  }

  // Ruido opcional
  if (uNoise > 0.0001) {
    float n = fract(sin(dot(gl_FragCoord.xy + vec2(uTime), vec2(12.9898, 78.233))) * 43758.5453123);
    col += (n - 0.5) * uNoise;
    col = clamp(col, 0.0, 1.0);
  }

  // === LÓGICA DE SALIDA CORREGIDA ===
  vec3 finalColor = col;
  float alpha = 1.0;

  if (uTransparent > 0) {
      // Modo Transparente: Multiplicamos por alpha (cover) y opacidad
      finalColor = col * cover * uOpacity;
      alpha = cover * uOpacity;
  } else {
      // Modo Opaco (transparent={false}):
      // AUNQUE sea sólido, multiplicamos por 'cover' para que donde no hay onda sea negro.
      // Y multiplicamos por 'uOpacity' para bajarle el brillo (lo que pediste).
      finalColor = col * cover * uOpacity;
      alpha = 1.0; // Alpha siempre 1 para tapar lo de atrás
  }

  gl_FragColor = vec4(finalColor, alpha);
}
`;

const vert = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

type HexColor = `#${string}`;

type ColorBendsProps = {
  className?: string;
  style?: CSSProperties;
  rotation?: number;
  speed?: number;
  colors?: HexColor[];
  transparent?: boolean;
  opacity?: number;
  autoRotate?: number;
  scale?: number;
  frequency?: number;
  warpStrength?: number;
  mouseInfluence?: number;
  parallax?: number;
  noise?: number;
};

export default function ColorBends({
  className = "",
  style,
  rotation = 45,
  speed = 0.15,
  colors = [],
  transparent = true, // Puedes ponerlo en false ahora y funcionará bien
  opacity = 0.7,
  autoRotate = 0.1,
  scale = 1.2,
  frequency = 0.8,
  warpStrength = 0.6,
  mouseInfluence = 0,
  parallax = 0.3,
  noise = 0.05
}: ColorBendsProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const rafRef = useRef<number | null>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const rotationRef = useRef<number>(rotation);
  const autoRotateRef = useRef<number>(autoRotate);
  const pointerTargetRef = useRef(new THREE.Vector2(0, 0));
  const pointerCurrentRef = useRef(new THREE.Vector2(0, 0));
  const colorsRef = useRef(colors);

  useEffect(() => {
    colorsRef.current = colors;
  }, [colors]);

  const toVec3 = (hex: string): THREE.Vector3 => {
    const h = hex.replace("#", "").trim().toLowerCase();
    if (h.length !== 3 && h.length !== 6) return new THREE.Vector3(0, 0, 0);
    const v = h.length === 3
      ? [parseInt(h[0] + h[0], 16), parseInt(h[1] + h[1], 16), parseInt(h[2] + h[2], 16)]
      : [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
    return new THREE.Vector3(v[0] / 255, v[1] / 255, v[2] / 255);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const geometry = new THREE.PlaneGeometry(2, 2);
    const uColorsArray = Array.from({ length: MAX_COLORS }, () => new THREE.Vector3(0, 0, 0));

    const material = new THREE.ShaderMaterial({
      vertexShader: vert,
      fragmentShader: frag,
      uniforms: {
        uCanvas: { value: new THREE.Vector2(1, 1) },
        uTime: { value: 0 },
        uSpeed: { value: speed },
        uRot: { value: new THREE.Vector2(1, 0) },
        uColorCount: { value: 1 },
        uColors: { value: uColorsArray },
        uTransparent: { value: transparent ? 1 : 0 },
        uOpacity: { value: opacity },
        uScale: { value: scale },
        uFrequency: { value: frequency },
        uWarpStrength: { value: warpStrength },
        uPointer: { value: new THREE.Vector2(0, 0) },
        uMouseInfluence: { value: mouseInfluence },
        uParallax: { value: parallax },
        uNoise: { value: noise }
      },
      // Si transparent es false, ThreeJS no calcula blending, ahorrando GPU
      transparent: transparent,
      premultipliedAlpha: true
    });
    materialRef.current = material;

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      powerPreference: 'high-performance',
      alpha: transparent // Sincronizamos el alpha del renderer
    });
    rendererRef.current = renderer;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    // Si no es transparente, limpiamos en negro
    renderer.setClearColor(0x000000, transparent ? 0 : 1);

    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    container.appendChild(renderer.domElement);

    const clock = new THREE.Clock();

    const handleResize = () => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      // Importante: asegurar que el renderer sepa el tamaño real
      renderer.setSize(w, h, false);
      material.uniforms.uCanvas.value.set(w, h);
    };

    // Observer moderno para detectar cambios de tamaño del DIV padre
    const ro = new ResizeObserver(() => handleResize());
    ro.observe(container);
    resizeObserverRef.current = ro;

    // Ejecutar una vez al inicio
    handleResize();

    const loop = () => {
      if (!materialRef.current || !rendererRef.current) return;
      const elapsed = clock.getDelta();

      const currentColors = colorsRef.current.slice(0, MAX_COLORS).map(toVec3);
      while (currentColors.length < MAX_COLORS) {
        currentColors.push(new THREE.Vector3(0, 0, 0));
      }
      for (let i = 0; i < MAX_COLORS; i++) {
        materialRef.current.uniforms.uColors.value[i].copy(currentColors[i]);
      }
      materialRef.current.uniforms.uColorCount.value = Math.min(colorsRef.current.length, MAX_COLORS);

      materialRef.current.uniforms.uTime.value += elapsed * speed;

      const deg = (rotation % 360) + autoRotate * clock.elapsedTime;
      const rad = (deg * Math.PI) / 180;
      materialRef.current.uniforms.uRot.value.set(Math.cos(rad), Math.sin(rad));

      const cur = pointerCurrentRef.current;
      const tgt = pointerTargetRef.current;
      cur.lerp(tgt, Math.min(1, elapsed * 8));
      materialRef.current.uniforms.uPointer.value.copy(cur);

      rendererRef.current.render(scene, camera);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (resizeObserverRef.current) resizeObserverRef.current.disconnect();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [transparent]); // Re-crear si cambia 'transparent'

  // Update uniforms
  useEffect(() => {
    if (!materialRef.current) return;
    materialRef.current.uniforms.uSpeed.value = speed;
    materialRef.current.uniforms.uScale.value = scale;
    materialRef.current.uniforms.uFrequency.value = frequency;
    materialRef.current.uniforms.uWarpStrength.value = warpStrength;
    materialRef.current.uniforms.uMouseInfluence.value = mouseInfluence;
    materialRef.current.uniforms.uParallax.value = parallax;
    materialRef.current.uniforms.uNoise.value = noise;
    materialRef.current.uniforms.uTransparent.value = transparent ? 1 : 0;
    materialRef.current.uniforms.uOpacity.value = opacity;
  }, [speed, scale, frequency, warpStrength, mouseInfluence, parallax, noise, transparent, opacity]);

  useEffect(() => {
    rotationRef.current = rotation;
    autoRotateRef.current = autoRotate;
  }, [rotation, autoRotate]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      pointerTargetRef.current.set(x, y);
    };
    container.addEventListener('pointermove', handlePointerMove);
    return () => container.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`color-bends-container ${className}`}
      style={{ ...style, width: '100%', height: '100%' }}
    />
  );
}