import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://192.160.0.10:3000",
    "http://0.0.0.0:3000"
  ]
};

export default nextConfig;
