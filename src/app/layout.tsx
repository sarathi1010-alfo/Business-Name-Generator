import './globals.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/lib/config';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `${siteConfig.siteName} | ${siteConfig.primaryKeyword}`,
  description: siteConfig.description,
  keywords: ['brand name generator', 'AI names', 'startup names', 'company name generator', 'business names'],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: `${siteConfig.siteName} | ${siteConfig.primaryKeyword}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.siteName,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.siteName} | ${siteConfig.primaryKeyword}`,
    description: siteConfig.description,
    creator: '@alfo_online',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": siteConfig.siteName,
              "url": siteConfig.url,
              "description": siteConfig.description,
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "All",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
