/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Invented Brand Names - Unique & Ownable',
  description: 'Learn the benefits of invented brand names. Create a completely unique word for ultimate brand flexibility.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/name-styles/invented-brand-names',
  },
};

export default function InventedNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What is an invented brand name?', answer: 'An invented brand name is a completely made-up word that has no prior meaning in the dictionary, such as Kodak, Xerox, or Vercel.' },
        { question: 'Why choose an invented name?', answer: 'They offer maximum flexibility, are usually easy to trademark, and you can almost always secure the exact .com domain.' },
        { question: 'What is the risk of an invented name?', answer: 'Because the word has no built-in meaning, it requires more marketing effort and budget to educate consumers on what the brand actually does.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Invented Brand Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Blank canvases for ambitious brands.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Creating From Scratch</h2>
          <p>
            Invented (or "neological") names offer the ultimate blank slate. You aren't tied to any existing linguistic baggage. This makes them ideal for companies that plan to evolve their product offerings significantly over time.
          </p>

          <h3>The Phonetic Challenge</h3>
          <p>
            The hardest part of creating an invented name is making it sound appealing and ensuring it's easy to pronounce. Focus on linguistic rhythm. Vowel-heavy names (like Oribi) sound friendly and open, while consonant-heavy names (like Kodak) sound sharp and structural.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Generate Invented Names</h3>
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
