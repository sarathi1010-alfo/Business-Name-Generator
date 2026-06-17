import type { Metadata } from 'next';
import type { SeoMeta } from '@/types/seo';
import { formatTitle } from './formatTitle';
import { buildCanonical } from './buildCanonical';
import { SEO_CONFIG, enforceTitleLength, enforceDescriptionLength } from './config';

export function resolveMetadata(meta: SeoMeta, isHomepage = false): Metadata {
  const canonical = meta.canonical ?? buildCanonical(meta.slug);

  // Apply formatting and enforcement
  const rawTitle = meta.title || SEO_CONFIG.defaultTitle;
  const formattedTitle = formatTitle(rawTitle, isHomepage);
  const title = enforceTitleLength(formattedTitle);

  const rawDescription = meta.description || SEO_CONFIG.defaultDescription;
  const description = enforceDescriptionLength(rawDescription);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: meta.alternateLocales
        ? Object.fromEntries(meta.alternateLocales.map(a => [a.locale, a.url]))
        : undefined,
    },
    robots: {
      index: !(meta.noindex ?? !SEO_CONFIG.robots.index),
      follow: !(meta.nofollow ?? !SEO_CONFIG.robots.follow),
      googleBot: {
        index: !(meta.noindex ?? !SEO_CONFIG.robots.index),
        follow: !(meta.nofollow ?? !SEO_CONFIG.robots.follow),
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SEO_CONFIG.siteName,
      type: (meta.pageType === 'article' ? 'article' : SEO_CONFIG.openGraph.type) as 'website' | 'article',
      images: meta.ogImage
        ? [{ url: meta.ogImage.url, width: meta.ogImage.width ?? 1200,
             height: meta.ogImage.height ?? 630, alt: meta.ogImage.alt }]
        : undefined,
      publishedTime: meta.publishedAt,
      modifiedTime: meta.updatedAt,
      authors: meta.author?.url ? [meta.author.url] : undefined,
      locale: meta.locale ?? SEO_CONFIG.defaultLocale,
    },
    twitter: {
      card: (meta.ogImage ? SEO_CONFIG.twitter.cardType : 'summary') as 'summary' | 'summary_large_image',
      title,
      description,
      images: meta.ogImage ? [meta.ogImage.url] : undefined,
    },
  };
}
