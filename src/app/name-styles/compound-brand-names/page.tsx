import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Compound Brand Names - Simple & Descriptive',
  description: 'Discover how compound brand names combine two distinct words to create a clear, memorable brand identity.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/name-styles/compound-brand-names',
  },
};

export default function CompoundNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What is a compound brand name?', answer: 'A compound brand name joins two whole, unmodified words together, like YouTube, Facebook, or Snapchat.' },
        { question: 'Why are compound names effective?', answer: 'They are easy to understand, highly descriptive, and usually easy to spell because they use common words.' },
        { question: 'How do I create a good compound name?', answer: 'Combine a descriptive word that explains what you do with an evocative word that explains how it feels or functions.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Compound Brand Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Two words. One clear message.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Clarity Through Combination</h2>
          <p>
            Unlike portmanteaus, compound names do not alter the original words. They simply smash them together. This provides immediate clarity about what the business does, while still creating a unique, brandable entity.
          </p>

          <h3>Finding the Right Pair</h3>
          <p>
            The secret to a great compound name is balance. If both words are highly descriptive (e.g., "CarRepair"), the name becomes generic. If both are abstract (e.g., "BlueSky"), it lacks context. The best compound names mix function with emotion or location.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Generate Compound Ideas</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?isTwoWords=true" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
