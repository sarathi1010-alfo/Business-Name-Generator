/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Coffee Shop Names - Generate Inviting Cafe Ideas',
  description: 'Generate warm, inviting coffee shop names. Discover naming strategies for local cafes, roasters, and boutique coffee brands.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/coffee-shop-names',
  },
};

export default function CoffeeShopNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a good coffee shop name?', answer: 'A good coffee shop name creates a sense of warmth, community, and quality. It should be easy to say and memorable for locals.' },
        { question: 'Should a coffee shop name be localized?', answer: 'Including neighborhood names or local landmarks can build immediate community connection, but might limit expansion if you plan to open multiple locations.' },
        { question: 'What words are trending in cafe naming?', answer: 'Words suggesting craft, origin, and time (e.g., Roasters, Ritual, Origin, Daily) are highly popular in modern cafe naming.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Coffee Shop Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Warm, inviting, and memorable. Find the perfect name for your cafe or roastery.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Naming Your Coffee Shop</h2>
          <p>
            A coffee shop is more than just a place to get caffeine; it is a "third place" between work and home. Your name needs to evoke the atmosphere you are trying to create, whether that is a fast-paced espresso bar, a cozy neighborhood hangout, or a high-end specialty roaster.
          </p>

          <h3>Cafe Naming Trends</h3>
          <p>
            The third-wave coffee movement has heavily influenced naming. Gone are the days of puns like "Brewed Awakenings." Today's successful coffee brands use evocative, slightly abstract names (like Blue Bottle or Stumptown) or highly descriptive names focusing on the craft (like Intelligentsia).
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Generate Coffee Shop Ideas</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=food" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
