export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://brandforge.example.com';

/**
 * Normalizes a route by ensuring it starts with a slash, has no duplicate slashes,
 * is completely lowercase, and uses kebab-case instead of spaces.
 */
export function normalizeRoute(route: string): string {
  if (!route) return '/';

  // Extract path to avoid modifying search params
  const isUrl = route.startsWith('http');
  let urlObj;
  try {
    if (isUrl) {
      urlObj = new URL(route);
    } else {
      urlObj = new URL(route, 'http://localhost');
    }
  } catch {
    return '/'; // Fallback
  }

  // Convert path to lower case and trim
  let normalizedPath = urlObj.pathname.toLowerCase().trim();

  // Replace spaces and special chars (except slashes and hyphens) with hyphens
  normalizedPath = normalizedPath.replace(/[^a-z0-9\/-]+/g, '-');

  // Remove consecutive hyphens
  normalizedPath = normalizedPath.replace(/-+/g, '-');

  // Ensure it starts with a slash
  if (!normalizedPath.startsWith('/')) {
    normalizedPath = '/' + normalizedPath;
  }

  // Remove duplicate slashes
  normalizedPath = normalizedPath.replace(/\/+/g, '/');

  // Remove trailing slash unless it's just '/'
  if (normalizedPath.length > 1 && normalizedPath.endsWith('/')) {
    normalizedPath = normalizedPath.slice(0, -1);
  }

  // Reconstruct
  if (isUrl) {
      urlObj.pathname = normalizedPath;
      return urlObj.toString();
  } else {
      return `${normalizedPath}${urlObj.search}${urlObj.hash}`;
  }
}

/**
 * Generates a fully canonical URL ensuring HTTPS, no trailing slash, and lowercase.
 */
export function generateCanonicalUrl(slug: string): string {
  const base = BASE_URL.replace(/\/$/, '');

  // if slug is already an absolute URL, normalize it
  if (slug.startsWith('http')) {
      try {
          const url = new URL(slug);
          // force https
          url.protocol = 'https:';
          url.pathname = normalizeRoute(url.pathname);
          // strip search params for canonical
          url.search = '';
          return url.toString().replace(/\/$/, '');
      } catch {
          // fallback
      }
  }

  const normalizedPath = normalizeRoute(slug);
  // Remove query/hash for canonical
  const pathOnly = normalizedPath.split('?')[0].split('#')[0];
  return pathOnly === '/' ? base + '/' : `${base}${pathOnly}`;
}

/**
 * Validates and normalizes internal links for consistent routing.
 */
export function validateInternalLink(href: string): string {
  if (!href || href === '#') return '/';
  if (href.startsWith('http')) return href; // External link

  return normalizeRoute(href);
}

/**
 * Sanitizes a dynamic slug for static params generation
 */
export function sanitizeSlug(slug: string): string {
  if (!slug) return '';
  return slug
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}
