import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Edtech Startup Names - Ideas for Education Technology',
  description: 'Generate the perfect name for your edtech startup. Discover inspiring, smart, and growth-focused educational names.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/edtech-startup-names',
  },
};

export default function EdtechNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'How do I choose an edtech startup name?', answer: 'Focus on concepts related to growth, learning, intelligence, and accessibility.' },
        { question: 'What makes a good edtech name?', answer: 'It should be approachable for students and teachers, yet professional enough to sell to school districts or universities.' },
        { question: 'Why is a good name important for edtech?', answer: 'An inspiring name helps convey the value of your product: making learning easier, more accessible, or more effective.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Edtech Startup Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Find a name that empowers learners. Discover ideas for education technology companies.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Empowering the Next Generation</h2>
          <p>
            Naming an edtech company requires a delicate balance. You want a name that feels modern and technological, but it must also remain deeply human and focused on the learning experience. Words that evoke progress, illumination, and connection often work very well in this space.
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
