import { NextResponse } from 'next/server';
import { buildCanonical } from '@/lib/seo/buildCanonical';
import { generateSitemapXml } from '@/lib/seo/sitemap-utils';
import { MetadataRoute } from 'next';

export async function GET() {
  const routes: MetadataRoute.Sitemap = [
    {
      url: buildCanonical('/blog/choose-standout-brand-name'),
      lastModified: new Date().toISOString(),
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
