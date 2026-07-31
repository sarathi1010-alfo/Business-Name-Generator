import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Everyman Brand Archetype Names - Relatable & Authentic',
  description: 'Discover how to name a brand with the Everyman archetype. Generate relatable, authentic, and down-to-earth brand names.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/archetypes/everyman-brand-names',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: `What is the Everyman archetype?`, answer: `The Everyman focuses on connection, belonging, and being relatable to the average person. They are unpretentious and inclusive.` },
        { question: `What are examples of Everyman brands?`, answer: `IKEA, Target, and Levi's are strong Everyman brands.` },
        { question: `What makes a good Everyman brand name?`, answer: `It should be simple, easy to pronounce, and avoid sounding overly elite or complicated.` }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Everyman Brand Archetype</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Relatable, authentic, and down-to-earth. Name your brand for the people.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Finding the Right Name</h2>
          <p className="text-lg font-medium border-l-4 border-indigo-500 pl-4 py-1 bg-muted/30">
            An effective Everyman brand name is immediately approachable, avoiding complex jargon or elitist terminology. It should sound like a trusted neighbor—clear, memorable, and signaling that your product is accessible and reliable for the everyday person.
          </p>
          <p>
            When choosing a name for this category, it is important to align with the core values and expectations of your target audience. Your brand name is the first impression, so make it count by balancing clarity with memorability.
          </p>

          <h3>Naming Strategy</h3>
          <p>
            Consider using the BrandForge studio to brainstorm a wide variety of names. You can mix descriptive terms with evocative concepts to find a name that is both unique and deeply connected to your mission.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to generate names?</h3>
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
