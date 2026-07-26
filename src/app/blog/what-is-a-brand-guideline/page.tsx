import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildArticleMeta } from '@/lib/seo/metaFactories';
import { buildArticleSchema, buildBreadcrumbSchema, buildFaqSchema } from '@/lib/seo/buildSchema';
import { resolveMetadata } from '@/lib/seo/resolveMetadata';
import Link from 'next/link';

const meta = buildArticleMeta(
  'What is a Brand Guideline? The Founder\'s Blueprint',
  'A brand guideline is a document detailing how your brand should be presented visually and verbally. Learn why it is essential for scaling startups.',
  '/blog/what-is-a-brand-guideline',
  { publishedAt: new Date().toISOString() }
);

export async function generateMetadata(): Promise<Metadata> {
  return resolveMetadata(meta);
}

export default function WhatIsABrandGuidelinePage() {
  return (
    <>
      <JsonLd schema={buildBreadcrumbSchema(meta.breadcrumbs)} />
      <JsonLd schema={buildArticleSchema(meta)} />
      <JsonLd schema={buildFaqSchema([
        { question: 'What is a brand guideline?', answer: 'A brand guideline (or brand book) is a foundational document that defines exactly how a company presents itself to the world, covering visual rules (logos, colors, fonts) and verbal rules (voice, tone).' },
        { question: 'Do early-stage startups need brand guidelines?', answer: 'Yes, but keep it lightweight. A simple one-page document with exact hex codes, font links, and a brief tone-of-voice summary prevents massive visual inconsistencies as you hire your first contractors.' }
      ])} />

      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white">
        <article className="max-w-4xl mx-auto px-4 py-16 md:py-24 prose prose-slate dark:prose-invert prose-headings:font-bold prose-h1:text-4xl md:prose-h1:text-5xl prose-a:text-primary hover:prose-a:text-primary/80">
          <h1>What is a Brand Guideline?</h1>

          <p className="text-lg font-medium border-l-4 border-indigo-500 pl-4 py-1 bg-muted/30">
            A brand guideline is a foundational rulebook that codifies a company&apos;s visual and verbal identity—including precise logo usage, color hex codes, typography hierarchy, and tone of voice—ensuring absolute consistency across all internal and external communication channels.
          </p>

          <h2>How Do Brand Guidelines Work?</h2>
          <p>
            They work by establishing strict boundaries. A good guideline doesn&apos;t just show the logo; it shows how much &quot;clear space&quot; must be around the logo, what colors the logo can and cannot be placed on, and exact hex codes for the color palette. This ensures that a freelancer in another country produces work that looks exactly like it came from your core team.
          </p>

          <h2>Real-World Example in SaaS</h2>
          <p>
            Mailchimp&apos;s brand guidelines are legendary. They don&apos;t just specify their exact shade of &quot;Cavendish Yellow.&quot; They have an extensive section on &quot;Voice and Tone,&quot; detailing that their brand voice is &quot;fun but not silly,&quot; and &quot;confident but not cocky.&quot; This ensures that every piece of copy across their massive platform feels unified.
          </p>

          <h2>Why are Brand Guidelines Important for Founders?</h2>
          <p>
            Without a guideline, your brand will suffer from &quot;identity drift.&quot; As you hire more marketers, developers, and designers, everyone will bring their own subjective preferences to the table. Suddenly, your website uses three different shades of blue, and your Twitter account sounds completely different from your email newsletters. A guideline prevents this chaos and protects your brand equity as you scale.
          </p>

          <h2>Core Elements vs Implementation</h2>
          <div className="not-prose overflow-x-auto my-8">
            <table className="w-full border-collapse border border-border text-left">
              <thead>
                <tr className="bg-muted">
                  <th className="p-3 border border-border font-bold">Element</th>
                  <th className="p-3 border border-border font-bold">What it Defines</th>
                  <th className="p-3 border border-border font-bold">Why it Matters</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-border font-medium">Logo Usage</td>
                  <td className="p-3 border border-border">Clear space, minimum size, forbidden alterations.</td>
                  <td className="p-3 border border-border">Prevents your logo from being stretched or pixelated.</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border font-medium">Color Palette</td>
                  <td className="p-3 border border-border">Primary and secondary colors (Hex, RGB, CMYK).</td>
                  <td className="p-3 border border-border">Ensures exact color matching across digital and print.</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border font-medium">Typography</td>
                  <td className="p-3 border border-border">Approved fonts, weights, and hierarchy rules.</td>
                  <td className="p-3 border border-border">Maintains reading consistency and visual hierarchy.</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border font-medium">Voice & Tone</td>
                  <td className="p-3 border border-border">How the brand speaks (e.g., authoritative vs playful).</td>
                  <td className="p-3 border border-border">Creates a consistent personality in all written copy.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="my-8 p-6 bg-muted/20 border-l-4 border-primary">
            <h3 className="mt-0">Core Principles of a Great Brand Guideline</h3>
            <ul className="mb-0">
              <li><strong>Accessibility:</strong> The document should be easily accessible to everyone in your company, usually via a shared drive or a dedicated webpage.</li>
              <li><strong>Show, Don&apos;t Just Tell:</strong> Include visual examples of what *not* to do (e.g., &quot;Don&apos;t place the logo on busy backgrounds&quot;).</li>
              <li><strong>Living Document:</strong> A brand guideline should evolve. Update it as your company grows or enters new markets.</li>
            </ul>
          </div>

          <p>
            When you use <Link href="/">BrandForge</Link>, you aren&apos;t just getting a name; the output is effectively a lightweight brand guideline (a Brand Board) containing your archetype, typography, palette, and voice. You can export this immediately or view examples in our <Link href="/identity-directions">Generated Identity Directions</Link> gallery.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
