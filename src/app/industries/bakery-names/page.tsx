import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bakery Names - Generate Sweet & Artisan Brand Ideas',
  description: 'Generate artisanal, sweet bakery names. Discover naming trends in the baking industry and find the perfect brandable domain.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/bakery-names',
  },
};

export default function BakeryNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a good bakery name?', answer: 'A good bakery name should sound inviting, artisanal, and appetizing. It often evokes warmth, tradition, or the sensory experience of fresh baked goods.' },
        { question: 'Should a bakery name be descriptive?', answer: 'Descriptive names work well, but combining a descriptive word with something evocative or charming (like an animal or a cozy concept) creates a stronger brand.' },
        { question: 'How can a bakery name sound artisanal?', answer: 'Use words related to the craft of baking, such as "Crust", "Crumb", "Oven", or "Knead", to emphasize quality and hand-made processes.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Bakery Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Artisanal, inviting, and sweet. Find the perfect name for your bakery.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Naming in the Baking Industry</h2>
          <p>
            A bakery's name is its storefront before the customer even sees the pastries. It needs to evoke the warmth of an oven and the comfort of fresh bread. Whether you are opening a high-end patisserie or a neighborhood bread shop, your name sets the expectation for the flavors inside.
          </p>

          <h3>Finding the Sweet Spot</h3>
          <p>
            The best bakery names often play with sensory words or charming imagery. They create an immediate emotional connection, making the customer crave what you are creating.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to generate your own bakery names?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=bakery" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
