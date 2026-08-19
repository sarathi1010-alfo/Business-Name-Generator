/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pool Cleaning Names - Generate Brand Ideas',
  description: 'Generate memorable and professional pool cleaning names. Discover the best naming strategies for your business.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/pool-cleaning-names',
  },
};

export default function PoolcleaningNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a good pool cleaning name?', answer: 'A good pool cleaning name implies trust, reliability, and clear service. It should be easy to remember and spell.' },
        { question: 'Should I include my city in the name?', answer: 'Including your city can help with local SEO, but it might limit you if you plan to expand to other areas in the future.' },
        { question: 'Do I need a .com domain?', answer: 'While .com is always preferred for trust and memorability, localized domains or industry-specific TLDs can also work well.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Pool Cleaning Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional, reliable, and ready for business. Find your pool cleaning brand.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Naming Your Pool Cleaning Business</h2>
          <p>
            In the pool cleaning industry, your brand name is crucial. It needs to convey reliability and expertise while standing out from the local competition. Avoid overly complicated names that are hard to spell or remember.
          </p>

          <h3>Pool Cleaning Naming Trends</h3>
          <p>
            Current trends favor clear, descriptive names or strong, evocative words that suggest quality and trust.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Generate Ideas</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=pool-cleaning" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
