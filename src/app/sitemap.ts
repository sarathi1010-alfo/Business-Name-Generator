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
  ];
}
