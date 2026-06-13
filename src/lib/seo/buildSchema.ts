import type { SeoMeta } from '@/types/seo';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://brandforge.example.com';
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? 'BrandForge';

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: BASE_URL,
    logo: `${BASE_URL}/favicon.ico`,
  };
}

export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: BASE_URL,
  };
}

export function buildBreadcrumbSchema(items?: Array<{ label: string; href: string }>) {
  if (!items || items.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${BASE_URL}${item.href}`,
    })),
  };
}

export function buildArticleSchema(meta: SeoMeta) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.title,
    description: meta.description,
    image: meta.ogImage?.url,
    datePublished: meta.publishedAt,
    dateModified: meta.updatedAt ?? meta.publishedAt,
    author: meta.author ? {
      '@type': 'Person',
      name: meta.author.name,
      url: meta.author.url,
    } : undefined,
    publisher: buildOrganizationSchema(),
  };
}

export function buildProductSchema(meta: SeoMeta) {
  if (!meta.productData) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: meta.productData.name,
    description: meta.description,
    image: meta.ogImage?.url,
    sku: meta.productData.sku,
    brand: meta.productData.brand ? {
      '@type': 'Brand',
      name: meta.productData.brand,
    } : undefined,
    offers: {
      '@type': 'Offer',
      priceCurrency: meta.productData.currency,
      price: meta.productData.price,
      availability: `https://schema.org/${meta.productData.availability}`,
      url: `${BASE_URL}${meta.slug}`,
    },
    aggregateRating: meta.productData.ratingValue ? {
      '@type': 'AggregateRating',
      ratingValue: meta.productData.ratingValue,
      reviewCount: meta.productData.reviewCount,
    } : undefined,
  };
}

export function buildFaqSchema(items?: Array<{ question: string; answer: string }>) {
  if (!items || items.length === 0) return null;
  // AEO constraints: answer is plain text, questions are natural language
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function buildAuthorSchema(meta: SeoMeta) {
  if (!meta.author) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: meta.author.name,
    url: meta.author.url,
  };
}

export function buildSitelinksSearchBoxSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: BASE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };
}

export function buildHowToSchema(page: { title: string; description: string; steps?: { heading: string; body: string; image?: { url: string } }[]; estimatedTime?: string }) {
  if (!page || !page.steps) return null;
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": page.title,
    "description": page.description,
    "step": page.steps.map((s, i: number) => ({
      "@type": "HowToStep",
      "position": i + 1,
      "name": s.heading,
      "text": s.body,
      "image": s.image?.url,
    })),
    "totalTime": page.estimatedTime,
  };
}
