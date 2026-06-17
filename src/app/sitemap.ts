import { MetadataRoute } from 'next';
import { dictionary } from '@/data/dictionary';
import { buildCanonical } from '@/lib/seo/buildCanonical';
import { normalizeRoute } from '@/lib/seo/utils';

export const revalidate = 3600; // 1 hour ISR

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    {
      url: buildCanonical(normalizeRoute('/')),
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];

  // Industry pages
  const industries = Object.keys(dictionary.industryTokens);
  for (const industry of industries) {
    // Only include valid, non-empty industries
    if (!industry || industry.trim() === '') continue;

    routes.push({
      url: buildCanonical(normalizeRoute(`/names-for-${industry}`)),
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  }

  // Vibe pages
  const vibes = Object.keys(dictionary.vibeTokens);
  for (const vibe of vibes) {
    // Only include valid, non-empty vibes
    if (!vibe || vibe.trim() === '') continue;

    routes.push({
      url: buildCanonical(normalizeRoute(`/${vibe}-brand-names`)),
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  }

  return routes;
}
