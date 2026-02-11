import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  turbopack: {
    // Ensure Turbopack treats this folder as the workspace root.
    root: __dirname,
  },
};

export default nextConfig;
