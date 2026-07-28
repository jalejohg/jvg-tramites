import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required by the deployment pipeline: produce a fully static export in out/.
  output: "export",

  // Required for static export: the built-in image optimisation server cannot
  // run in a static context.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
