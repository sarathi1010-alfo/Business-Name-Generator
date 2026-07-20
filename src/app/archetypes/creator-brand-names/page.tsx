/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Creator Brand Archetype Names - Expressive & Innovative',
  description: 'Discover how to name a brand with the Creator archetype. Generate expressive, innovative, and imaginative brand names.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/archetypes/creator-brand-names',
  },
};

export default function CreatorBrandNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What is the Creator brand archetype?', answer: 'The Creator archetype is driven by the desire to produce exceptional, enduring work. It values imagination, self-expression, and innovation.' },
        { question: 'What are examples of Creator brands?', answer: 'Apple, Adobe, and Lego are classic Creator brands. They provide the tools for others to express their vision.' },
        { question: 'What makes a good Creator brand name?', answer: 'Creator brand names should sound imaginative, fluid, and original. They often avoid harsh, aggressive consonants.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Creator Brand Archetype</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Imaginative, expressive, and built to inspire.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>The Drive to Build</h2>
          <p>
            Brands that adopt the Creator archetype exist to help their customers express themselves and build new things. They believe that if you can imagine it, it can be created.
          </p>

          <h3>Naming a Creator</h3>
          <p>
            A Creator brand name should feel open-ended and inspiring. It shouldn't box the user in. Words that evoke art, craft, vision, or synthesis fit perfectly here.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to generate Creator names?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?vibe=playful" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
