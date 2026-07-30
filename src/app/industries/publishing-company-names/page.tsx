import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Publishing Company Names - Generate Literary Brand Ideas',
  description: 'Generate authoritative, literary publishing company names. Discover naming trends in media and find the perfect brandable domain.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/publishing-company-names',
  },
};

export default function PublishingCompanyNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a good publishing company name?', answer: 'A good publishing name sounds authoritative, timeless, and intellectual. It should instill confidence in authors and readers alike.' },
        { question: 'Should a publisher use "Press" or "Books" in their name?', answer: 'Yes, using "Press", "Books", or "Media" clearly identifies your business type, though some modern digital publishers opt for more abstract names.' },
        { question: 'How important is a domain for a publishing house?', answer: 'A professional domain is critical for establishing legitimacy with authors, agents, and distributors.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Publishing Company Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Authoritative, timeless, and literary. Find the perfect name for your press or media company.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Naming in the Publishing Industry</h2>
          <p>
            Publishing is an industry built on prestige and history. Even if you are a brand new indie press, your name should project authority and a deep appreciation for the written word. Names often incorporate elements of print (Ink, Press, Page) or concepts of storytelling and knowledge.
          </p>

          <h3>Traditional vs. Modern Media</h3>
          <p>
            If you are publishing classic literature or non-fiction, a traditional name ending in &quot;Press&quot; works beautifully. If you are a modern, digital-first media company, you might choose something punchier and more abstract to signal innovation.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to generate your own publishing names?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=publishing" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
