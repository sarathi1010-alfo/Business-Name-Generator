import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Manufacturing Company Names - Generate Industrial Brand Ideas',
  description: 'Generate strong, industrial manufacturing company names. Discover naming trends in production and find the perfect brandable domain.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/manufacturing-company-names',
  },
};

export default function ManufacturingCompanyNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a good manufacturing company name?', answer: 'A good manufacturing name projects scale, precision, strength, and reliability.' },
        { question: 'Should a manufacturing name include the product type?', answer: 'It is highly recommended for B2B manufacturing to include terms related to the material (e.g., Steel, Plastics) or process to clarify offerings.' },
        { question: 'How important is a domain for a manufacturing business?', answer: 'Important for B2B credibility. Procurement managers will research your company online before committing to large contracts.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Manufacturing Company Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Strong, precise, and industrial. Find the perfect name for your production facility.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Naming in the Manufacturing Industry</h2>
          <p>
            Manufacturing names need to sound solid and capable of handling massive scale. Your clients are looking for precision and reliability. Names that incorporate elements of building, forging, and core materials convey the industrial strength required in this sector.
          </p>

          <h3>Acronyms vs. Descriptive Names</h3>
          <p>
            Many legacy manufacturing companies use acronyms (e.g., IBM, 3M). While this works if you have decades of brand equity, new manufacturing firms are better served by descriptive or evocative names that hint at their specific engineering or production capabilities.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to generate your own manufacturing names?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=manufacturing" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
