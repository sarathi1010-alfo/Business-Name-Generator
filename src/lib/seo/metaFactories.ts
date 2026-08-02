import type { SeoMeta } from '@/types/seo';

const BASE_URL = 'https://brandforge.alfo.online';

function truncate(str: string, length: number = 160): string {
  if (str.length <= length) return str;
  return str.slice(0, length - 3) + '...';
}

export function buildLandingMeta(): SeoMeta {
  const title = "BrandForge - The AI Business Name Generator";
  return {
    title,
    description: "A fast, polished business naming studio that helps founders discover, filter, compare, and shortlist brandable names in seconds.",
    slug: "/",
    pageType: 'landing',
    ogImage: {
      url: `${BASE_URL}/og?title=${encodeURIComponent(title)}&type=landing`,
      alt: title
    }
  };
}

export function buildArticleMeta(
  title: string,
  description: string,
  slug: string,
  options?: { publishedAt?: string; updatedAt?: string }
): SeoMeta {
  return {
    title,
    description: truncate(description),
    slug,
    pageType: 'article',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Blog', href: '/blog' },
      { label: title, href: slug }
    ],
    publishedAt: options?.publishedAt || new Date().toISOString(),
    updatedAt: options?.updatedAt,
    ogImage: {
      url: `${BASE_URL}/og?title=${encodeURIComponent(title)}&type=article`,
      alt: title
    }
  };
}

export function buildIndustryMeta(industry: string): SeoMeta {
  const cap = industry.charAt(0).toUpperCase() + industry.slice(1);
  const title = `${cap} Business Name Generator`;
  return {
    title,
    description: truncate(`Find the perfect brandable name for your ${industry} company. Get inspired by our top ideas or try the full generator.`),
    slug: `/names-for-${industry}`,
    pageType: 'category',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: `${cap} Names`, href: `/names-for-${industry}` }
    ],
    ogImage: {
      url: `${BASE_URL}/og?title=${encodeURIComponent(title)}&type=category&category=${encodeURIComponent(cap)}`,
      alt: title
    }
  };
}

export function buildVibeMeta(vibe: string): SeoMeta {
  const cap = vibe.charAt(0).toUpperCase() + vibe.slice(1);
  const title = `${cap} Business Names`;
  return {
    title,
    description: truncate(`Discover ${vibe} business name ideas engineered for perception and trust. Use our interactive studio to filter by vibe, style, and length.`),
    slug: `/${vibe}-brand-names`,
    pageType: 'category',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: `${cap} Names`, href: `/${vibe}-brand-names` }
    ],
    ogImage: {
      url: `${BASE_URL}/og?title=${encodeURIComponent(title)}&type=category&category=${encodeURIComponent(cap)}`,
      alt: title
    }
  };
}

export function buildNameStyleMeta(style: string): SeoMeta {
  const words = style.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const title = `${words} Brand Names`;
  return {
    title,
    description: truncate(`Find the perfect ${style.replace('-', ' ')} brand name. Discover ideas engineered for perception, trust, and uniqueness.`),
    slug: `/name-styles/${style}-brand-names`,
    pageType: 'category',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Name Styles', href: '/name-styles' },
      { label: title, href: `/name-styles/${style}-brand-names` }
    ],
    ogImage: {
      url: `${BASE_URL}/og?title=${encodeURIComponent(title)}&type=category`,
      alt: title
    }
  };
}

export function buildArchetypeMeta(archetype: string): SeoMeta {
  const cap = archetype.charAt(0).toUpperCase() + archetype.slice(1);
  const title = `${cap} Brand Archetype Names`;
  return {
    title,
    description: truncate(`Discover powerful brand names inspired by the ${cap} archetype. Master the psychology of branding to connect deeply with your audience.`),
    slug: `/archetypes/${archetype}-brand-names`,
    pageType: 'category',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Archetypes', href: '/archetypes' },
      { label: title, href: `/archetypes/${archetype}-brand-names` }
    ],
    ogImage: {
      url: `${BASE_URL}/og?title=${encodeURIComponent(title)}&type=category`,
      alt: title
    }
  };
}

export function buildWorkspaceMeta(): SeoMeta {
  const title = "Brand Workspace";
  return {
    title,
    description: "Manage, refine, and deploy your generated brand identities.",
    slug: "/workspace",
    pageType: 'workspace',
    noindex: true,
    nofollow: true,
    ogImage: {
      url: `${BASE_URL}/og?title=${encodeURIComponent(title)}&type=workspace`,
      alt: title
    }
  };
}
