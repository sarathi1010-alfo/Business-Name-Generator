import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Health & Wellness Brand Names - Trustworthy Ideas',
  description: 'Create a brand name that inspires vitality and trust. Explore naming strategies for health, wellness, and fitness businesses.',
  alternates: {
    lastModified: '2026-07-03T00:00:00Z',
    canonical: 'https://brandforge.alfo.online/industries/health-wellness-names',
  },
};

export default function HealthWellnessNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a good health and wellness name?', answer: 'It should inspire feelings of vitality, purity, balance, and trust. Soft consonant sounds and open vowels are often favored.' },
        { question: 'Should a wellness brand sound clinical?', answer: 'Usually not, unless you are a purely medical facility. Wellness brands tend to lean towards holistic, natural-sounding names rather than clinical terms.' },
        { question: 'What words should I avoid in a health brand name?', answer: 'Avoid words with negative connotations (like sick, ill, cure-all) or terms that make medical claims you legally cannot substantiate.' }
      ])} />
      <Header />
      <main className="flex-1 bg-background text-foreground flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Health & Wellness Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Inspire vitality, balance, and profound trust with the perfect wellness brand name.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Naming for Vitality</h2>
          <p>
            In the health, wellness, and fitness sectors, trust is your most valuable currency. Consumers are trusting you with their bodies and minds. Your brand name must immediately communicate safety, purity, and effectiveness.
          </p>

          <h3>Finding the Balance</h3>
          <p>
            The best wellness names often strike a balance between the scientific and the natural. They might use Latin roots related to life, breath, or movement, combined with softer, flowing sounds that evoke a sense of calm and well-being.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to generate your own wellness names?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=health" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
