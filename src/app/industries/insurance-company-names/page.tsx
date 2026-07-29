import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Insurance Company Names - Generate Secure Brand Ideas',
  description: 'Generate secure, trustworthy insurance company names. Discover naming trends in finance and find the perfect brandable domain.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/insurance-company-names',
  },
};

export default function InsuranceCompanyNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a good insurance company name?', answer: 'A good insurance name must convey absolute trust, security, stability, and protection.' },
        { question: 'Should an insurance agency use the founder\'s name?', answer: 'Using a founder\'s name is very common and builds local trust, but abstract names like "Shield" or "Sure" can scale better nationally.' },
        { question: 'How important is a domain for an insurance agency?', answer: 'Extremely important. Clients need to trust your digital presence before handing over sensitive personal and financial information.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Insurance Company Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Secure, trustworthy, and protective. Find the perfect name for your insurance agency.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Naming in the Insurance Industry</h2>
          <p>
            In insurance, you are selling an intangible promise to be there during a crisis. Therefore, trust is the only currency that matters. Your name must instantly communicate security and stability. Words like "Shield", "Guard", "Sure", and "Trust" are staples in this industry for a reason.
          </p>

          <h3>Modern Insurtech vs. Traditional Agencies</h3>
          <p>
            Traditional agencies often rely on family names to project community trust. However, the rise of "Insurtech" startups has popularized short, snappy, one-word names that appeal to younger demographics looking for fast, app-based coverage.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to generate your own insurance names?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=insurance" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
