import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Childcare Business Names - Generate Nurturing Brand Ideas',
  description: 'Generate safe, nurturing childcare and daycare names. Discover naming trends in early education and find the perfect brandable domain.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/childcare-business-names',
  },
};

export default function ChildcareBusinessNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a good childcare business name?', answer: 'A good childcare name sounds safe, nurturing, educational, and playful. It must immediately build trust with parents.' },
        { question: 'Should a daycare name include the location?', answer: 'Including a location (e.g., "Main Street Daycare") helps with local SEO, but playful or nurturing names (e.g., "Tiny Sprout") often create a warmer emotional connection.' },
        { question: 'How important is a domain for a childcare center?', answer: 'A domain is important for providing parents with a central place to find policies, schedules, and contact information.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Childcare Business Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Nurturing, safe, and joyful. Find the perfect name for your daycare or early education center.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Naming in the Childcare Industry</h2>
          <p>
            When parents are choosing a childcare provider, their primary concerns are safety, education, and happiness. Your name needs to reflect those priorities. Words like "Nest", "Sprout", "Joy", and "Grow" are highly effective because they tap into the nurturing aspect of early childhood.
          </p>

          <h3>Balancing Playful and Professional</h3>
          <p>
            While the name should appeal to the idea of children playing and learning, it must also sound professional enough that parents trust you with their most precious assets. Avoid names that sound too chaotic or disorganized.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to generate your own childcare names?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=childcare" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
