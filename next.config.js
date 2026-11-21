/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.crownsecuritysolutions.com',
          },
        ],
        destination: 'https://crownsecuritysolutions.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
