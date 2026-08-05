/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Catering Business Names – Delicious & Memorable Brands',
  description: 'Find the perfect name for your catering business. Discover naming strategies that communicate culinary excellence, exceptional service, and great taste.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/catering-business-names',
  },
};

export default function CateringBusinessNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a good catering business name?', answer: 'A good catering name evokes a sense of taste, abundance, and exceptional service. It should make people hungry and confident in your ability to host an event.' },
        { question: 'What are common words used in catering names?', answer: 'Words like Feast, Taste, Serve, Dish, Table, and Chef are popular. Also words related to gathering or celebrating.' },
        { question: 'Should I use my own name for a catering company?', answer: 'Yes, using a founder\'s name (e.g., Smith\'s Catering) adds a personal touch and builds trust, which is highly effective in the hospitality industry.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Catering Business Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Names that serve up culinary excellence and great taste.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Serving Up a Great Brand Identity</h2>
          <p>
            When someone hires a catering company, they are entrusting you with a significant event—a wedding, a corporate gala, or a major family gathering. Your brand name must immediately reassure them that the food will be delicious and the service flawless.
          </p>

          <h3>Evoking Taste and Abundance</h3>
          <p>
            The best catering names often use words that trigger the senses. Rather than just describing what you do (e.g., "Food Delivery Co."), use words that describe the experience: Feast, Savor, Relish, or Crave. This is known as an <Link href="/name-styles/evocative-brand-names" className="text-indigo-400 hover:underline">evocative naming strategy</Link>.
          </p>

          <h3>The Local Advantage</h3>
          <p>
            Because catering is inherently a local or regional business, incorporating geographic elements or leveraging a strong <Link href="/blog/how-to-name-local-business" className="text-indigo-400 hover:underline">local naming strategy</Link> can improve your search visibility and community trust.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to cook up a new brand?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=catering" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                Launch BrandForge Studio
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
