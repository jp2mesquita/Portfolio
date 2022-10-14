/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/102042713?v=4',
      },
    ],
    domains:[ 'avatars.githubusercontent.com' ]
  },

  experimental: {
    newNextLinkBehavior: true,
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
}


module.exports = nextConfig

