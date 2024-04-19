/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'robohash.org'
      },
      {
        protocol: 'https',
        hostname: 'axaxqyhwamavrxdhmtlh.supabase.co'
      }
    ]
  }
}

export default nextConfig
