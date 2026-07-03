import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Descriptive Brand Names - Strategies & Ideas',
  description: 'Explore the power of descriptive brand names. Learn how they work, when to use them, and generate your own descriptive brand name ideas.',
  alternates: {
    lastModified: '2026-07-03T00:00:00Z',
    canonical: 'https://brandforge.alfo.online/name-styles/descriptive-brand-names',
  },
};

export default function DescriptiveBrandNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What is a descriptive brand name?', answer: 'A descriptive brand name clearly communicates the product or service a business offers. It leaves no ambiguity about what the company does.' },
        { question: 'Why choose a descriptive brand name?', answer: 'They are great for immediate customer understanding and can be strong for SEO if they match common search terms.' },
        { question: 'What are the downsides of a descriptive name?', answer: 'They can be harder to trademark and may limit future business expansion if the company pivots away from its original description.' }
      ])} />
      <Header />
      <main className="flex-1 bg-background text-foreground flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Descriptive Brand Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Clear, direct, and unambiguous. Find out if a descriptive name is right for your business.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>The Power of Clarity</h2>
          <p>
            Descriptive names are exactly what they sound like: they describe what the business does. Think &quot;General Motors&quot; or &quot;Bank of America&quot;. These names leave no doubt in the consumer&apos;s mind about the product or service being offered.
          </p>

          <h3>When to Use a Descriptive Name</h3>
          <p>
            If your marketing budget is limited and you need customers to immediately understand your offering, a descriptive name is highly effective. They are also beneficial for local businesses or highly specialized B2B companies where search intent closely matches the service provided.
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
