/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Geographic Brand Names - Local Trust & Heritage',
  description: 'Understand when to use geographic brand names to build local trust and when they might restrict your growth.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/name-styles/geographic-brand-names',
  },
};

export default function GeographicNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What is a geographic brand name?', answer: 'A brand name that incorporates a specific city, region, river, or landmark into its identity (e.g., Patagonia, Cisco, Amazon).' },
        { question: 'When are geographic names a good idea?', answer: 'They are excellent for local service businesses or brands that want to associate with the specific reputation of an area (e.g., Swiss watches, Brooklyn breweries).' },
        { question: 'Why should startups avoid geographic names?', answer: 'If your goal is national or global expansion, a geographic name can make you appear small, regional, and disconnected from users outside that area.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Geographic Brand Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Grounding your identity in a sense of place.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>The Power of Place</h2>
          <p>
            A geographic name roots a company in physical reality. It builds instant trust with local consumers and can leverage the "halo effect" of a region known for specific expertise (like Silicon Valley for tech, or Milan for fashion).
          </p>

          <h3>Finding the Balance</h3>
          <p>
            The major drawback is scalability. A company named "Austin Tech Solutions" will face friction when trying to secure contracts in London. If you plan to scale broadly, it is often better to choose an evocative or abstract name rather than tying yourself to a specific map coordinate.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Looking for a scalable name?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?style=brandable" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
