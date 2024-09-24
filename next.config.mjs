import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {

    assetPrefix: 'https://enlist-form.gutricious.com/',
    // assetPrefix: 'http://localhost:3000',

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