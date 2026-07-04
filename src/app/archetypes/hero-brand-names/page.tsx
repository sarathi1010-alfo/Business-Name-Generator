import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hero Brand Archetype Names - Bold & Courageous',
  updatedAt: "2026-07-04T08:00:00Z",
  description: 'Discover how to name a brand with the Hero archetype. Generate bold, courageous, and triumphant brand names.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/archetypes/hero-brand-names',
  },
};

export default function HeroBrandNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What is the Hero brand archetype?', answer: 'The Hero archetype is characterized by courage, overcoming obstacles, and making the world a better place through mastery and hard work.' },
        { question: 'What are examples of Hero brands?', answer: 'Nike and FedEx are classic examples of Hero brands, focusing on achievement and overcoming adversity.' },
        { question: 'What makes a good Hero brand name?', answer: 'A Hero brand name should sound strong, active, and triumphant. It often uses hard consonant sounds and action-oriented verbs.' }
      ])} />
      <Header />
      <main className="flex-1 bg-background text-foreground flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Hero Brand Archetype</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Bold, triumphant, and unstoppable. Name your brand to inspire greatness.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>The Call to Adventure</h2>
          <p>
            Brands that adopt the Hero archetype are on a mission to make the world better by being the best. They inspire their customers to push harder, run faster, and overcome whatever obstacles stand in their way.
          </p>

          <h3>Naming a Hero</h3>
          <p>
            A Hero brand name cannot be soft or passive. It needs to convey strength, velocity, and determination. Words related to apex predators, victorious mythology (like Nike), or relentless forward motion work exceptionally well for this archetype.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to generate your own Hero names?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?vibe=bold" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
