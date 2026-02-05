"use client";
import ColorBends from "./components/ColorBends";

const PageBackground = () => (
  // 1. fixed inset-0: Pega el div a los bordes de la ventana.
  // 2. h-full w-full: Ocupa todo el viewport.
  // 3. bg-black: Fondo negro de seguridad por si el canvas tarda en cargar.
  <div className="fixed inset-0 -z-50 w-full h-full bg-black overflow-hidden pointer-events-none">
    <ColorBends
      opacity={0.5} // Ahora este valor sí funcionará aunque uses transparent={false}
      rotation={45}
      speed={0.6}
      colors={[
        "#022C22",
        "#064E3B",
        "#047857",
        "#0F766E",
        "#059669"
      ]}
      transparent={false} // Puesto en false para mejor rendimiento en tablets
      autoRotate={0}
      scale={1}
      frequency={1}
      warpStrength={1}
      mouseInfluence={0}
      parallax={0.5}
      noise={0}
    />
  </div>
);

export default PageBackground;