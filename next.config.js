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
  }
}


module.exports = nextConfig
