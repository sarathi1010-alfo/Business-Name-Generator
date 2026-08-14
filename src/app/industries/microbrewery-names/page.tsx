import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Microbrewery Brand Names - Ideas for Craft Brewers',
  description: 'Generate the perfect name for your microbrewery. Discover craft, memorable, and distinct names tailored to your brewing style.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/microbrewery-names',
  },
};

export default function MicrobreweryNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'How do I choose a microbrewery name?', answer: 'A great microbrewery name should reflect your brewing style, location, or brand archetype while being easy to pronounce and remember.' },
        { question: 'What are examples of good microbrewery names?', answer: 'Descriptive names like "Oak Barrel Brewing" or evocative names like "Hops & Hearth" are popular choices.' },
        { question: 'Why is a good name important for a microbrewery?', answer: 'In a crowded craft beer market, your name and visual identity are crucial for standing out on shelves and in taprooms.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Microbrewery Brand Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Craft the perfect name for your brewery. Discover ideas that capture your unique flavor profile.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Pouring the Right Name</h2>
          <p>
            Naming a microbrewery is about capturing the essence of your craft. Whether you focus on traditional ales, experimental IPAs, or rich stouts, your name should give customers a taste of your brand before they even take a sip. Consider your location, your brewing philosophy, and your target audience when selecting a name.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to brew up some names?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
