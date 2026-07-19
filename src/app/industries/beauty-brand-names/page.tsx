import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Beauty Brand Names - Elegant & Catchy Ideas',
  description: 'Generate elegant, catchy, and luxurious beauty brand names for skincare, cosmetics, and wellness products.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/beauty-brand-names',
  },
};

export default function BeautyBrandNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a catchy beauty brand name?', answer: 'A catchy beauty brand name often evokes feelings of radiance, purity, luxury, or science. Words that sound soft (using L, M, S sounds) often work well.' },
        { question: 'Should I use my own name for a beauty brand?', answer: 'Founder names (like Charlotte Tilbury or Fenty) are very successful in beauty because they build immediate personal trust and authority.' },
        { question: 'How do I name a skincare vs a makeup line?', answer: 'Skincare names often focus on science, nature, and purity (e.g., CeraVe, Herbivore), while makeup names can be more expressive, bold, or artistic (e.g., Urban Decay, Rare Beauty).' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Beauty Brand Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Radiant, elegant, and unforgettable. Find the perfect name for your cosmetic or skincare line.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>The Art of Beauty Naming</h2>
          <p>
            Beauty is highly emotional. Your brand name needs to immediately convey the feeling your product provides. Are you offering clinical skincare, organic wellness, or high-fashion cosmetics? Your name must reflect that specific vibe.
          </p>

          <h3>Finding Your Vibe</h3>
          <p>
            Luxury beauty often relies on French/Italian-sounding words or elegant founder names. Clean beauty leans on nature-inspired words (botanicals, purity). Clinical beauty leans on scientific roots and formulations.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to generate beauty names?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=beauty" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
