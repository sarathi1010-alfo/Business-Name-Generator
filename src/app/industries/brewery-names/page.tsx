import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Brewery Names - Generate Craft Beer Brand Ideas',
  description: 'Generate authentic, craft brewery names. Discover naming trends in the beer industry and find the perfect brandable domain.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/brewery-names',
  },
};

export default function BreweryNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a good brewery name?', answer: 'A strong brewery name often reflects local heritage, the craft process, or a distinct, bold attitude. It needs to look good on a label and sound great when ordered at a bar.' },
        { question: 'Are quirky names good for breweries?', answer: 'Yes, the craft beer industry embraces quirky, irreverent, or highly evocative names to stand out on crowded store shelves.' },
        { question: 'Should a brewery name mention beer?', answer: 'It\'s not strictly necessary. Words like "Brewing Co." or "Ales" can be appended, allowing the core brand name to be more creative.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Brewery Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Authentic, bold, and crafted. Find the perfect name for your brewing venture.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Naming in the Craft Beer World</h2>
          <p>
            The craft beer market is fiercely competitive, and a brewery's name and visual identity are often the deciding factor for a consumer facing a massive wall of options. The best brewery names tell a story, evoke a strong sense of place, or project a distinct personality that resonates with the target audience.
          </p>

          <h3>Standing Out on the Shelf</h3>
          <p>
            Your brewery name will be the foundation of your can art, tap handles, and merch. It needs to be versatile, memorable, and capable of anchoring a broader brand universe.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to generate your own brewery names?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=brewery" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
