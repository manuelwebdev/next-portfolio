/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      { hostname: '*.public.blob.vercel-storage.com' },
      {
        hostname: 'ffaeqnqphdctghpoyevp.supabase.co',
        pathname: '/storage/v1/object/**',
      },
    ],
  },
}

module.exports = nextConfig
