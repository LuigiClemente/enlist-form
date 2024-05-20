import { routes } from '@/utils/routes';
import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';


export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();
    
    // Dynamically handle redirection based on the pathname
    for (const locale in routes) {
        for (const key in routes[locale]) {
            if (url.pathname === routes[locale][key]) {
                url.pathname = `/${locale}`; // Redirect to the root of the locale
                break;
            }
        }
    }

    // Handle internationalization
    const handleI18n = createMiddleware({
        locales: ['en', 'de', 'fr', 'es', 'it', 'nl', 'pt'],
        defaultLocale: 'en'
    });

    return handleI18n(new NextRequest(url, request));
}

export const config = {
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'] // Ensuring the matcher excludes specific paths
};
