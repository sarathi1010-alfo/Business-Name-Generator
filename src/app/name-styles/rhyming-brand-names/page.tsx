import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Rhyming Brand Names - Catchy & Memorable',
  description: 'Discover how rhyming brand names create instant memorability. Learn the pros and cons of this naming style.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/name-styles/rhyming-brand-names',
  },
};

export default function RhymingNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What is a rhyming brand name?', answer: 'A rhyming brand name uses words or syllables that sound similar to create a rhythmic, catchy effect (e.g., StubHub, Shake Shack, Fitbit).' },
        { question: 'Why do rhyming names work?', answer: 'They are incredibly sticky in the human brain. The phonetic repetition makes them highly memorable and fun to say.' },
        { question: 'What are the risks of a rhyming name?', answer: 'If not careful, they can sound juvenile or too playful for serious B2B or enterprise companies.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Rhyming Brand Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Names that stick in the mind through the power of rhythm.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>The Power of Phonetics</h2>
          <p>
            Humans are wired to remember patterns, and a rhyming brand name taps directly into that psychological trait. They are fun to say, easy to remember, and often invoke a sense of approachability.
          </p>

          <h3>Finding the Balance</h3>
          <p>
            While highly effective for consumer brands, apps, and food/beverage companies, rhyming names require careful consideration for B2B or luxury brands, where they might undercut the perceived seriousness of the business.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to generate memorable names?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?style=startup" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
