import { MetadataRoute } from 'next';
import { dictionary } from '@/data/dictionary';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://brandforge.alfo.online';

  const routes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.1 },
    { url: `${baseUrl}/terms-of-service`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.1 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
  ];

  // Industry pages
  const industries = Object.keys(dictionary.industryTokens);
  for (const industry of industries) {
    routes.push({
      url: `${baseUrl}/names-for-${industry}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  }

  // Vibe pages
  const vibes = Object.keys(dictionary.vibeTokens);
  for (const vibe of vibes) {
    routes.push({
      url: `${baseUrl}/${vibe}-brand-names`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  }

  return routes;
}
