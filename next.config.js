/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/services/escort-services',
        destination: '/services/security-escort-services/',
        permanent: true,
      },
      {
        source: '/services/escort-services/',
        destination: '/services/security-escort-services/',
        permanent: true,
      },
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
