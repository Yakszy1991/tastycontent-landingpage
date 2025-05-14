import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: { 
    allowMiddlewareResponseBody: true,
  },
};

export default nextConfig;