import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Architecture Firm Names - Generate Creative Design Brand Ideas',
  description: 'Generate structured, creative architecture firm names. Discover naming trends in design and find the perfect brandable domain.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/architecture-firm-names',
  },
};

export default function ArchitectureFirmNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a good architecture firm name?', answer: 'A strong architecture name often balances creativity with structural integrity. It should sound established but forward-thinking.' },
        { question: 'Are acronyms good for architecture firms?', answer: 'Yes, acronyms (like HOK or OMA) are very popular in architecture as they sound professional and allow multiple partners to be represented cleanly.' },
        { question: 'Should an architecture name reflect a specific style?', answer: 'If your firm specializes exclusively in a specific style (e.g., sustainable design or brutalism), incorporating related terms can help attract your ideal clients.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Architecture Firm Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Visionary, structured, and timeless. Find the perfect name for your design practice.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Naming in the Built Environment</h2>
          <p>
            An architecture firm's name is its first design project. It sets the tone for the firm's aesthetic and philosophy. While many renowned firms are named after their founders, there is a growing trend toward conceptual names that reflect the studio's approach to space, light, and structure.
          </p>

          <h3>Finding Your Angle</h3>
          <p>
            Consider what makes your firm unique. Do you focus on urban integration? Sustainable materials? Minimalist aesthetics? Let those core principles guide your naming process, blending structural terms with evocative concepts.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to generate your own architecture names?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=architecture" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
