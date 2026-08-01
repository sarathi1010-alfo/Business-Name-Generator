import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '3D Printing Company Names - Additive Manufacturing Brands',
  description: 'Generate innovative, structural 3D printing and additive manufacturing company names.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/3d-printing-company-names',
  },
};

export default function ThreeDPrintingCompanyNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a good 3D printing company name?', answer: 'A good name implies creation, layers, structure, and the realization of ideas. Words like Form, Layer, and Craft are prevalent.' },
        { question: 'Should an additive manufacturing name sound industrial?', answer: 'If targeting B2B enterprise clients, yes. If targeting hobbyists, a more creative and accessible name works better.' },
        { question: 'How important is the domain for a 3D printing startup?', answer: 'While .com is always preferred, .tech and .maker are gaining traction in this community.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">3D Printing Company Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Names that bring ideas from the digital realm into the physical world.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Naming in Additive Manufacturing</h2>
          <p>
            The 3D printing industry is about precision, rapid iteration, and turning imagination into reality. Your name should reflect this transformative capability.
          </p>

          <h3>Finding the Balance</h3>
          <p>
            You want a name that feels both highly technical and deeply creative, bridging the gap between engineering and art.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to generate your own 3D printing names?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=printing3d" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
