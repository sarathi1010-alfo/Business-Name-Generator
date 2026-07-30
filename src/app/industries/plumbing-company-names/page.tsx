import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Plumbing Company Names - Generate Reliable Trade Brand Ideas',
  description: 'Generate trustworthy, professional plumbing company names. Discover naming trends in the trades and find the perfect brandable domain.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/plumbing-company-names',
  },
};

export default function PlumbingCompanyNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a good plumbing company name?', answer: 'A strong plumbing name must convey reliability, speed, and expertise. Customers often call plumbers in emergencies, so trust is paramount.' },
        { question: 'Should a plumbing name be funny or serious?', answer: 'While a funny name can be memorable, a serious, professional name often builds more trust when dealing with expensive home repairs.' },
        { question: 'Are acronyms good for plumbing businesses?', answer: 'Acronyms can be hard to remember. It\'s usually better to use clear, descriptive, or strong evocative words.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Plumbing Company Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Reliable, professional, and ready to serve. Find the perfect name for your plumbing business.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Naming in the Trades</h2>
          <p>
            In the plumbing industry, trust and reliability are everything. When a customer has a leak, they want to call a company that sounds established and capable. A strong brand name helps you stand out from the countless &quot;City Name Plumbing&quot; businesses and position yourself as a premium service provider.
          </p>

          <h3>Focusing on the Solution</h3>
          <p>
            Great plumbing names often focus on the solution or the positive outcome of the service, such as flow, clarity, or rapid response, rather than just the act of fixing pipes.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to generate your own plumbing names?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=plumbing" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
