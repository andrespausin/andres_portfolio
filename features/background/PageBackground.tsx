// components/layout/PageBackground.tsx
"use client";
import ColorBends from "./components/ColorBends";

// Paleta de colores escogida por Andrea
const paletaAndrea = ["#5227FF", "#7cff67", "#016e8f", "#0042a9", "#00018f"]

// Usando actualmente
const nightJungleWaves = [
  "#022C22",
  "#064E3B",
  "#047857",
  "#0F766E",
  "#059669"
];

const PageBackground = () => (
  <div className="fixed inset-0 z-0 pointer-events-none">
    <ColorBends
      opacity={0.5}
      rotation={45}
      speed={0.6}
      colors={[
        "#022C22",
        "#064E3B",
        "#047857",
        "#0F766E",
        "#059669"
      ]}
      transparent={true}
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
