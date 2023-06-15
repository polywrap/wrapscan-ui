/** @type {import("next").NextConfig} */
const nextConfig = {
  webpack: (config, context) => {
    config.externals = [
      ...config.externals,
      "bufferutil",
      "utf-8-validate",
    ]
    return config;
  }
}

module.exports = nextConfig
