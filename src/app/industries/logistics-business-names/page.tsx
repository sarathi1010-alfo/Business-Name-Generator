
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Logistics Brand Names - Generate Brand Ideas',
  description: 'Generate memorable, professional logistics brand names. Find the perfect domain for your startup.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/logistics-business-names',
  },
};

export default function LogisticsNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a good logistics company name?', answer: 'Good logistics company names sound trustworthy, memorable, and clear. They should resonate with your target audience and reflect your core values.' },
        { question: 'Should my name be abstract or descriptive?', answer: 'Both work. Abstract names offer a blank canvas to build your brand upon, while descriptive names immediately tell customers what you do.' },
        { question: 'How important is a .com domain?', answer: 'While .com is ideal, a strong, memorable name with a .io, .co, or other modern extension is often better than a mediocre name with a .com.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Logistics Brand Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Memorable, distinctive, and built for growth. Name your logistics business.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Building a Standout Logistics Brand</h2>
          <p>
            In a crowded market, your name is your first impression. A great name acts as a strategic asset that communicates your unique positioning and builds instant trust with your audience.
          </p>

          <h3>Finding the Right Tone</h3>
          <p>
            Consider your archetype. The tone of your brand name should perfectly align with the psychological profile of your ideal customer.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to generate logistics names?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=logistics" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
