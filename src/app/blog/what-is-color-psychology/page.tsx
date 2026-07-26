import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildArticleMeta } from '@/lib/seo/metaFactories';
import { buildArticleSchema, buildBreadcrumbSchema, buildFaqSchema } from '@/lib/seo/buildSchema';
import { resolveMetadata } from '@/lib/seo/resolveMetadata';
import Link from 'next/link';

const meta = buildArticleMeta(
  'What is Color Psychology in Branding? A Guide for Founders',
  'Color psychology studies how colors influence human behavior and emotions. Learn how to strategically use color in your brand identity.',
  '/blog/what-is-color-psychology',
  { publishedAt: new Date().toISOString() }
);

export async function generateMetadata(): Promise<Metadata> {
  return resolveMetadata(meta);
}

export default function WhatIsColorPsychologyPage() {
  return (
    <>
      <JsonLd schema={buildBreadcrumbSchema(meta.breadcrumbs)} />
      <JsonLd schema={buildArticleSchema(meta)} />
      <JsonLd schema={buildFaqSchema([
        { question: 'What is color psychology in branding?', answer: 'Color psychology is the strategic use of color in branding to evoke specific emotional responses and associations in the target audience.' },
        { question: 'Why is blue so common in tech logos?', answer: 'Blue is psychologically associated with trust, security, and stability, which are critical elements for tech and finance companies handling user data and money.' }
      ])} />

      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white">
        <article className="max-w-4xl mx-auto px-4 py-16 md:py-24 prose prose-slate dark:prose-invert prose-headings:font-bold prose-h1:text-4xl md:prose-h1:text-5xl prose-a:text-primary hover:prose-a:text-primary/80">
          <h1>What is Color Psychology?</h1>

          <p className="text-lg font-medium border-l-4 border-indigo-500 pl-4 py-1 bg-muted/30">
            Color psychology in branding is the strategic study and application of specific color palettes to subconsciously trigger desired emotional responses, align with psychological archetypes, and communicate a brand&apos;s core values before a single word is read.
          </p>

          <h2>How Does Color Psychology Work?</h2>
          <p>
            Humans have ingrained biological and cultural associations with different colors. Red can signify danger or passion; green signifies nature or wealth. When a brand consistently uses a specific color, it attempts to anchor those inherent psychological traits to its product or service, creating a shortcut in the consumer&apos;s brain.
          </p>

          <h2>Real-World Example in Finance</h2>
          <p>
            Stripe uses a very specific, vibrant blurple (blue-purple). Blue communicates the necessary trust and security required for a payment processor, while the vibrancy and slight purple lean communicate innovation, tech-forwardness, and premium quality, setting them apart from legacy banks.
          </p>

          <h2>Why is Color Psychology Important for Founders?</h2>
          <p>
            Your color palette is often the first thing a user processes when a landing page loads. If you are building a calming meditation app but use stark, aggressive reds and blacks, the cognitive dissonance will cause users to bounce. Understanding color psychology ensures your visual identity aligns perfectly with your value proposition.
          </p>

          <h2>Common Color Associations</h2>
          <div className="not-prose overflow-x-auto my-8">
            <table className="w-full border-collapse border border-border text-left">
              <thead>
                <tr className="bg-muted">
                  <th className="p-3 border border-border font-bold">Color</th>
                  <th className="p-3 border border-border font-bold">Psychological Association</th>
                  <th className="p-3 border border-border font-bold">Common Industries</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-border font-medium">Blue</td>
                  <td className="p-3 border border-border">Trust, Security, Calm</td>
                  <td className="p-3 border border-border">Tech, Finance, Healthcare</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border font-medium">Red</td>
                  <td className="p-3 border border-border">Energy, Urgency, Passion</td>
                  <td className="p-3 border border-border">Food, Entertainment, Retail</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border font-medium">Green</td>
                  <td className="p-3 border border-border">Growth, Nature, Wealth</td>
                  <td className="p-3 border border-border">Eco-brands, Agriculture, Finance</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border font-medium">Black</td>
                  <td className="p-3 border border-border">Luxury, Sophistication, Power</td>
                  <td className="p-3 border border-border">Fashion, High-end Tech, Automotive</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="my-8 p-6 bg-muted/20 border-l-4 border-primary">
            <h3 className="mt-0">Core Principles of Choosing Brand Colors</h3>
            <ul className="mb-0">
              <li><strong>Context is Key:</strong> Cultural associations vary globally. What means &quot;luck&quot; in one country might mean &quot;mourning&quot; in another.</li>
              <li><strong>Differentiation:</strong> Don&apos;t just copy the market leader. Use color to stand out (e.g., T-Mobile using Magenta in a sea of blue and red telecoms).</li>
              <li><strong>Accessibility:</strong> Ensure your primary brand colors meet contrast ratio standards for web accessibility.</li>
            </ul>
          </div>

          <p>
            Ready to find the perfect color palette for your startup? Explore the <Link href="/">BrandForge Generator</Link>, which automatically matches color psychology to your chosen industry and vibe, or browse our <Link href="/identity-directions">Generated Identity Directions</Link> to see these principles in action.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
