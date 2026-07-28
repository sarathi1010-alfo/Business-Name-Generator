import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Spa Names - Generate Relaxing Wellness Brand Ideas',
  description: 'Generate calming, luxurious spa names. Discover naming trends in wellness and find the perfect brandable domain.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/spa-names',
  },
};

export default function SpaNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a good spa name?', answer: 'A good spa name should instantly evoke feelings of relaxation, luxury, and rejuvenation. Soft-sounding words and nature-inspired terms are highly effective.' },
        { question: 'Should a spa name be descriptive?', answer: 'While descriptive, a great spa name leans more toward being evocative. It should describe the feeling the client will have, rather than just the services provided.' },
        { question: 'What words convey luxury in a spa name?', answer: 'Words like "Sanctuary", "Aura", "Retreat", or words derived from Latin or French often elevate the perceived luxury of a spa brand.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Spa Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Calming, luxurious, and rejuvenating. Find the perfect name for your wellness retreat.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Naming in the Wellness Industry</h2>
          <p>
            A spa is an escape from the stresses of daily life. The name of your business should be the first step in that relaxation process. It needs to sound inviting, serene, and premium. Whether you offer deep-tissue massage or holistic skincare, the brand name sets the emotional stage.
          </p>

          <h3>Evoking Serenity</h3>
          <p>
            The phonetics of your name matter. Soft consonant sounds (like S, L, and M) and flowing vowels create a sense of calm, while hard sounds (like K or T) can feel abrupt.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to generate your own spa names?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=spa" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
