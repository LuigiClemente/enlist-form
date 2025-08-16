import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Only use assetPrefix in production. In development it breaks local asset loading and can cause a white screen.
    assetPrefix: process.env.NODE_ENV === 'production' ? 'https://enlist-form.gutricious.com/' : undefined,

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