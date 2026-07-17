import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildArticleMeta } from '@/lib/seo/metaFactories';
import { buildArticleSchema, buildBreadcrumbSchema, buildFaqSchema } from '@/lib/seo/buildSchema';
import { resolveMetadata } from '@/lib/seo/resolveMetadata';
import Link from 'next/link';

const meta = buildArticleMeta(
  'What is Typography in Branding? A Guide for Founders',
  'Typography is the art of arranging type to make written language legible, readable, and appealing. Learn its crucial role in brand identity.',
  '/blog/what-is-typography-in-branding',
  { publishedAt: new Date().toISOString() }
);

export async function generateMetadata(): Promise<Metadata> {
  return resolveMetadata(meta);
}

export default function WhatIsTypographyPage() {
  return (
    <>
      <JsonLd schema={buildBreadcrumbSchema(meta.breadcrumbs)} />
      <JsonLd schema={buildArticleSchema(meta)} />
      <JsonLd schema={buildFaqSchema([
        { question: 'What is typography in branding?', answer: 'Typography in branding is the strategic selection and arrangement of fonts (typefaces) to visually communicate a brand\'s tone, personality, and professionalism.' },
        { question: 'Why do so many tech companies use sans-serif fonts?', answer: 'Sans-serif fonts are perceived as modern, clean, and forward-thinking. They also render exceptionally well on digital screens at small sizes.' }
      ])} />

      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white">
        <article className="max-w-4xl mx-auto px-4 py-16 md:py-24 prose prose-slate dark:prose-invert prose-headings:font-bold prose-h1:text-4xl md:prose-h1:text-5xl prose-a:text-primary hover:prose-a:text-primary/80">
          <h1>What is Typography in Branding?</h1>

          <div className="p-6 bg-card border rounded-lg not-prose my-8">
            <p className="text-muted-foreground font-medium">
              Typography in branding is the strategic selection and arrangement of typefaces (fonts) to visually communicate a brand&apos;s tone of voice. It is the clothes your words wear—determining whether your message feels authoritative, playful, luxurious, or approachable.
            </p>
          </div>

          <h2>How Does Typography Work?</h2>
          <p>
            Typography works through subtle visual cues. A typeface with sharp, geometric edges feels completely different from one with soft, flowing curves. By establishing a consistent hierarchy—using specific fonts for headlines (H1s) and others for body copy—a brand creates a recognizable rhythm and reading experience that users subconsciously associate with the company.
          </p>

          <h2>Real-World Example in Publishing</h2>
          <p>
            The New York Times uses a highly distinctive, complex Blackletter font for its logo, and traditional serif fonts for its articles. This typography instantly signals heritage, authority, and serious journalism. If they switched to a bubbly sans-serif font like Comic Sans, the credibility of the exact same words would plummet.
          </p>

          <h2>Why is Typography Important for Founders?</h2>
          <p>
            You will write millions of words as a founder—in emails, on landing pages, in pitch decks. Your typography is the visual framework for all that communication. Poor typography makes your product look cheap and hard to read, increasing bounce rates. Excellent typography builds trust and makes consuming your content effortless.
          </p>

          <h2>Typeface Categories vs Brand Vibe</h2>
          <div className="not-prose overflow-x-auto my-8">
            <table className="w-full border-collapse border border-border text-left">
              <thead>
                <tr className="bg-muted">
                  <th className="p-3 border border-border font-bold">Typeface Style</th>
                  <th className="p-3 border border-border font-bold">Vibe / Personality</th>
                  <th className="p-3 border border-border font-bold">Best Used For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-border font-medium">Serif (e.g., Times New Roman)</td>
                  <td className="p-3 border border-border">Traditional, Reliable, Elegant</td>
                  <td className="p-3 border border-border">Law firms, Luxury brands, Editorial</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border font-medium">Sans-Serif (e.g., Inter, Helvetica)</td>
                  <td className="p-3 border border-border">Modern, Clean, Approachable</td>
                  <td className="p-3 border border-border">Tech startups, SaaS, Apps</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border font-medium">Slab Serif (e.g., Roboto Slab)</td>
                  <td className="p-3 border border-border">Bold, Rugged, Confident</td>
                  <td className="p-3 border border-border">Automotive, Outdoors, Agencies</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border font-medium">Script / Display</td>
                  <td className="p-3 border border-border">Creative, Unique, Expressive</td>
                  <td className="p-3 border border-border">Boutiques, Food & Beverage (Logos only)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="my-8 p-6 bg-muted/20 border-l-4 border-primary">
            <h3 className="mt-0">Core Principles of Brand Typography</h3>
            <ul className="mb-0">
              <li><strong>Legibility First:</strong> Never sacrifice readability for style, especially in body copy.</li>
              <li><strong>Limit Your Fonts:</strong> Stick to a maximum of two typefaces (one for headers, one for body) to maintain consistency.</li>
              <li><strong>Establish Hierarchy:</strong> Use font weights (bold, regular, light) and sizes to guide the reader&apos;s eye through the page.</li>
            </ul>
          </div>

          <p>
            Struggling to pair fonts? The <Link href="/">BrandForge Studio</Link> automatically generates professional typography pairings tailored to your specific industry and archetype. For a deeper dive into how we handle typography versus other tools, read our <Link href="/blog/brandforge-vs-looka">BrandForge vs Looka comparison</Link>.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
