import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildArticleSchema, buildBreadcrumbSchema, buildFaqSchema } from '@/lib/seo/buildSchema';
import { buildArticleMeta } from '@/lib/seo/metaFactories';
import { resolveMetadata } from '@/lib/seo/resolveMetadata';
import Link from 'next/link';

const meta = buildArticleMeta(
  "What is a Brand Story? A Guide for Founders",
  "Discover what a brand story is, why it matters, and how to craft one that connects emotionally with your audience and builds lasting loyalty.",
  "/blog/what-is-a-brand-story",
  { updatedAt: "2026-07-22T00:00:00Z" }
);

export async function generateMetadata(): Promise<Metadata> {
  return resolveMetadata(meta);
}

const faqs = [
  { question: `What is a brand story?`, answer: `A brand story is the cohesive narrative that encompasses the facts and feelings created by your brand. It explains the 'why' behind your business, beyond just the products or services you sell.` },
  { question: `Why is a brand story important?`, answer: `It builds an emotional connection with your audience, making your brand more memorable, fostering trust, and differentiating you from competitors.` },
  { question: 'How do I write a good brand story?', answer: 'Focus on authenticity, identify your core values, understand your audience&apos;s pain points, and structure it like a traditional story with a clear conflict and resolution.' }
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
            What is a Brand Story?
          </h1>

          <h2>What is a brand story?</h2>
          <p className="text-lg font-medium border-l-4 border-indigo-500 pl-4 py-1 bg-muted/30">
            A brand story is the cohesive narrative that weaves together the facts, feelings, and core mission of your brand. It explains the &quot;why&quot; behind your business, connecting emotionally with your audience and differentiating you from competitors.
          </p>

          <p>
            A brand story is more than just a timeline of how your company was founded. It&apos;s the narrative that encompasses the facts, feelings, and core mission created by your brand.
          </p>

          <h2>How Does a Brand Story Work?</h2>
          <p>
            A strong brand story acts as the foundation for all your marketing and communication. It provides context for your products, giving customers a reason to care beyond features and pricing. It turns a transaction into a relationship.
          </p>

          <h2>Real-World Example</h2>
          <p>
            Consider Patagonia. Their story isn&apos;t just &quot;we make outdoor clothing.&quot; Their story is about a deep commitment to environmental conservation and ethical manufacturing. This narrative attracts a fiercely loyal customer base who shares those values, even if the products are more expensive.
          </p>

          <h2>Why is a Brand Story Important for Founders?</h2>
          <p>
            For founders, especially in crowded markets, a brand story is a crucial differentiator. It helps attract early adopters, aligns your team around a shared purpose, and makes your pitch to investors much more compelling. People remember stories far better than they remember statistics.
          </p>

          <h2>Brand Story vs. Brand History</h2>
          <table className="w-full text-left border-collapse mt-4">
            <thead>
              <tr className="border-b border-white/20">
                <th className="pb-2">Feature</th>
                <th className="pb-2">Brand History</th>
                <th className="pb-2">Brand Story</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="py-2">Focus</td>
                <td className="py-2">Facts and timeline (e.g., founded in 2020)</td>
                <td className="py-2">Emotion, values, and purpose</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-2">Audience</td>
                <td className="py-2">Internal or investors</td>
                <td className="py-2">Customers and community</td>
              </tr>
              <tr>
                <td className="py-2">Goal</td>
                <td className="py-2">Inform</td>
                <td className="py-2">Connect and inspire</td>
              </tr>
            </tbody>
          </table>

          <div className="bg-white/5 border border-white/10 p-6 rounded-xl my-12">
            <h3 className="mt-0 text-xl font-bold">Core Principles of a Great Brand Story</h3>
            <ul className="mb-0">
              <li><strong>Authenticity:</strong> It must be true to your origins and actions.</li>
              <li><strong>Customer-Centricity:</strong> The customer is the hero; your brand is the guide.</li>
              <li><strong>Simplicity:</strong> It should be easy to understand and retell.</li>
              <li><strong>Consistency:</strong> It must be reflected across all touchpoints.</li>
            </ul>
          </div>

          <p>
            Crafting your story is a crucial step in building your brand identity, especially if you are learning <Link href="/blog/how-to-rebrand-your-business" className="text-indigo-400 hover:underline">how to rebrand your business</Link>. If you need help defining the visual and psychological elements of your brand that support your story, try the <Link href="/" className="text-indigo-400 hover:underline">BrandForge Studio</Link> or view <Link href="/#identity-directions" className="text-indigo-400 hover:underline">Generated Identity Directions</Link>.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
