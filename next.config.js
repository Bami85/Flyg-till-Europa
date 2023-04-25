/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/images/${slug}.jpeg:slug*',
        destination: `https://localhost:3000/api/resorpaket/:slug*`,
      },
    ]
  },
}


module.exports = nextConfig
