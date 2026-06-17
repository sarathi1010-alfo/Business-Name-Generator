export const SEO_CONFIG = {
  siteName: process.env.NEXT_PUBLIC_SITE_NAME ?? 'BrandForge',
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://brandforge.example.com',
  defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? 'en',

  titleLength: { min: 50, max: 60 },
  descriptionLength: { min: 140, max: 160 },

  defaultTitle: 'BrandForge - The AI Business Name Generator',
  defaultDescription: 'A fast, polished business naming studio that helps founders discover, filter, compare, and shortlist brandable names in seconds.',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'BrandForge',
  },

  twitter: {
    cardType: 'summary_large_image',
  },

  robots: {
    index: true,
    follow: true,
  }
};

export function enforceTitleLength(title: string): string {
  if (title.length < SEO_CONFIG.titleLength.min) {
    // Optionally pad or just warn. For now, just return.
    return title;
  }
  if (title.length > SEO_CONFIG.titleLength.max) {
    return title.slice(0, SEO_CONFIG.titleLength.max - 3) + '...';
  }
  return title;
}

export function enforceDescriptionLength(description: string): string {
  if (description.length > SEO_CONFIG.descriptionLength.max) {
    return description.slice(0, SEO_CONFIG.descriptionLength.max - 3) + '...';
  }
  return description;
}
