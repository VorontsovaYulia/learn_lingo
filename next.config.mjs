/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ftp.goit.study',
        port: '',
        pathname: '/img/avatars/**',
        search: '',
      },
    ],
  },
  experimental: {
    scrollRestoration: false,
  },
};

export default nextConfig;
