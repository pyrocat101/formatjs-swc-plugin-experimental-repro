/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    swcPlugins: [
      [
        "@formatjs/swc-plugin-experimental",
        {
          ast: true,
          // idInterpolationPattern: "[sha512:contenthash:base64:6]",
        },
      ],
    ],
  },
};

module.exports = nextConfig;
