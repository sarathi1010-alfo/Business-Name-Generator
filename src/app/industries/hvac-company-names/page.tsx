import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HVAC Company Names - Generate Climate Control Brand Ideas',
  description: 'Generate professional HVAC company names. Discover naming trends in heating and cooling and find the perfect brandable domain.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/hvac-company-names',
  },
};

export default function HvacCompanyNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a good HVAC company name?', answer: 'A good HVAC company name implies comfort, reliability, temperature control, and quick service.' },
        { question: 'Should a HVAC company name describe the service?', answer: 'Including terms like "Heating", "Cooling", or "Air" immediately tells customers what you do, which is critical for emergency services.' },
        { question: 'How important is a domain for a HVAC business?', answer: 'A clear, easy-to-remember domain is important because customers often search for HVAC services during emergencies and need to find you quickly.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">HVAC Company Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Comforting, reliable, and swift. Find the perfect name for your heating and cooling business.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Naming in the HVAC Industry</h2>
          <p>
            HVAC is often an emergency service industry. When a heater breaks in winter or an AC fails in summer, customers need someone fast and reliable. Names that imply speed, comfort, and temperature control (like "Breeze", "Climate", or "Flow") work exceptionally well.
          </p>

          <h3>Family Names vs. Modern Brands</h3>
          <p>
            Using a family name (e.g., "Smith Heating & Air") conveys long-standing trust and community ties. However, modern, abstract names (e.g., "AirZen" or "ComfortFlow") can sound more professional, scalable, and appeal to younger homeowners.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to generate your own HVAC names?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=hvac" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
