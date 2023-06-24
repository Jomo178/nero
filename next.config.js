/** @type {import('next').NextConfig} */
import { runtimeConfig } from "./runtimeConfig";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
        port: "",
        pathname: "/avatars/**",
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
  publicRuntimeConfig: runtimeConfig,
};

module.exports = nextConfig;
