import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildArticleMeta } from '@/lib/seo/metaFactories';
import { buildArticleSchema, buildBreadcrumbSchema, buildFaqSchema } from '@/lib/seo/buildSchema';
import { resolveMetadata } from '@/lib/seo/resolveMetadata';
import Link from 'next/link';

const meta = buildArticleMeta(
  'What is a Logo Mark? Everything Founders Need to Know',
  'A logo mark is the symbol or icon used to identify a brand, separate from its typography. Learn how it works and why it is important for founders.',
  '/blog/what-is-a-logo-mark',
  { updatedAt: new Date().toISOString() }
);

export async function generateMetadata(): Promise<Metadata> {
  return resolveMetadata(meta);
}

export default function WhatIsALogoMarkPage() {
  return (
    <>
      <JsonLd schema={buildBreadcrumbSchema(meta.breadcrumbs)} />
      <JsonLd schema={buildArticleSchema(meta)} />
      <JsonLd schema={buildFaqSchema([
        { question: 'What is a logo mark?', answer: 'A logo mark is the standalone symbol or icon representing a brand, without the accompanying text or wordmark (e.g., the Nike swoosh or the Apple apple).' },
        { question: 'Do I need a logo mark?', answer: 'Not necessarily. Many successful brands use a wordmark exclusively (like Google). However, a logo mark helps in environments with limited space, like app icons or social media avatars.' }
      ])} />

      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white">
        <article className="max-w-4xl mx-auto px-4 py-16 md:py-24 prose prose-slate dark:prose-invert prose-headings:font-bold prose-h1:text-4xl md:prose-h1:text-5xl prose-a:text-primary hover:prose-a:text-primary/80">
          <h1>What is a Logo Mark?</h1>

          <p className="text-lg font-medium border-l-4 border-indigo-500 pl-4 py-1 bg-muted/30">
            A logo mark is the standalone symbol, icon, or visual shorthand representing a brand—entirely separate from its typography or wordmark—used to build rapid visual recognition in environments with limited space, such as app icons.
          </p>

          <h2>How Does a Logo Mark Work?</h2>
          <p>
            A logo mark works through repetition and association. When a company first launches, its logo mark usually appears alongside its wordmark (the company name in a specific font) to form a complete lockup. Over time, as brand equity builds, the company can often drop the text entirely, relying solely on the mark to be recognized by consumers.
          </p>

          <h2>Real-World Example in Tech</h2>
          <p>
            Consider Airbnb&apos;s &quot;Bélo&quot; symbol. It&apos;s a logo mark designed to represent belonging, combining symbols of people, places, love, and an &apos;A&apos;. It can stand alone on an app icon or a physical sign, instantly communicating the brand without needing to spell out &quot;Airbnb&quot;.
          </p>

          <h2>Why is a Logo Mark Important for Founders?</h2>
          <p>
            For digital founders, a logo mark is critical for real estate. App icons, browser favicons, and social media profile pictures offer very limited pixel space. Trying to cram a long descriptive wordmark into a tiny circle makes it illegible. A strong, simple logo mark solves this problem by ensuring your brand is identifiable at any scale.
          </p>

          <h2>Logo Mark vs Wordmark</h2>
          <div className="not-prose overflow-x-auto my-8">
            <table className="w-full border-collapse border border-border text-left">
              <thead>
                <tr className="bg-muted">
                  <th className="p-3 border border-border font-bold">Element</th>
                  <th className="p-3 border border-border font-bold">Logo Mark</th>
                  <th className="p-3 border border-border font-bold">Wordmark</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-border font-medium">Definition</td>
                  <td className="p-3 border border-border">A symbol or icon</td>
                  <td className="p-3 border border-border">The name spelled out in a specific font</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border font-medium">Best Use Case</td>
                  <td className="p-3 border border-border">App icons, favicons, small profile pictures</td>
                  <td className="p-3 border border-border">Website headers, primary brand introductions</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border font-medium">Examples</td>
                  <td className="p-3 border border-border">Target Bullseye, Spotify Icon</td>
                  <td className="p-3 border border-border">Google, Stripe, Netflix</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="my-8 p-6 bg-muted/20 border-l-4 border-primary">
            <h3 className="mt-0">Core Principles of a Great Logo Mark</h3>
            <ul className="mb-0">
              <li><strong>Simplicity:</strong> It should be recognizable even when scaled down to a 16x16 pixel favicon.</li>
              <li><strong>Relevance:</strong> While it doesn&apos;t need to literally show what you sell, the abstract feeling should align with your brand archetype.</li>
              <li><strong>Distinctiveness:</strong> It must stand out from competitors within your specific industry. Learn <Link href="/blog/how-to-design-a-memorable-logo">how to design a memorable logo</Link> to ensure your mark truly represents your brand.</li>
            </ul>
          </div>

          <p>
            Before you invest in a logo mark, you need to establish your core brand identity. Start by exploring our <Link href="/">BrandForge Studio</Link> or browsing our <Link href="/identity-directions">Generated Identity Directions</Link> to build the foundational DNA (Archetype, Palette, Typography) that will inform your future logo mark design.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
