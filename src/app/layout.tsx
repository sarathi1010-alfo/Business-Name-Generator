import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import type { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://brandforge.example.com"),
  title: "BrandForge - The AI Business Name Generator",
  description: "A fast, polished business naming studio that helps founders discover, filter, compare, and shortlist brandable names in seconds.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BrandForge - The AI Business Name Generator",
    description: "A fast, polished business naming studio that helps founders discover, filter, compare, and shortlist brandable names in seconds.",
    url: "https://brandforge.example.com",
    siteName: "BrandForge",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrandForge - The AI Business Name Generator",
    description: "A fast, polished business naming studio that helps founders discover, filter, compare, and shortlist brandable names in seconds.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="google-adsense-account" content="ca-pub-6393936268623951" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
