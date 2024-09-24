import { NextIntlClientProvider, useMessages, useTranslations } from "next-intl";
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
  const t = useTranslations("meta");

  return (

    <html lang={locale}>
    <head>
            <title>{t("title")}</title>
            <link rel="icon" type="image/x-icon" href="https://res.cloudinary.com/dizm8txou/image/upload/v1715953409/about-us/static/favicons/falvicon.ico" />
            <meta name="description" content={t("description")} />
            {/* <script defer data-domain="home.gutricious.com" src="https://plausible.gutricious.com/js/script.js"></script> */}
          </head>
      <body><NextIntlClientProvider locale={locale} messages={messages}>
        <ToasterProvider />
        {children}
      </NextIntlClientProvider></body>
    </html>
  );
}