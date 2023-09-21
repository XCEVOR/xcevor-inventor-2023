/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'filepfolio.xcevor.com',
        port: '',
        // pathname: '/account123/**',
      },
    ],
  },
}