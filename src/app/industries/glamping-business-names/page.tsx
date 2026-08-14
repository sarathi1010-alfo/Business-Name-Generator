import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Glamping Business Names - Ideas for Luxury Camping',
  description: 'Generate the perfect name for your glamping business. Discover adventurous, premium, and nature-inspired names.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/glamping-business-names',
  },
};

export default function GlampingNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'How do I choose a glamping business name?', answer: 'Combine words that evoke nature and the outdoors with terms that imply comfort, luxury, or retreat.' },
        { question: 'What makes a good glamping name?', answer: 'A good name balances the rugged appeal of the outdoors with the high-end amenities your guests expect.' },
        { question: 'Why is a good name important for glamping?', answer: 'The glamping market is highly visual and experiential; a strong name helps set the expectation for a premium outdoor experience.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Glamping Business Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Find a name that blends nature with luxury. Discover ideas for your outdoor retreat.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Nature Meets Comfort</h2>
          <p>
            Glamping is all about offering an escape into nature without sacrificing the comforts of a hotel. Your business name needs to capture this dual appeal. Words that suggest adventure, serenity, and premium experiences work best when naming a glamping site or luxury camping retreat.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to find your name?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
