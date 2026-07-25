/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Marketing Agency Names - Generate Creative Ideas',
  description: 'Generate creative, impactful marketing agency names. Discover naming trends for PR firms, digital agencies, and branding studios.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/marketing-agency-names',
  },
};

export default function MarketingAgencyNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a good marketing agency name?', answer: 'A good marketing agency name is memorable, clever, and sets the tone for the creative work you produce. It should act as the ultimate case study for your naming abilities.' },
        { question: 'Are founder names good for marketing agencies?', answer: 'Using founder names (e.g., Ogilvy) is a classic approach that conveys legacy and trust, but modern agencies often prefer abstract or evocative names to signal innovation and scalability.' },
        { question: 'Should an agency name include the word "agency"?', answer: 'It is not necessary and sometimes removing words like "agency", "media", or "group" creates a stronger, more confident brand identity.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Marketing Agency Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Creative, impactful, and memorable. Find a name that proves your branding expertise.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Naming Your Marketing Agency</h2>
          <p>
            As a marketing or branding agency, your own name is your first portfolio piece. Clients will judge your creative capabilities based on how well you brand yourself. A generic name suggests generic ideas, while a clever, well-crafted name signals high-end strategic thinking.
          </p>

          <h3>Marketing Agency Naming Trends</h3>
          <p>
            Modern agencies often lean towards punchy, one-word abstract names or evocative compound words. There is a strong trend of moving away from the traditional "LastName & LastName" format in favor of names that express a specific philosophy or approach to marketing.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Generate Agency Name Ideas</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=agency" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
