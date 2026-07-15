import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Outlaw Brand Archetype Names - Rebellious & Disruptive',
  description: 'Learn how to name a brand with the Outlaw archetype. Generate disruptive, edgy, and rebellious brand name ideas.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/archetypes/outlaw-brand-names',
  },
};

export default function OutlawBrandNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What is the Outlaw brand archetype?', answer: 'The Outlaw (or Rebel) archetype is focused on disrupting the status quo, breaking rules, and offering radical alternatives to mainstream options.' },
        { question: 'What are examples of Outlaw brands?', answer: 'Harley-Davidson, Virgin, and Diesel are classic examples of brands that embrace the rebel spirit.' },
        { question: 'What makes a good Outlaw brand name?', answer: 'Outlaw names are often provocative, edgy, or slightly dangerous. They might use unexpected juxtapositions or words associated with disruption.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Outlaw Brand Archetype</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Disruptive, rebellious, and unapologetic. Name your brand to shake the foundation.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Rules Are Meant to Be Broken</h2>
          <p>
            The Outlaw brand doesn&apos;t just want to participate in the market; it wants to tear down the existing market and build a new one. These brands appeal to consumers who feel alienated by the mainstream and are looking for a radical alternative.
          </p>

          <h3>Naming a Rebel</h3>
          <p>
            An Outlaw name should never be safe or polite. It should provoke a reaction. It might be edgy, utilizing harsh consonants (X, Z, K, R), or it might take a common industry term and completely subvert it to show disdain for the &quot;normal&quot; way of doing things.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to generate your own Outlaw names?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?vibe=edgy" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
