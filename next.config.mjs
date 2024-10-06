/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'pocketbase-app.fly.dev',
            port: '',
            pathname: '/api/files/**'
        }]
    },
};

export default nextConfig;
