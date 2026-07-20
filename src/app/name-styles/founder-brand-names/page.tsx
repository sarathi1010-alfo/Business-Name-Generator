/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Founder Brand Names - Legacy & Authority',
  description: 'Explore the pros and cons of using founder names for your brand. Build trust and legacy with a personal touch.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/name-styles/founder-brand-names',
  },
};

export default function FounderNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What is a founder brand name?', answer: 'A founder brand name uses the name of the founder or founders as the company name, such as Ford, Disney, or Ben & Jerry\'s.' },
        { question: 'When should I use a founder brand name?', answer: 'They work well in industries where personal trust and reputation are paramount, such as law, fashion, or consulting.' },
        { question: 'What are the downsides of a founder brand name?', answer: 'It can be harder to sell the business later, and it deeply ties the company\'s reputation to the founder\'s personal life.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Founder Brand Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Build a legacy based on personal trust and reputation.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Putting Your Name on It</h2>
          <p>
            Naming a company after yourself is one of the oldest naming strategies. It instantly communicates accountability and personal investment. When your name is on the door, people assume you stand behind the product.
          </p>

          <h3>Is it Right for You?</h3>
          <p>
            Founder names are common in professional services (law firms, agencies) and high-end fashion, where the individual's expertise or vision is the main selling point. However, if your goal is rapid scaling or eventual acquisition, a more abstract or evocative name might offer more flexibility.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Looking for alternatives?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?style=startup" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                Explore Startup Names
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
