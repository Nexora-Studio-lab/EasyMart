import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/EasyMart",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
