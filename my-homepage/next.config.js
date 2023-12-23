/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    outputStandalone: true,
    images: { allowFutureImage: true }
  }
}

module.exports = nextConfig
