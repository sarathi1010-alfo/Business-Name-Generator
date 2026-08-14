import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Insurtech Startup Names - Ideas for Insurance Technology',
  description: 'Generate the perfect name for your insurtech startup. Discover secure, modern, and reliable insurance names.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/insurtech-startup-names',
  },
};

export default function InsurtechNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'How do I choose an insurtech startup name?', answer: 'Focus on words that communicate safety, coverage, assurance, and technological speed.' },
        { question: 'What makes a good insurtech name?', answer: 'It must sound incredibly trustworthy and secure, avoiding any names that feel flimsy or overly casual.' },
        { question: 'Why is a good name important for insurtech?', answer: 'Insurance is fundamentally about trust and risk mitigation. Your brand identity must instantly assure customers they are in safe hands.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Insurtech Startup Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Find a name that guarantees trust. Discover ideas for modern insurance technology.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Insuring the Future</h2>
          <p>
            The insurance industry relies heavily on a strong, trustworthy brand image. For an insurtech startup, your name needs to convey the solid reliability of a traditional insurance firm, coupled with the speed, transparency, and ease of use that modern technology provides.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to secure your name?</h3>
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
