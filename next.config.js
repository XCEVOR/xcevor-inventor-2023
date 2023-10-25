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
  reactStrictMode: true,
  env: {
    ENV_NODEMAILER_URL: process.env.ENV_NODEMAILER_URL,
  }
}

// module.exports = {
//   reactStrictMode: true,
//   env: {
//     ENV_NODEMAILER_URL: process.env.ENV_NODEMAILER_URL,
//   }
// }
