/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https', // The protocol (https)
            hostname: 'image.tmdb.org', // The hostname
            pathname: '/t/p/**', // The pattern for the image path (matches any path that starts with /t/p/)
          },
        ],
    },
};

export default nextConfig;
