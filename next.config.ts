import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['notion.yuuuuuui.com', 'events.yuuuuuui.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'notion.yuuuuuui.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
