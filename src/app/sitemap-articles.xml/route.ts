import { NextResponse } from 'next/server';
import { buildCanonical } from '@/lib/seo/buildCanonical';
import { generateSitemapXml } from '@/lib/seo/sitemap-utils';
import { MetadataRoute } from 'next';

export async function GET() {
  const routes: MetadataRoute.Sitemap = [
    {
      url: buildCanonical('/blog/the-psychology-of-brand-names'),
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    {
      url: buildCanonical('/blog/how-to-rebrand-your-business'),
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: buildCanonical('/blog/what-is-a-brand-story'),
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: buildCanonical('/blog/how-to-choose-brand-colors'),
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: buildCanonical('/blog/how-to-build-brand-strategy'),
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: buildCanonical('/blog'),
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: buildCanonical('/blog/choose-standout-brand-name'),
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: buildCanonical('/blog/what-is-brand-identity'),
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: buildCanonical('/blog/ultimate-guide-to-brand-archetypes'),
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: buildCanonical('/blog/brand-identity-vs-brand-image'),
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: buildCanonical('/blog/how-to-define-your-brand-voice'),
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: buildCanonical('/blog/brandforge-vs-looka'),
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: buildCanonical('/blog/brandforge-vs-brandmark'),
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: buildCanonical('/blog/what-is-a-logo-mark'),
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: buildCanonical('/blog/what-is-color-psychology'),
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: buildCanonical('/blog/what-is-typography-in-branding'),
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: buildCanonical('/blog/what-is-a-brand-guideline'),
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: buildCanonical('/blog/what-is-brand-differentiation'),
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: buildCanonical('/blog/complete-guide-to-visual-identity-design'),
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: buildCanonical('/blog/how-to-ensure-brand-consistency'),
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
