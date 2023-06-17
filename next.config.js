/** @type {import("next").NextConfig} */
const nextConfig = {
  webpack: (config, context) => {
    // Use SVGR for SVG loading
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Polywrap plugin "polyfill"
    // Relies on having the correct Node version installed on host
    config.externals = [
      ...config.externals,
      "bufferutil",
      "utf-8-validate",
    ]
    return config;
  }
}

module.exports = nextConfig
