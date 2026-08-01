import { MetadataRoute } from 'next';
import { buildCanonical } from '@/lib/seo/buildCanonical';

export const revalidate = 3600; // 1 hour ISR

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: buildCanonical('/'),
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: buildCanonical('/about'),
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: buildCanonical('/identity-directions'),
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];
}
