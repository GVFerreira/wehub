import "@/app/globals.css"

import type React from "react"
import { Montserrat } from 'next/font/google'
import { notFound } from "next/navigation"
import { ThemeProvider } from "../../components/theme-provider"
import { Toaster } from "@/components/ui/sonner"

import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { routing } from '@/i18n/routing'

const montserrat = Montserrat({
  weight: ["100", "300","400", "500","700","900"],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
})
 
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 
  return (
    <html lang={locale} className={montserrat.className} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/favicon.png" type="image/png" sizes="512x512" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

