import { NextIntlClientProvider, useMessages } from "next-intl";
import '../../styles/globals.css';
import { ToasterProvider } from '@/providers/toast-provider';

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {

  const messages = useMessages();

  return (

    <html lang={locale}>
      <head>
        <link rel="icon" type="image/x-icon" href="/falvicon.ico" />
        <script dangerouslySetInnerHTML={{
          __html: `
                var _paq = window._paq = window._paq || [];
                /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
                _paq.push(['trackPageView']);
                _paq.push(['enableLinkTracking']);
                (function() {
                  var u="//49.13.193.49:8080/";
                  _paq.push(['setTrackerUrl', u+'matomo.php']);
                  _paq.push(['setSiteId', '1']);
                  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                  g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
                })();
              `
        }} />
      </head>
      <body><NextIntlClientProvider locale={locale} messages={messages}>
        <ToasterProvider />
        {children}
      </NextIntlClientProvider></body>
    </html>
  );
}