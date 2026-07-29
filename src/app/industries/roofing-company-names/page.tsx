import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Roofing Company Names - Generate Trustworthy Brand Ideas',
  description: 'Generate reliable, strong roofing company names. Discover naming trends in the roofing industry and find the perfect brandable domain.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/roofing-company-names',
  },
};

export default function RoofingCompanyNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a good roofing company name?', answer: 'A good roofing company name conveys reliability, strength, and trust, often using words related to protection, peaks, and weather.' },
        { question: 'Should a roofing company name describe the service?', answer: 'Yes, often in local service businesses, having "Roofing" or "Exteriors" in the name helps immediately establish what you do and aids in local SEO.' },
        { question: 'How important is a domain for a roofing business?', answer: 'It is important for trust and professional email addresses, though local search ranking and reviews often drive more traffic initially than just the domain name itself.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Roofing Company Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Reliable, strong, and built to last. Find the perfect name for your roofing business.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Naming in the Roofing Industry</h2>
          <p>
            In the roofing industry, trust is everything. Homeowners are making a major investment and need to know you are reliable. Your name should project strength, protection, and durability. Using words like "Shield", "Apex", "Summit", or "Guard" can help build this subconscious trust.
          </p>

          <h3>Local vs. Brandable Names</h3>
          <p>
            Many roofing companies use their city or region in their name (e.g., "Austin Roofers"). While this helps with immediate local SEO, it can limit your expansion. A brandable name (e.g., "Apex Exteriors") allows you to grow into new territories without sounding out of place.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to generate your own roofing names?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=roofing" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
