// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  output: 'export',
  distDir: 'out',
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
