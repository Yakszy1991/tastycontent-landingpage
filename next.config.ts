import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: { 
    allowMiddlewareResponseBody: true,
    turbo: { 
      loaders: { 
        '.woff': ['@vercel/font'], 
        '.woff2': ['@vercel/font'], 
      }, 
    },
  },
};

export default nextConfig;