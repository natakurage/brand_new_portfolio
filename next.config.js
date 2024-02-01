/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["img.youtube.com"]
  },
  transpilePackages: ['three'],
}

module.exports = nextConfig
