/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/doc2ai' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/doc2ai/' : '',
  trailingSlash: true,
}

module.exports = nextConfig 