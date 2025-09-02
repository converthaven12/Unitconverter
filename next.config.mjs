/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },

  async redirects() {
    return [
      // Only fix the old uppercase route once
      { source: '/Converters/:path*', destination: '/converters/:path*', permanent: true },

      // Normalize trailing slashes under /converters to prevent loops
      { source: '/converters/:path*/', destination: '/converters/:path*', permanent: true },
    ];
  },
};

export default nextConfig;
