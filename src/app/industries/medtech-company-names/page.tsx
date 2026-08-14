import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Medtech Company Names - Ideas for Medical Innovation',
  description: 'Generate the perfect name for your medtech company. Discover scientific, authoritative, and innovative brand names.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/medtech-company-names',
  },
};

export default function MedtechNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'How do I choose a medtech company name?', answer: 'Look for names that sound authoritative, scientific, and forward-looking, often combining Latin or Greek roots with modern suffixes.' },
        { question: 'What makes a good medtech name?', answer: 'It must sound credible to investors, doctors, and regulatory bodies while still being memorable.' },
        { question: 'Why is a good name important for medtech?', answer: 'A strong medtech name establishes immediate credibility and signals that your technology is safe, precise, and advanced.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Medtech Company Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Find a name that signals scientific breakthrough. Discover ideas for medical technology startups.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Innovating the Future of Health</h2>
          <p>
            In the medical technology sector, your brand name must carry weight. It needs to appeal to venture capitalists, hospital procurement officers, and regulatory bodies. Successful medtech names often sound precise, clinical, and innovative, steering clear of overly casual or playful tones.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to launch your brand?</h3>
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
