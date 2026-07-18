import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildArticleSchema, buildBreadcrumbSchema, buildFaqSchema } from '@/lib/seo/buildSchema';
import { buildArticleMeta } from '@/lib/seo/metaFactories';
import { resolveMetadata } from '@/lib/seo/resolveMetadata';
import Link from 'next/link';

const meta = buildArticleMeta(
  "What is Brand Voice? Guide to Brand Linguistics",
  "Learn the core elements of brand voice and how to communicate consistently across all channels to build trust in 2026.",
  "/blog/what-is-brand-voice",
  { updatedAt: "2026-07-10T00:00:00Z" }
);

export async function generateMetadata(): Promise<Metadata> {
  return resolveMetadata(meta);
}

const faqs = [
  { question: "What is brand voice?", answer: "Brand voice is the distinct personality, style, and tone a company uses to communicate with its audience across all touchpoints." }
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
            What is Brand Voice?
          </h1>

          <p className="text-lg font-medium border-l-4 border-indigo-500 pl-4 py-1 bg-muted/30">
            Brand voice is the distinct personality and communication style a company uses to speak to its audience. It encompasses the vocabulary, tone, and rhythm of all written and spoken content.
          </p>

          <h2>How Does Brand Voice Work?</h2>
          <p>
            Brand voice works by humanizing a corporation. While <Link href="/blog/what-is-brand-identity" className="text-indigo-400 hover:underline">visual identity</Link> catches the eye, the voice builds the relationship. A well-defined voice is derived directly from a <Link href="/blog/what-is-a-brand-archetype" className="text-indigo-400 hover:underline">brand archetype</Link>. It ensures that whether a customer is reading a tweet, a legal document, or an error message, it feels like it&apos;s coming from the same &quot;person.&quot;
          </p>

          <h2>Real-World Example in Food Delivery</h2>
          <p>
            Consider Wendy&apos;s on social media. Their brand voice is witty, sarcastic, and highly culturally aware (embodying The Jester archetype). This voice is drastically different from a high-end steakhouse, which might use a refined, formal, and authoritative voice. Both sell food, but their voices attract entirely different demographics.
          </p>

          <h2>Why is Brand Voice Important for Founders?</h2>
          <p>
            In a digital world where text is often the primary interface, your voice is your frontline identity. A generic corporate voice (&quot;We strive for excellence&quot;) gets ignored. A strong voice cuts through the noise, makes your copy more persuasive, and turns passive readers into active fans.
          </p>

          <h2>Brand Voice vs Brand Tone</h2>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="pb-2">Feature</th>
                  <th className="pb-2">Brand Voice</th>
                  <th className="pb-2">Brand Tone</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-2 font-semibold">Definition</td>
                  <td className="py-2">The overarching personality</td>
                  <td className="py-2">The emotional inflection in a specific context</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 font-semibold">Consistency</td>
                  <td className="py-2">Always stays the same</td>
                  <td className="py-2">Changes based on the situation</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Analogy</td>
                  <td className="py-2">Your actual personality</td>
                  <td className="py-2">How you speak at a funeral vs a party</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-xl mt-12 mb-12">
            <h3 className="mt-0 text-xl font-bold">Core Principles of Brand Voice</h3>
            <ul className="mb-0">
              <li><strong>Authenticity:</strong> It must sound natural, not forced or contrived.</li>
              <li><strong>Documentation:</strong> Define vocabulary dos and don&apos;ts in your guidelines.</li>
              <li><strong>Adaptability:</strong> Maintain the voice while shifting the tone for different contexts.</li>
              <li><strong>Audience-Centric:</strong> Speak the language your customers actually use.</li>
            </ul>
          </div>

          <p>
            To build a cohesive brand, your voice must match your visuals. The <Link href="/" className="text-indigo-400 hover:underline">BrandForge Generator Studio</Link> helps you map out the perfect archetype, giving you a strong foundation for both visual design and copywriting. Dive deeper into strategy with our <Link href="/blog/ultimate-guide-to-brand-identity" className="text-indigo-400 hover:underline">Ultimate Guide to Brand Identity</Link>.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
