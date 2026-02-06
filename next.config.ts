import type { NextConfig } from "next";
import withBundleAnalyzer from '@next/bundle-analyzer';

// 1. Configuramos el wrapper del analizador
const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

// 2. Tu configuración actual de Next.js
const nextConfig: NextConfig = {
  /* config options here */
  // Si tienes configuración de imágenes u otras cosas, van aquí adentro
};

// 3. Exportamos la configuración ENVUELTA por el analizador
export default bundleAnalyzer(nextConfig);