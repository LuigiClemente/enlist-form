import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: 'https://enlist-form.gutricious.com/en',
};
 
export default withNextIntl(nextConfig);