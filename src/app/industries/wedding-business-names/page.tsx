import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Wedding Business Names - Generate Elegant Event Brand Ideas',
  description: 'Generate romantic, elegant wedding business names. Discover naming trends in the event industry and find the perfect brandable domain.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/wedding-business-names',
  },
};

export default function WeddingBusinessNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a good wedding business name?', answer: 'A strong wedding business name evokes romance, elegance, and joy. It should sound premium and trustworthy, as clients are trusting you with their most important day.' },
        { question: 'Should a wedding business name be descriptive?', answer: 'Descriptive names (e.g., "Everlasting Events") are clear, but evocative names (e.g., "The White Peony") can create a stronger emotional connection and premium feel.' },
        { question: 'How important is a .com domain for a wedding business?', answer: 'Very important. A .com domain establishes trust and professionalism, which is critical when clients are making high-ticket emotional purchases.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Wedding Business Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Romantic, elegant, and unforgettable. Find the perfect name for your wedding venture.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Naming in the Wedding Industry</h2>
          <p>
            The wedding industry is built on emotion and aesthetics. Your business name must immediately convey the specific vibe you provide, whether that is rustic charm, high-end luxury, or modern minimalism. A great name sets the expectation for the level of service and style clients will receive.
          </p>

          <h3>Setting the Tone</h3>
          <p>
            Think about your ideal client. Are they looking for a traditional, opulent affair, or a quirky, intimate elopement? Use words that align with that vision to attract the right couples to your business.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to generate your own wedding names?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=wedding" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
