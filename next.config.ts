import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig & { allowedDevOrigins?: string[] } = {
  // Move allowedDevOrigins to top level for Next.js 15
  allowedDevOrigins: ["192.168.29.149:3000", "localhost:3000"],
  experimental: {
    // Add serverActions.allowedOrigins for Server Actions CSRF protection
    serverActions: {
      allowedOrigins: ["192.168.29.149:3000", "localhost:3000"],
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  serverExternalPackages: ["mongoose"],
  webpack: (config) => {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  }
};

export default nextConfig;
