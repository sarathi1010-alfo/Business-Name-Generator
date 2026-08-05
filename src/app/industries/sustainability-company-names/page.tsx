/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sustainability Company Names – Eco-Friendly & Green Brands',
  description: 'Discover the best sustainability company names. Learn how to create a brand identity that signals eco-friendliness, trust, and a greener tomorrow.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/sustainability-company-names',
  },
};

export default function SustainabilityCompanyNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a good sustainability company name?', answer: 'A good sustainability company name evokes a sense of environmental responsibility, purity, and renewal. It should feel clean and trustworthy.' },
        { question: 'What are common naming strategies for sustainability brands?', answer: 'Many brands use prefixes like "Eco" or "Bio", or words related to nature such as "Earth", "Green", "Loop", or "Renew".' },
        { question: 'Should I use a descriptive or abstract name for a sustainability brand?', answer: 'Descriptive names (e.g., Green Energy Solutions) are clear, but evocative or abstract names (e.g., Tesla, Beyond Meat) can feel more modern and premium.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Sustainability Company Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Build a brand that signals eco-friendliness, trust, and a greener tomorrow.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>How to Name a Sustainability Company</h2>
          <p>
            In the sustainability and green tech sector, your brand name is your first opportunity to signal your core values. Consumers and B2B clients in this space are highly sensitive to "greenwashing," so authenticity is key. The right name should feel transparent, forward-thinking, and deeply connected to environmental stewardship.
          </p>

          <h3>Evocative Naming in Sustainability</h3>
          <p>
            Rather than simply calling your company "Sustainable Packaging Co.", consider names that evoke the <em>feeling</em> of sustainability. Words like "Loop", "Renew", "Aura", or "Clear" suggest a circular economy and purity without being overly literal.
          </p>

          <h3>Building Trust</h3>
          <p>
            Trust is the currency of the eco-friendly market. A strong, cohesive <Link href="/blog/what-is-brand-identity" className="text-indigo-400 hover:underline">brand identity</Link> helps build that trust from day one.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to find your green brand name?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=sustainability" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                Launch BrandForge Studio
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
