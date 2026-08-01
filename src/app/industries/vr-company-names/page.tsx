import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'VR Company Names - Immersive Brand Ideas',
  description: 'Generate immersive, futuristic virtual reality company names. Discover naming trends in the VR industry.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/vr-company-names',
  },
};

export default function VRCompanyNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a good VR company name?', answer: 'A good VR name suggests immersion, futuristic technology, and alternate realities. Words like Sphere, Holo, and Vision are common.' },
        { question: 'Should a VR name be abstract or descriptive?', answer: 'Both work, but abstract names are often better as they feel more high-tech and scalable beyond just headsets.' },
        { question: 'How important is a .com domain for a VR startup?', answer: 'While .com is good, .io and .tech are very popular in this space.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">VR Company Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Immersive, futuristic names for the next generation of reality.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Naming in the Virtual Reality Space</h2>
          <p>
            The VR industry is all about expanding the boundaries of human experience. Your name needs to reflect this sense of wonder and technological capability.
          </p>

          <h3>Finding the Balance</h3>
          <p>
            You want a name that sounds advanced but remains approachable. Combining Latin roots with modern tech suffixes often yields great results in this sector.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to generate your own VR names?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=vr" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
