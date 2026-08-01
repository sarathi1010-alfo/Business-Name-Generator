import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Historical Brand Names - Legacy & Mythology',
  description: 'Leverage history, mythology, and legend to create a brand name with built-in gravitas and storytelling.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/name-styles/historical-brand-names',
  },
};

export default function HistoricalNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What is a historical brand name?', answer: 'A name derived from history, mythology, literature, or legend (e.g., Nike, Hermes, Tesla, Palantir).' },
        { question: 'Why use a historical or mythological name?', answer: 'It instantly imparts a sense of legacy, power, or specific attributes (like speed or wisdom) without needing to explain them.' },
        { question: 'Are there risks to using historical names?', answer: 'Yes, they can sometimes sound pretentious if disconnected from the product, and many well-known mythological names are already heavily trademarked.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Historical Brand Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Borrowing equity from the past to build the future.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Built-In Storytelling</h2>
          <p>
            When you name your company after a Greek god, a famous inventor, or a legendary artifact, you are instantly inheriting the stories associated with that name. This provides an incredible foundation for brand storytelling.
          </p>

          <h3>Finding the Balance</h3>
          <p>
            The key is choosing a reference that aligns with your core brand archetype. An aggressive cybersecurity firm might borrow from Roman military history, while an AI company might look to philosophical figures. Avoid names that are too obscure to pronounce.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to forge a legacy?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?style=premium" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
