import { NextIntlClientProvider, useMessages } from "next-intl";
import '../../styles/globals.css';

export default function LocaleLayout({
    children,
    params: {locale}
  }: {
    children: React.ReactNode;
    params: {locale: string};
  }) {

    const messages = useMessages();

    return (
        
      <html lang={locale}>
        <head>
      <link rel="icon"  type="image/x-icon" href="/falvicon.ico" />

        </head>
        <body><NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider></body>
      </html>
    );
  }