/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Delivery Company Names – Fast & Reliable Brands',
  description: 'Find the perfect delivery company name. Discover naming strategies that communicate speed, reliability, and logistics expertise.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/delivery-company-names',
  },
};

export default function DeliveryCompanyNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What are the key elements of a delivery company name?', answer: 'A delivery company name should emphasize speed, reliability, and movement.' },
        { question: 'What are some good words to use in a delivery brand name?', answer: 'Words like Dash, Swift, Drop, Send, Quick, and Move are excellent choices for conveying a sense of rapid transit.' },
        { question: 'How important is a memorable name for a delivery service?', answer: 'Extremely important. Delivery services often rely on brand recognition and app-based ordering, so the name must be short, punchy, and easy to type.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Delivery Company Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Names engineered for speed, reliability, and movement.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Naming for Speed and Scale</h2>
          <p>
            The delivery and logistics sector is fiercely competitive. From last-mile food delivery to global freight, your brand name must instantly communicate your core value proposition: getting things where they need to go, fast.
          </p>

          <h3>Short and Punchy Wins</h3>
          <p>
            Think of the biggest players in the modern delivery space: Uber Eats, DoorDash, Postmates, Grab, Glovo. They all use short, highly actionable words. In a world where your brand lives as an icon on a smartphone screen, brevity is crucial.
          </p>

          <h3>Positioning Your Delivery Brand</h3>
          <p>
            Are you the premium, white-glove courier service, or the ultra-fast, low-cost local option? Your <Link href="/blog/what-is-brand-positioning" className="text-indigo-400 hover:underline">brand positioning</Link> will determine whether you should use elegant, trustworthy naming tokens or energetic, playful ones.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Need to move fast?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=delivery" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                Launch BrandForge Studio
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
