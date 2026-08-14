import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Telehealth Startup Names - Ideas for Virtual Care',
  description: 'Generate the perfect name for your telehealth startup. Discover modern, trustworthy, and tech-forward healthcare names.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/telehealth-startup-names',
  },
};

export default function TelehealthNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'How do I choose a telehealth startup name?', answer: 'Focus on words that communicate connection, health, immediacy, and trust.' },
        { question: 'What makes a good telehealth name?', answer: 'It should sound secure and professional, reassuring patients while highlighting the technological convenience of the service.' },
        { question: 'Why is a good name important for telehealth?', answer: 'In healthcare, trust is paramount. A strong, clear name helps patients feel secure using a digital platform for their medical needs.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Telehealth Startup Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Find a name that builds trust in virtual care. Discover ideas for modern healthcare solutions.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Connecting Care and Technology</h2>
          <p>
            Naming a telehealth startup requires balancing the clinical authority of traditional healthcare with the accessibility of modern technology. The best names in this space communicate that care is just a click away, without sounding like a casual app. Focus on clarity, security, and wellness.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to generate ideas?</h3>
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
