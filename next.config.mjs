/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'certificate.thepickleballscoreboard.com',
            // port: '',
            // pathname: '/account123/**',
          },
        ],
      },
};

export default nextConfig;
