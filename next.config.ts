import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.escuelajs.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placeimg.com', // Agregado: Común en placeholders de la API
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos', // Agregado: Muy usado para imágenes aleatorias
        pathname: '/**',
      },
    ],
  },
  // Opcional: Esto ayuda si tienes problemas con librerías que no son compatibles con Turbopack todavía
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
};

export default nextConfig;