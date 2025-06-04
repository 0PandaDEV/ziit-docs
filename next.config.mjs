import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const baseConfig = {
  reactStrictMode: true,
  devIndicators: false,
};

const mdxConfig = withMDX(baseConfig);

const finalConfig = {
  ...mdxConfig,
  webpack(config, options) {
    if (typeof mdxConfig.webpack === "function") {
      config = mdxConfig.webpack(config, options);
    }

    return config;
  },
};

export default finalConfig;
