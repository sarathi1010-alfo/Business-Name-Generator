import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Space Startup Names - Aerospace Brand Ideas',
  description: 'Generate stellar, cosmic space startup names. Discover naming trends in the aerospace industry.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/space-startup-names',
  },
};

export default function SpaceStartupNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a good space startup name?', answer: 'A good space startup name suggests exploration, advanced engineering, and vastness. Words like Astro, Orbit, and Nova are popular.' },
        { question: 'Should a space name be abstract?', answer: 'Abstract names or names from mythology often work well, giving the company a sense of grandeur and history.' },
        { question: 'How important is a strong name in aerospace?', answer: 'Crucial. It must inspire confidence in safety and cutting-edge engineering.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Space Startup Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Names that aim for the stars and beyond.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Naming in Aerospace</h2>
          <p>
            Aerospace is an industry of ambition and extreme engineering. Names in this sector must evoke both a sense of wonder and absolute reliability.
          </p>

          <h3>Finding the Balance</h3>
          <p>
            Avoid anything that sounds fragile or playful. Strong, solid sounds combined with references to space or flight create the most compelling brands here.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to generate your own space names?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=space" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
