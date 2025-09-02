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
  trailingSlash: false,
  async redirects() {
    return [
      // Redirect uppercase Converters to lowercase converters
      {
        source: '/Converters/:path*',
        destination: '/converters/:path*',
        permanent: true,
      },
      // Remove trailing slashes from converter paths
      {
        source: '/converters/:path*/',
        destination: '/converters/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
