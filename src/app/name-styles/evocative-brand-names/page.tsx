import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Evocative Brand Names - Meaning & Inspiration',
  description: 'Evoke emotion with a powerful brand name. Discover evocative naming strategies and generate names that resonate with your target audience.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/name-styles/evocative-brand-names',
  },
};

export default function EvocativeBrandNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What is an evocative brand name?', answer: 'An evocative brand name uses metaphor, imagery, or association to suggest a feeling or experience related to the brand, rather than describing it literally.' },
        { question: 'What are examples of evocative names?', answer: 'Examples include Apple (suggesting approachability and simplicity), Amazon (suggesting massive scale), or Nike (named after the Greek goddess of victory).' },
        { question: 'Why are evocative names popular for startups?', answer: 'They are memorable, highly brandable, easier to trademark than descriptive names, and allow a company to expand its product line without the name becoming obsolete.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Evocative Brand Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Names that spark imagination. Learn how to create an emotional connection before the first click.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Designing for Emotion</h2>
          <p>
            Evocative names don&apos;t tell you what the product is; they tell you how the brand feels. They rely on the power of suggestion, using existing words in new contexts to create powerful brand associations.
          </p>

          <h3>The Strategic Advantage</h3>
          <p>
            An evocative name provides a wider canvas for your brand story. Because it isn&apos;t tied to a specific product feature, your business can pivot, expand, or evolve its offerings without needing a rebrand. They stand out in crowded markets by appealing to the customer&apos;s aspirations rather than just their logical needs.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to generate your own names?</h3>
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
