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
        <link rel="icon" type="image/x-icon" href="https://res.cloudinary.com/dizm8txou/image/upload/v1715953409/about-us/static/favicons/falvicon.ico" />
      </head>
      <body><NextIntlClientProvider locale={locale} messages={messages}>
        <ToasterProvider />
        {children}
      </NextIntlClientProvider></body>
    </html>
  );
}