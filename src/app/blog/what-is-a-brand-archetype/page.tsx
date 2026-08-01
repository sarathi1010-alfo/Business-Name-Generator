import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildArticleSchema, buildBreadcrumbSchema, buildFaqSchema } from '@/lib/seo/buildSchema';
import { buildArticleMeta } from '@/lib/seo/metaFactories';
import { resolveMetadata } from '@/lib/seo/resolveMetadata';
import Link from 'next/link';

const meta = buildArticleMeta(
  "What is a Brand Archetype? The Psychology of Branding",
  "A quick guide to understanding brand archetypes and how they shape your brand&apos;s personality and voice in 2026.",
  "/blog/what-is-a-brand-archetype",
  { updatedAt: "2026-07-10T00:00:00Z", publishedAt: "2026-07-10T00:00:00Z" }
);

export async function generateMetadata(): Promise<Metadata> {
  return resolveMetadata(meta);
}

const faqs = [
  { question: "What is a brand archetype?", answer: "A brand archetype is a universally familiar character type derived from Jungian psychology that provides a framework for a company's messaging and personality." }
];

export default function ArticlePage() {
  return (
    <>
      <JsonLd schema={buildBreadcrumbSchema(meta.breadcrumbs)} />
      <JsonLd schema={buildArticleSchema(meta)} />
      <JsonLd schema={buildFaqSchema(faqs)} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white">
        <article className="max-w-3xl mx-auto px-4 py-16 md:py-24 prose prose-lg dark:prose-invert">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">
            What is a Brand Archetype?
          </h1>

          <p className="text-lg font-medium border-l-4 border-indigo-500 pl-4 py-1 bg-muted/30">
            A brand archetype is a universally familiar character type—based on Carl Jung&apos;s psychology—that companies use to ground their brand in recognizable human traits. By adopting an archetype, brands create immediate emotional connections with their target audience.
          </p>

          <h2>How Does a Brand Archetype Work?</h2>
          <p>
            Archetypes work by tapping into our subconscious understanding of classic stories and characters. Instead of communicating a dry list of features, an archetype gives a brand a specific personality and worldview. This framework dictates everything from your <Link href="/blog/what-is-brand-voice" className="text-indigo-400 hover:underline">brand voice</Link> to your visual identity, making your marketing inherently cohesive.
          </p>

          <h2>Real-World Example in Retail</h2>
          <p>
            Think of Nike as <strong>The Hero</strong> archetype. Their entire identity is built around overcoming obstacles, pushing limits, and achieving greatness. They don&apos;t just sell shoes; they sell the feeling of victory. This is vastly different from a brand like Disney, which uses <strong>The Magician</strong> archetype to sell wonder, dreams, and transformation.
          </p>

          <h2>Why are Archetypes Important for Founders?</h2>
          <p>
            For founders, choosing an archetype acts as a strategic shortcut. It prevents your brand from sounding like a generic corporate entity. It gives you a clear filter for decision-making: &quot;Would &apos;The Rebel&apos; use this pastel color palette? No.&quot; This ensures extreme consistency across all touchpoints.
          </p>

          <h2>Brand Archetype vs User Persona</h2>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="pb-2">Feature</th>
                  <th className="pb-2">Brand Archetype</th>
                  <th className="pb-2">User Persona</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-2 font-semibold">Focus</td>
                  <td className="py-2">Who the company is</td>
                  <td className="py-2">Who the customer is</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 font-semibold">Basis</td>
                  <td className="py-2">Psychological patterns</td>
                  <td className="py-2">Demographics and behaviors</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Purpose</td>
                  <td className="py-2">Guides voice and identity</td>
                  <td className="py-2">Guides product and marketing targeting</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-xl mt-12 mb-12">
            <h3 className="mt-0 text-xl font-bold">Core Principles of Archetypes</h3>
            <ul className="mb-0">
              <li><strong>Commitment:</strong> Choose one primary archetype to avoid confusing your audience.</li>
              <li><strong>Authenticity:</strong> Ensure the archetype aligns with your actual product experience.</li>
              <li><strong>Emotional Resonance:</strong> Use the archetype to address the deep desires of your customers.</li>
              <li><strong>Visual Alignment:</strong> Match colors and typography to the archetype&apos;s vibe.</li>
            </ul>
          </div>

          <p>
            Ready to discover your archetype? Use the <Link href="/" className="text-indigo-400 hover:underline">BrandForge Generator Studio</Link> to map your vision to the perfect psychological framework. Or explore our <Link href="/blog/ultimate-guide-to-brand-identity" className="text-indigo-400 hover:underline">Ultimate Guide to Brand Identity</Link> for deeper context.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
