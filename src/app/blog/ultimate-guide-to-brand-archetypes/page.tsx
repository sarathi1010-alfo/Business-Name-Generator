import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildArticleSchema, buildBreadcrumbSchema } from '@/lib/seo/buildSchema';
import { buildArticleMeta } from '@/lib/seo/metaFactories';
import { resolveMetadata } from '@/lib/seo/resolveMetadata';
import Link from 'next/link';

const meta = buildArticleMeta(
  "The Ultimate Guide to Brand Archetypes (2026 Edition)",
  "Learn how to use the 12 psychological brand archetypes to build a powerful, human-centric brand. Discover which archetype fits your startup's DNA.",
  "/blog/ultimate-guide-to-brand-archetypes"
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
            The Ultimate Guide to Brand Archetypes
          </h1>

          <h2>What is a brand archetype?</h2>
          <p className="text-lg font-medium border-l-4 border-indigo-500 pl-4 py-1 bg-muted/30">
            A brand archetype is a genre for your brand based on 12 psychological patterns of human behavior. Using an archetype helps brands appear more human and relatable to their target audience.
          </p>

          <p>
            Humans are hardwired to recognize stories. Since the dawn of time, we have used character patterns—the Hero, the Rebel, the Sage—to understand the world around us. In branding, we tap into these same universal patterns to create instant recognition and emotional connection.
          </p>

          <h3>The 12 Core Brand Archetypes</h3>
          <p>
            Developed from Carl Jung&apos;s work, these 12 archetypes represent the spectrum of brand personalities:
          </p>
          <ul>
            <li><strong>The Hero:</strong> Focused on mastery and overcoming challenges (e.g., Nike, FedEx).</li>
            <li><strong>The Creator:</strong> Driven by innovation and self-expression (e.g., Apple, Adobe).</li>
            <li><strong>The Rebel (Outlaw):</strong> Disrupting the status quo and breaking rules (e.g., Harley Davidson, Virgin).</li>
            <li><strong>The Sage:</strong> Seeking truth, knowledge, and wisdom (e.g., Google, BBC).</li>
            <li><strong>The Innocent:</strong> Promoting simplicity, happiness, and optimism (e.g., Dove, Coca-Cola).</li>
            <li><strong>The Explorer:</strong> Valuing freedom, discovery, and adventure (e.g., Patagonia, North Face).</li>
            <li><strong>The Magician:</strong> Making dreams come true through transformation (e.g., Disney, Dyson).</li>
            <li><strong>The Lover:</strong> Creating intimacy and aesthetic pleasure (e.g., Victoria&apos;s Secret, Godiva).</li>
            <li><strong>The Jester:</strong> Living for the moment and bringing joy (e.g., Old Spice, M&Ms).</li>
            <li><strong>The Caregiver:</strong> Protecting and caring for others (e.g., Johnson & Johnson, Volvo).</li>
            <li><strong>The Ruler:</strong> Exercising control and creating prosperity (e.g., Rolex, Mercedes-Benz).</li>
            <li><strong>The Everyman:</strong> Seeking connection and belonging (e.g., IKEA, Target).</li>
          </ul>

          <h3>Why Archetypes are Essential for Founders</h3>
          <p>
            When you are starting a new business, you don&apos;t have a track record yet. An archetype provides a strategic shortcut. It tells your customers how to feel about you before they ever use your product.
          </p>
          <p>
            At <Link href="/" className="text-indigo-400 hover:underline">BrandForge</Link>, we use these archetypes as the foundation of our Brand DNA generator. By selecting an archetype, you ensure that your colors, fonts, and voice are all working together toward a single, coherent psychological goal.
          </p>

          <h3>How to Choose Your Archetype</h3>
          <p>
            Don&apos;t just pick the one that sounds &quot;cool.&quot; Pick the one that aligns with your mission and the desires of your target audience. Are they looking for safety (The Caregiver), or are they looking for a breakthrough (The Magician)?
          </p>
          <p>
            Explore our <Link href="/archetypes/hero-brand-names" className="text-indigo-400 hover:underline">Archetype Guides</Link> to see how these patterns translate into real brand identities.
          </p>

          <h3>Next Steps</h3>
          <p>
            Once you have defined your brand archetype, the next critical step is translating that personality into a name. For a comprehensive guide on this process, read our deep dive on <Link href="/blog/choose-standout-brand-name" className="text-indigo-400 hover:underline">how to choose a brand name that stands out</Link>.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
