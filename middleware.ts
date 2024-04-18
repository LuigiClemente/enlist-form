import createMiddleware from 'next-intl/middleware';
import { languages, locales } from './utils/languages';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales,
 
  // Used when no locale matches
  defaultLocale: 'en'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|pt|es|fr|it|nl|de)/:path*']
};