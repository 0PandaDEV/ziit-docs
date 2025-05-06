import { createMDX } from "fumadocs-mdx/next";
import IconsPlugin from "unplugin-icons/webpack";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const baseConfig = {
  reactStrictMode: true,
};

const mdxConfig = withMDX(baseConfig);

const finalConfig = {
  ...mdxConfig,
  webpack(config, options) {
    if (typeof mdxConfig.webpack === "function") {
      config = mdxConfig.webpack(config, options);
    }

    config.plugins.push(
      IconsPlugin({
        compiler: "jsx",
        jsx: "react",
      })
    );

    return config;
  },
};

export default finalConfig;
