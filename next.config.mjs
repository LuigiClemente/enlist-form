import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/enlist-form',
    assetPrefix: 'https://enlist-form.gutricious.com/',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
              },
        ]
    },
    
};

export default withNextIntl(nextConfig);