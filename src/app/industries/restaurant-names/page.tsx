/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Restaurant Names - Generate Appetizing Brand Ideas',
  description: 'Generate memorable, appetizing restaurant names. Discover naming strategies for fine dining, fast casual, and food concepts.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/restaurant-names',
  },
};

export default function RestaurantNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a good restaurant name?', answer: 'A good restaurant name gives diners a preview of the atmosphere and cuisine. It should be memorable, easy to spell, and distinct from local competitors.' },
        { question: 'Should a restaurant name describe the food?', answer: 'It can, especially for fast-casual concepts (e.g., Shake Shack). However, fine dining often uses more abstract or evocative names to suggest an experience.' },
        { question: 'How important is a .com domain for a restaurant?', answer: 'While helpful, local search (Google Maps/Yelp) is far more important for restaurants than a perfect .com domain.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Restaurant Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Appetizing, memorable, and unique. Find the perfect name for your culinary concept.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Naming Your Restaurant</h2>
          <p>
            The restaurant industry is notoriously difficult, and a strong brand is one of your best defenses. Your name sets expectations before a customer ever looks at the menu. It needs to reflect your price point, cuisine, and vibe.
          </p>

          <h3>Restaurant Naming Trends</h3>
          <p>
            The "Noun & Noun" format (e.g., The Pig & The Pearl) was dominant for a decade but is starting to feel dated. Current trends lean towards single, evocative words, foreign language terms that hint at the cuisine without being cliché, or hyper-local geographic names.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Generate Restaurant Ideas</h3>
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
