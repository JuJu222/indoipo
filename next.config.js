/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'juju222.sgp1.cdn.digitaloceanspaces.com',
                port: '',
                pathname: '/indoipo/img/**',
            },
        ],
    },
}

module.exports = nextConfig
