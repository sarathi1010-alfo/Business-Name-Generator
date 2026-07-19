import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sage Brand Archetype Names - Wisdom & Truth',
  description: 'Discover how to name a brand with the Sage archetype. Generate names focused on knowledge, truth, and authority.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/archetypes/sage-brand-names',
  },
};

export default function SageBrandNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What is the Sage brand archetype?', answer: 'The Sage archetype seeks truth, knowledge, and understanding. It acts as a trusted advisor and expert.' },
        { question: 'What are examples of Sage brands?', answer: 'Google, the BBC, and MIT are examples of Sage brands. They are valued for their accuracy and authority.' },
        { question: 'What makes a good Sage brand name?', answer: 'Sage names should sound intelligent, grounded, and authoritative. They often lean towards classic, academic, or profound-sounding words.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Sage Brand Archetype</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Truth, wisdom, and undeniable authority.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>The Pursuit of Knowledge</h2>
          <p>
            Brands that adopt the Sage archetype don't just sell products; they sell expertise. They aim to help customers understand the world better. They are the analytical, logical, and objective voices in the market.
          </p>

          <h3>Naming a Sage</h3>
          <p>
            A Sage brand name must command respect instantly. It shouldn't be overly playful or aggressive. Words related to vision, clarity, data, minds, or ancient wisdom work well.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to generate Sage names?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?vibe=trustworthy" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                Open BrandForge Studio
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
