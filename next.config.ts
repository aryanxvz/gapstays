import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [], // Add your image domains here if loading from external URLs
    remotePatterns: [], // For more flexible external image source patterns
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
  }
};

export default nextConfig;