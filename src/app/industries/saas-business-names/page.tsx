import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SaaS Business Names - Generate Software Brand Ideas',
  description: 'Generate clean, memorable SaaS business names. Discover the best naming strategies for scalable software companies.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/saas-business-names',
  },
};

export default function SaaSBusinessNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a good SaaS business name?', answer: 'A good SaaS name implies workflow, speed, integration, or ease of use. It should be short, easy to type, and look good in a browser tab.' },
        { question: 'Are abstract names better for SaaS?', answer: 'Abstract or slightly tweaked real words (like Slack or Vercel) are excellent for SaaS because they allow the product to evolve beyond its initial feature set.' },
        { question: 'Do SaaS companies need a .com?', answer: 'While .com is preferred, .io, .co, and .app are widely accepted and trusted in the software-as-a-service industry.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">SaaS Business Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Clean, memorable, and ready to scale. Find your software brand.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Naming Your Software</h2>
          <p>
            In SaaS, your brand name is often the first touchpoint. It needs to convey reliability while sounding modern enough to appeal to early adopters. Avoid overly literal names that lock you into one specific feature.
          </p>

          <h3>SaaS Naming Trends</h3>
          <p>
            Current trends favor single-word names, either completely invented or real words used out of context. The goal is to create a strong, ownable noun that can eventually become a verb (e.g., "Slack me").
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Generate SaaS Ideas</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=saas" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
