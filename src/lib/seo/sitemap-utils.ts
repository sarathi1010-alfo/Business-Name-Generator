import { MetadataRoute } from 'next';

export function generateSitemapXml(routes: MetadataRoute.Sitemap): string {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    return `  <url>
    <loc>${route.url}</loc>
    ${route.lastModified ? `<lastmod>${route.lastModified instanceof Date ? route.lastModified.toISOString() : route.lastModified}</lastmod>` : ''}
    ${route.changeFrequency ? `<changefreq>${route.changeFrequency}</changefreq>` : ''}
    ${route.priority !== undefined ? `<priority>${route.priority.toFixed(1)}</priority>` : ''}
  </url>`;
  })
  .join('\n')}
</urlset>`;

  return xml;
}
