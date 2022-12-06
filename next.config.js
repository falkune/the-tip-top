/** @type {import('next').NextConfig} */
const nextConfig = {
  env: getEnvConfig(),
  /** `exportPathMap` is exclusive to `next export`, see https://nextjs.org/docs/api-reference/next.config.js/exportPathMap */
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
    }
  },
  reactStrictMode: true,
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

function getEnvConfig() {
  const environment = process.env.TARGET_ENV || process.env.NODE_ENV
  try {
     return require(`./env-${environment}.json`)
  } catch (err) {
    return require('./env.json')
  }
}

console.log(process.env.API_BASE_URL);