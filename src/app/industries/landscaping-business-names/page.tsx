import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Landscaping Business Names - Generate Outdoor Brand Ideas',
  description: 'Generate fresh, reliable landscaping business names. Discover naming trends in outdoor services and find the perfect brandable domain.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/landscaping-business-names',
  },
};

export default function LandscapingBusinessNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a good landscaping business name?', answer: 'A strong landscaping name suggests growth, reliability, and transformation. It often incorporates nature-related words alongside terms that imply expertise or care.' },
        { question: 'Should I include my city in my landscaping name?', answer: 'Including your city can help with local SEO, but it can limit your brand if you decide to expand to other regions later.' },
        { question: 'How can a landscaping name sound premium?', answer: 'To sound premium, avoid overly generic terms and opt for elegant or evocative words like "Oasis", "Verdant", or "Estate".' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Landscaping Business Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Fresh, reliable, and transformative. Find the perfect name for your outdoor service.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Naming in the Outdoor Service Industry</h2>
          <p>
            A great landscaping name communicates more than just mowing lawns; it communicates the creation and maintenance of beautiful outdoor spaces. Whether you focus on high-end landscape architecture or reliable residential maintenance, your name should reflect the quality of your work.
          </p>

          <h3>Standing Out Locally</h3>
          <p>
            In a crowded local market, a memorable name is your best asset. Instead of a generic description, consider a name that evokes the feeling a client gets when they see their perfectly manicured yard.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to generate your own landscaping names?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=landscaping" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
