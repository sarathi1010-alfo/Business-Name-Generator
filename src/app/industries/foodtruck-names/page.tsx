import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Food Truck Brand Names - Ideas for Mobile Eateries',
  description: 'Generate the perfect name for your food truck. Discover catchy, memorable, and appetizing names for your street food business.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/foodtruck-names',
  },
};

export default function FoodTruckNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'How do I choose a food truck name?', answer: 'A great food truck name should be catchy, easy to read on the side of a truck, and clearly hint at the cuisine you serve.' },
        { question: 'What are examples of good food truck names?', answer: 'Playful names or descriptive names like "The Rolling Taco" or "Bite Street" work well to attract hungry crowds.' },
        { question: 'Why is a good name important for a food truck?', answer: 'Food trucks rely heavily on word-of-mouth and social media. A memorable name makes it easier for customers to find and recommend you.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Food Truck Brand Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Find a name that brings the crowd to you. Discover ideas engineered for street food success.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Serving Up a Great Name</h2>
          <p>
            When naming a food truck, you need to balance creativity with clarity. People passing by need to quickly understand what kind of food you offer. A catchy, appetizing name combined with strong branding will help you stand out at busy festivals or on crowded city streets.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to get rolling?</h3>
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
