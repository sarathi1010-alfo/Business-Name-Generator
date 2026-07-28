import { NextResponse } from 'next/server';
import { MetadataRoute } from 'next';
import { dictionary } from '@/data/dictionary';
import { buildCanonical } from '@/lib/seo/buildCanonical';
import { generateSitemapXml } from '@/lib/seo/sitemap-utils';

export async function GET() {
  const routes: MetadataRoute.Sitemap = [];

  // Name Style Programmatic Pages
  const nameStyles = ['descriptive', 'evocative', 'abstract', 'acronym', 'portmanteau', 'founder', 'compound', 'invented'];
  for (const style of nameStyles) {
    routes.push({
      url: buildCanonical(`/name-styles/${style}-brand-names`),
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  }

  // Target Industries Programmatic Pages
  const targetIndustries = ['tech-startup', 'fashion-brand', 'food-beverage', 'health-wellness', 'ai-company', 'saas-business', 'beauty-brand', 'finance-startup', 'ecommerce-store', 'agency-business', 'gaming-company', 'education-brand', 'fitness-brand', 'real-estate-company', 'consulting-business', 'nonprofit-organization', 'photography-business', 'podcast', 'dental-clinic', 'cleaning-business', 'medical-brand', 'nutrition-brand', 'fitness-app', 'marketing-agency', 'design-studio', 'coffee-shop', 'restaurant', 'skincare-brand', 'clothing-brand', 'cybersecurity-company', 'crypto-startup', 'solar-company', 'robotics-company', 'logistics-business', 'biotech-company', 'travel-agency', 'hospitality-brand', 'pet-brand', 'music-studio', 'automotive-brand', 'legal-firm', 'accounting-firm', 'architecture-firm', 'wedding-business', 'landscaping-business', 'plumbing-company', 'bakery', 'brewery', 'spa', 'tattoo-shop'];
  for (const industry of targetIndustries) {
    routes.push({
      url: buildCanonical(`/industries/${industry}-names`),
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  }

  // Archetype Programmatic Pages
  const archetypes = ['hero', 'outlaw', 'creator', 'sage', 'magician', 'explorer', 'jester', 'lover', 'ruler', 'caregiver', 'everyman', 'innocent'];
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

  const xml = generateSitemapXml(routes);

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
