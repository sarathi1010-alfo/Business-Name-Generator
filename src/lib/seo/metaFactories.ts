import type { SeoMeta } from '@/types/seo';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://brandforge.alfo.online';

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
