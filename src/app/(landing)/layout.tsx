import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Business Name Generator | Brand Name Ideas - BrandForge',
  description:
    'Generate catchy, brandable business name ideas in seconds. Free AI company name generator with industry filters, style presets, and domain checks.',
  alternates: {
    canonical: 'http://brandforge.alfo.online/',
  },
  openGraph: {
    title: 'Free Business Name Generator | Brand Name Ideas - BrandForge',
    description:
      'Generate catchy, brandable business name ideas in seconds. Free AI company name generator with industry filters, style presets, and domain checks.',
    url: 'http://brandforge.alfo.online/',
    siteName: 'BrandForge',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Free Business Name Generator | Brand Name Ideas - BrandForge',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Business Name Generator | Brand Name Ideas - BrandForge',
    description:
      'Generate catchy, brandable business name ideas in seconds. Free AI company name generator with industry filters, style presets, and domain checks.',
    images: ['/og-image.png'],
  },
};

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
