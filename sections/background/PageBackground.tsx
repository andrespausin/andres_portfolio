"use client";
import ColorBends from "./components/ColorBends";
// Importamos hook para detectar si es móvil (opcional, o simplemente lo ponemos en 0 siempre)
// Pero para una solución rápida, ajusta los props directamente.

const PageBackground = () => (
  // CAMBIO 1: h-[100lvh] en lugar de h-full. 
  // Esto fija la altura al tamaño máximo posible, ignorando si la barra de URL entra o sale.
  <div className="fixed inset-0 -z-50 w-full h-[100lvh] bg-black overflow-hidden pointer-events-none transform-gpu translate-z-0">
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
      transparent={false}
      autoRotate={0}
      scale={1}
      frequency={1}
      warpStrength={1}
      mouseInfluence={0}

      // CAMBIO 2: Parallax en 0. 
      // El parallax causa el 90% del temblor en móviles. 
      // Si realmente lo quieres en desktop, necesitarías una condición: isMobile ? 0 : 0.5
      parallax={0}

      noise={0}
    />
  </div>
);

export default PageBackground;