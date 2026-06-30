import { MetadataRoute } from 'next';
import { dictionary } from '@/data/dictionary';
import { buildCanonical } from '@/lib/seo/buildCanonical';

export const revalidate = 3600; // 1 hour ISR

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    {
      url: buildCanonical('/'),
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];

  // Blog Pages
  routes.push({
    url: buildCanonical('/blog/choose-standout-brand-name'),
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.9,
  });

  // Name Style Programmatic Pages
  const nameStyles = ['descriptive', 'evocative', 'abstract', 'acronym'];
  for (const style of nameStyles) {
    routes.push({
      url: buildCanonical(`/name-styles/${style}-brand-names`),
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  }

  // Target Industries Programmatic Pages
  const targetIndustries = ['tech-startup', 'fashion-brand', 'food-beverage', 'health-wellness'];
  for (const industry of targetIndustries) {
    routes.push({
      url: buildCanonical(`/industries/${industry}-names`),
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  }

  // Archetype Programmatic Pages
  const archetypes = ['hero', 'outlaw'];
  for (const archetype of archetypes) {
    routes.push({
      url: buildCanonical(`/archetypes/${archetype}-brand-names`),
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  }

  // Industry pages
  const industries = Object.keys(dictionary.industryTokens);
  for (const industry of industries) {
    routes.push({
      url: buildCanonical(`/names-for-${industry}`),
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  }

  // Vibe pages
  const vibes = Object.keys(dictionary.vibeTokens);
  for (const vibe of vibes) {
    routes.push({
      url: buildCanonical(`/${vibe}-brand-names`),
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  }

  return routes;
}
