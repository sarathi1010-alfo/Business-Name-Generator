import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Interior Design Names - Generate Aesthetic Brand Ideas',
  description: 'Generate stylish interior design company names. Discover naming trends in design and find the perfect brandable domain.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/interior-design-names',
  },
};

export default function InteriorDesignNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a good interior design name?', answer: 'A good interior design name sounds sophisticated, reflects your design aesthetic, and implies transformation or spatial harmony.' },
        { question: 'Should I use my own name for my interior design business?', answer: 'Using your own name (e.g., "Jane Doe Interiors") is very common and builds personal brand equity, but a studio name (e.g., "Aura Spaces") can be easier to scale and sell later.' },
        { question: 'How important is a domain for an interior designer?', answer: 'Crucial. Your website is your portfolio, and a premium-sounding domain name sets the expectation for high-quality, premium design work.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Interior Design Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Stylish, sophisticated, and spatial. Find the perfect name for your design studio.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Naming in the Interior Design Industry</h2>
          <p>
            Interior design is inherently visual and aesthetic, and your name must match that energy. It sets the tone for your client&apos;s experience. Words that evoke space, light, form, and comfort are highly effective.
          </p>

          <h3>Eponymous vs. Studio Names</h3>
          <p>
            Many legendary designers use their own names, leaning on personal reputation. However, creating a distinct studio name (like "Nest & Form" or "Lumi Living") allows you to build an agency that isn&apos;t solely dependent on you as the founder, making it easier to hire junior designers and scale.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to generate your own design names?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=interior" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
