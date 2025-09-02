/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Redirect old static converter paths to new dynamic routes
      {
        source: '/src/app/(screens)/Converters/:path*',
        destination: '/converters/:path*',
        permanent: true,
      },
      // Redirect uppercase Converters to lowercase converters
      {
        source: '/Converters/:path*',
        destination: '/converters/:path*',
        permanent: true,
      },
      // Redirect any remaining old converter patterns
      {
        source: '/(screens)/Converters/:path*',
        destination: '/converters/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
