import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Event Company Names - Generate Memorable Brand Ideas',
  description: 'Generate creative event planning company names. Discover naming trends in the events industry and find the perfect brandable domain.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/event-company-names',
  },
};

export default function EventCompanyNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a good event company name?', answer: 'A good event company name is memorable, evokes emotion, and reflects the type of events you plan (e.g., corporate vs. weddings).' },
        { question: 'Should an event company name be descriptive?', answer: 'It can be, but many successful event companies use evocative names that focus on the feeling of the event rather than the logistics.' },
        { question: 'How important is a domain for an event planner?', answer: 'Very important. Event planning is highly visual and reliant on portfolios; a clean, memorable domain helps direct potential clients to your past work.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Event Company Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Memorable, creative, and evocative. Find the perfect name for your event planning business.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Naming in the Event Industry</h2>
          <p>
            The event industry is all about creating memorable experiences. Your company name should be the first step in that experience. It needs to reflect your specific niche—a corporate event planner might choose a name that sounds organized and professional, while a wedding planner might opt for something romantic and ethereal.
          </p>

          <h3>Evocative vs. Descriptive</h3>
          <p>
            While descriptive names like "City Event Planners" are clear, evocative names like "Spark & Vibe" or "Gather Gala" create a feeling. In an industry driven by emotion and aesthetics, evocative names often help you stand out and charge premium rates.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to generate your own event names?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=event" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
