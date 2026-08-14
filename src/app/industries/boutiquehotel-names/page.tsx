import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Boutique Hotel Brand Names - Ideas for Luxury Stays',
  description: 'Generate the perfect name for your boutique hotel. Discover elegant, unique, and memorable names for independent lodging.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/boutiquehotel-names',
  },
};

export default function BoutiqueHotelNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'How do I choose a boutique hotel name?', answer: 'A boutique hotel name should reflect its unique location, history, or the specific vibe (e.g., luxury, minimalist) you offer guests.' },
        { question: 'What makes a good boutique hotel name?', answer: 'It should evoke a sense of exclusivity and comfort, often avoiding generic terms in favor of evocative or historical references.' },
        { question: 'Why is a good name important for an independent hotel?', answer: 'Without the backing of a major chain, a strong name and brand identity are essential for attracting guests and communicating your unique value proposition.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Boutique Hotel Brand Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Find a name that welcomes guests. Discover ideas engineered for intimate, luxury stays.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Checking In to a Great Brand</h2>
          <p>
            Boutique hotels thrive on character and unique experiences. Your name is the first impression a potential guest has when browsing online. It should instantly convey the style and atmosphere of your property, whether it is a historic downtown renovation or a modern seaside retreat.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to name your property?</h3>
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
