import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildArticleSchema, buildBreadcrumbSchema } from '@/lib/seo/buildSchema';
import { buildArticleMeta } from '@/lib/seo/metaFactories';
import { resolveMetadata } from '@/lib/seo/resolveMetadata';
import Link from 'next/link';

const meta = buildArticleMeta(
  "How to Define Your Brand Voice: A 2026 Strategy",
  "Master the art of brand linguistics. Learn how to define a brand voice that resonates with your audience and stays consistent across all channels.",
  "/blog/how-to-define-your-brand-voice",
  { updatedAt: "2026-07-10T00:00:00Z" }
);

export async function generateMetadata(): Promise<Metadata> {
  return resolveMetadata(meta);
}

export default function ArticlePage() {
  return (
    <>
      <JsonLd schema={buildBreadcrumbSchema(meta.breadcrumbs)} />
      <JsonLd schema={buildArticleSchema(meta)} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white">
        <article className="max-w-3xl mx-auto px-4 py-16 md:py-24 prose prose-lg dark:prose-invert">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">
            How to Define Your Brand Voice
          </h1>

          <h2>How to define your brand voice?</h2>
          <p className="text-lg font-medium border-l-4 border-indigo-500 pl-4 py-1 bg-muted/30">
            Define your brand personality using archetypes, identify your target audience&apos;s language, and create a brand voice chart that outlines what your voice is (and what it isn&apos;t).
          </p>

          <p>
            If your brand were a person, how would it speak? Would it be formal and academic, or casual and irreverent? This is your brand voice. It is the consistent personality you project through your writing and speech.
          </p>

          <h3>Voice vs. Tone: The Crucial Distinction</h3>
          <p>
            While your brand **voice** remains constant, your **tone** changes based on the situation.
          </p>
          <ul>
            <li><strong>Voice:</strong> Your brand&apos;s personality (e.g., &quot;The Helpful Expert&quot;). This never changes.</li>
            <li><strong>Tone:</strong> The emotional inflection of your voice (e.g., joyful when celebrating a customer success, or empathetic when handling a support ticket).</li>
          </ul>

          <h3>Step 1: Start with Your Archetype</h3>
          <p>
            Your brand archetype (The Hero, The Sage, The Rebel) should dictate your voice. A &quot;Rebel&quot; brand like Liquid Death uses aggressive, humorous, and disruptive language. A &quot;Sage&quot; brand like Google uses clear, authoritative, and direct language.
          </p>

          <h3>Step 2: Create a &quot;This, Not That&quot; Chart</h3>
          <p>
            One of the best ways to define a brand voice for a team is to show the boundaries. For example:
          </p>
          <ul>
            <li>Confident, but not arrogant.</li>
            <li>Funny, but not crude.</li>
            <li>Informative, but not boring.</li>
            <li>Direct, but not rude.</li>
          </ul>

          <h3>Step 3: Align with Your Visual Identity</h3>
          <p>
            There should be no &quot;cognitive dissonance&quot; between how you look and how you sound. If your website uses sleek, minimalist typography and a luxury palette, your voice should be equally elegant and refined.
          </p>
          <p>
            At <Link href="/" className="text-indigo-400 hover:underline">BrandForge</Link>, we provide a holistic Brand DNA that includes voice and tone recommendations based on your generated identity, ensuring you sound as good as you look.
          </p>

          <h3>Conclusion</h3>
          <p>
            A strong brand voice builds familiarity and trust. It makes your brand recognizable even without a logo. It works in tandem with your name; a great brand voice amplifies a well-chosen name. If you haven&apos;t settled on one yet, read our guide on <Link href="/blog/choose-standout-brand-name" className="text-indigo-400 hover:underline">how to choose a brand name that stands out</Link>.
          </p>
          <p>
            Start by defining your core personality, and then apply it consistently across every email, tweet, and landing page.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
