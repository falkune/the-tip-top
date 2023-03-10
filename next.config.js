/** @type {import('next').NextConfig} */

const nextConfig = {
 // env: getEnvConfig(),
  /** `exportPathMap` is exclusive to `next export`, see https://nextjs.org/docs/api-reference/next.config.js/exportPathMap */
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
    }
  },
  reactStrictMode: false,
  swcMinify: true,
  trailingSlash: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            expandProps: 'start',
            icon: true,
            removeDimensions: true,
          },
        },
      ],
    },
    {
      test: /\.json5$/i,
      loader: 'json5-loader',
      options: {
        esModule: true,
      },
      type: 'javascript/auto',
    })
    return config
  },
}

module.exports = nextConfig