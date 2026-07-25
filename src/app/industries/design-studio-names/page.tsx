/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Design Studio Names - Generate Aesthetic Brand Ideas',
  description: 'Generate minimalist, creative design studio names. Discover the best naming strategies for graphic design, UI/UX, and architecture firms.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/design-studio-names',
  },
};

export default function DesignStudioNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a good design studio name?', answer: 'A good design studio name is aesthetically pleasing in its typography, easy to remember, and reflects the studio\'s specific design philosophy (e.g., minimalist, bold, playful).' },
        { question: 'Are abstract names good for design studios?', answer: 'Yes, abstract names allow the studio\'s portfolio to speak for itself without boxing the business into one specific type of design.' },
        { question: 'What domains do design studios use?', answer: 'Design studios frequently use .design, .studio, or .co, which are highly respected within the creative industry and often allow for shorter URL structures.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Design Studio Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Aesthetic, minimalist, and creative. Find a name that reflects your visual style.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Naming Your Design Studio</h2>
          <p>
            For a design studio, the name is deeply connected to its visual execution. When choosing a name, designers must consider how the letters will look when kerned, how the word sounds when spoken, and whether the symmetry of the letters lends itself to a strong logo mark.
          </p>

          <h3>Design Studio Naming Trends</h3>
          <p>
            Minimalism remains king in design studio naming. Short, 3-to-5 letter abstract words or evocative nouns are incredibly popular. There is also a trend of using foreign words (especially from Italian or Scandinavian languages) to imply sophisticated aesthetics.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Generate Design Studio Ideas</h3>
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
