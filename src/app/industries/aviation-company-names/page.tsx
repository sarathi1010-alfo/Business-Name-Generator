import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Aviation Company Names - Generate Aerospace Brand Ideas',
  description: 'Generate elevated, aerospace aviation company names. Discover naming trends in flight and find the perfect brandable domain.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/aviation-company-names',
  },
};

export default function AviationCompanyNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a good aviation company name?', answer: 'A good aviation name suggests speed, safety, elevation, and global reach. It should sound premium and highly technical.' },
        { question: 'Should an aviation startup use "Air" or "Aero"?', answer: 'Yes, using industry-standard prefixes or suffixes like "Air", "Aero", or "Jet" immediately positions the company within the aerospace sector.' },
        { question: 'How important is a domain for an aviation business?', answer: 'Crucial for international business. A clean .com domain signals the level of investment and professionalism required in aerospace.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Aviation Company Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Elevated, fast, and secure. Find the perfect name for your aerospace or flight business.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Naming in the Aviation Industry</h2>
          <p>
            Aviation is a high-stakes, high-cost industry. Whether you are launching a charter service, a drone startup, or an aerospace manufacturing firm, your name must project absolute safety and cutting-edge technology. Words relating to the sky, flight, and ascending are standard.
          </p>

          <h3>Technical vs. Luxury</h3>
          <p>
            If your business is B2B aerospace engineering, a highly technical, slightly abstract name works best. If you are a private jet charter, the name should skew toward luxury, exclusivity, and comfort.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to generate your own aviation names?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=aviation" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
