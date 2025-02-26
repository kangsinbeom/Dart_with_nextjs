import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  instrumentationHook: true,
  images: {
    unoptimized: true,
    domains: [],
  },
};

export default nextConfig;
