/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AR Company Names',
  description: 'Discover visionary names for your Augmented Reality startup or studio.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/ar-company-names',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'How should I name an AR company?', answer: 'AR names should suggest enhanced perception and new realities. Words like Vision, Layer, and Lens are common roots.' },
        { question: 'Do I need a specific domain extension?', answer: 'While .com is ideal, technical industries often adopt .io, .tech, or .ai with great success.' },
        { question: 'Should my name be descriptive or abstract?', answer: 'It depends on your audience. B2B companies often benefit from descriptive names, while consumer brands might lean toward abstract, evocative names.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">AR Company Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover visionary names for your Augmented Reality startup or studio.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Naming Your AR Company</h2>
          <p className="text-lg font-medium border-l-4 border-indigo-500 pl-4 py-1 bg-muted/30">
            AR names should suggest enhanced perception and new realities. Words like Vision, Layer, and Lens are common roots. Using a tool like BrandForge can help you brainstorm these concepts rapidly.
          </p>
          <p>
            When entering this industry, your brand name sets the immediate expectation of your technical competence and innovation.
            Avoid getting too lost in industry jargon, and focus on names that are memorable and easy to pronounce.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to generate names?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=ar" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
