import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';
import { NameCard } from '@/components/generator/NameCard';
import { generateNames } from '@/lib/generateNames';

export const metadata: Metadata = {
  title: 'Agriculture Company Names - Generate Brand Ideas',
  description: 'Cultivate a brand name that roots your business in growth, sustainability, and trust.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/agriculture-company-names',
  },
};

export default function Page() {
  const staticNames = generateNames({ industry: 'agriculture', vibe: 'modern', length: 'any', style: 'brandable', isTwoWords: false }, 12);
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a good agriculture company name?', answer: 'A good name in this industry should communicate trust, relevance to the field, and be easy for your target audience to remember and pronounce.' },
        { question: 'How can I check if my agriculture company name is available?', answer: 'You should perform a trademark search in your local jurisdiction and check for domain name availability using a registrar.' },
        { question: 'Should I use my own name for my agriculture company?', answer: 'Using your own name can build personal trust, but it may make the business harder to sell later or scale beyond your personal reputation.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Agriculture Company Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Cultivate a brand name that roots your business in growth, sustainability, and trust.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Choosing the Perfect Name</h2>
          <p>
            When establishing a agriculture company, your brand name is often the first point of contact with potential clients or customers. It needs to convey the right message immediately.
          </p>

          <h2>Example Name Ideas</h2>
          <p>Here are some examples of what you might generate for a agriculture company:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-8">
            {staticNames.map((n, i) => (
              <div key={n.id} className="pointer-events-none">
                <NameCard nameObj={n} index={i} isShortlisted={false} onToggleShortlist={undefined as unknown as () => void} />
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to build your brand?</h3>
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
