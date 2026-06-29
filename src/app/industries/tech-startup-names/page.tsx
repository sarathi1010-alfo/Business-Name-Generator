import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tech Startup Names - Generate Modern Tech Brand Ideas',
  description: 'Generate cutting-edge, modern tech startup names. Discover naming trends in the tech industry and find the perfect brandable domain.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/tech-startup-names',
  },
};

export default function TechStartupNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a good tech startup name?', answer: 'A good tech startup name is usually short, memorable, and often implies innovation, speed, or connectivity (e.g., Stripe, Vercel).' },
        { question: 'Should a tech startup name describe the product?', answer: 'Not necessarily. While descriptive names work for B2B utilities, many successful tech startups use abstract or evocative names that allow them to pivot later.' },
        { question: 'How important is a .com domain for a tech startup?', answer: 'While .com is ideal for trust, many tech startups successfully launch with alternatives like .io, .co, or .ai before acquiring the .com.' }
      ])} />
      <Header />
      <main className="flex-1 bg-background text-foreground flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Tech Startup Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Innovative, modern, and built to scale. Find the perfect name for your next unicorn.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Naming in the Tech World</h2>
          <p>
            In the fast-paced world of technology, your name needs to sound as innovative as your product. The trend has moved away from dropping vowels (Flickr, Tumblr) toward short, punchy, real words used out of context (Stripe, Plaid) or completely invented, sleek-sounding words (Vercel, Figma).
          </p>

          <h3>Domain Strategy</h3>
          <p>
            Tech startups have unique flexibility with domains. While a .com is always the gold standard, the tech community widely accepts and even expects extensions like .io (for developer tools), .ai (for artificial intelligence), and .co. This allows you to prioritize a shorter, stronger name over a perfect .com availability initially.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to generate your own tech names?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=tech" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
