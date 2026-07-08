import { NextResponse } from 'next/server';
import { buildCanonical } from '@/lib/seo/buildCanonical';
import { generateSitemapXml } from '@/lib/seo/sitemap-utils';
import { MetadataRoute } from 'next';

export async function GET() {
  const routes: MetadataRoute.Sitemap = [
    {
      url: buildCanonical('/blog'),
      lastModified: "2025-05-21T00:00:00Z",
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: buildCanonical('/blog/choose-standout-brand-name'),
      lastModified: "2025-05-21T00:00:00Z",
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: buildCanonical('/blog/what-is-brand-identity'),
      lastModified: "2025-05-21T00:00:00Z",
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: buildCanonical('/blog/ultimate-guide-to-brand-archetypes'),
      lastModified: "2025-05-21T00:00:00Z",
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: buildCanonical('/blog/brand-identity-vs-brand-image'),
      lastModified: "2025-05-21T00:00:00Z",
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: buildCanonical('/blog/how-to-define-your-brand-voice'),
      lastModified: "2025-05-21T00:00:00Z",
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  const xml = generateSitemapXml(routes);

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
