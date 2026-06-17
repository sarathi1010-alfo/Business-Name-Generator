import type { SeoMeta } from '@/types/seo';
import { SEO_CONFIG } from './config';
import { normalizeRoute } from './utils';

export function buildLandingMeta(): SeoMeta {
  return {
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    slug: normalizeRoute("/"),
    pageType: 'landing',
    ogImage: {
      url: `${SEO_CONFIG.baseUrl}/og?title=${encodeURIComponent(SEO_CONFIG.defaultTitle)}&type=landing`,
      alt: SEO_CONFIG.defaultTitle
    }
  };
}

export function buildIndustryMeta(industry: string): SeoMeta {
  const cap = industry.charAt(0).toUpperCase() + industry.slice(1);
  const title = `${cap} Business Name Generator`;
  return {
    title,
    description: `Find the perfect brandable name for your ${industry} company. Get inspired by our top ideas or try the full generator.`,
    slug: normalizeRoute(`/names-for-${industry}`),
    pageType: 'category',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: `${cap} Names`, href: normalizeRoute(`/names-for-${industry}`) }
    ],
    ogImage: {
      url: `${SEO_CONFIG.baseUrl}/og?title=${encodeURIComponent(title)}&type=category&category=${encodeURIComponent(cap)}`,
      alt: title
    }
  };
}

export function buildVibeMeta(vibe: string): SeoMeta {
  const cap = vibe.charAt(0).toUpperCase() + vibe.slice(1);
  const title = `${cap} Business Names`;
  return {
    title,
    description: `Discover ${vibe} business name ideas engineered for perception and trust. Use our interactive studio to filter by vibe, style, and length.`,
    slug: normalizeRoute(`/${vibe}-brand-names`),
    pageType: 'category',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: `${cap} Names`, href: normalizeRoute(`/${vibe}-brand-names`) }
    ],
    ogImage: {
      url: `${SEO_CONFIG.baseUrl}/og?title=${encodeURIComponent(title)}&type=category&category=${encodeURIComponent(cap)}`,
      alt: title
    }
  };
}

export function buildWorkspaceMeta(): SeoMeta {
  const title = "Brand Workspace";
  return {
    title,
    description: "Manage, refine, and deploy your generated brand identities.",
    slug: normalizeRoute("/workspace"),
    pageType: 'workspace',
    noindex: true,
    nofollow: true,
    ogImage: {
      url: `${SEO_CONFIG.baseUrl}/og?title=${encodeURIComponent(title)}&type=workspace`,
      alt: title
    }
  };
}
