import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    SERVER_API: process.env.SERVER_API,
    PROVICE_API: process.env.PROVICE_API,
  },
};

export default nextConfig;
