/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Misspelled Brand Names - Distinctive & Trademarkable',
  description: 'Explore the strategy behind intentionally misspelled brand names to secure domains and trademarks.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/name-styles/misspelled-brand-names',
  },
};

export default function MisspelledNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What is an intentionally misspelled brand name?', answer: 'It is a name created by deliberately altering the spelling of a common word while retaining its phonetic sound (e.g., Lyft, Tumblr, Reddit).' },
        { question: 'Why do companies misspell their names?', answer: 'Primarily to secure a short, memorable .com domain and to create a distinctive, trademarkable word that stands out from the generic dictionary term.' },
        { question: 'What are the drawbacks?', answer: 'You will inevitably lose some organic search traffic to the correct spelling, and you must constantly correct people when they ask for your email address or URL.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Misspelled Brand Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Breaking the rules of grammar to build a distinct identity.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>The Domain Hack Strategy</h2>
          <p>
            In the Web 2.0 era, intentionally dropping vowels or replacing letters (like an "i" with a "y") became the default naming strategy for tech startups. It solved the immediate problem of finding an available, cheap .com domain.
          </p>

          <h3>Finding the Balance</h3>
          <p>
            While this strategy provides immediate distinctiveness, it requires a higher marketing budget to educate the market on how to actually spell the name. The "Radio Test" (can someone spell it after just hearing it?) is the biggest hurdle for misspelled names.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Looking for unique startup names?</h3>
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
