import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Influencer Agency Names - Social Media Brands',
  description: 'Generate trendy, connected influencer agency and social media management names.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/influencer-agency-names',
  },
};

export default function InfluencerAgencyNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a good influencer agency name?', answer: 'A good name in this space sounds connected, trendy, and authoritative. It should appeal to both young creators and corporate brands.' },
        { question: 'Should a social media agency name be abstract?', answer: 'Abstract names are very popular here, as they allow the agency to pivot as platforms change over time.' },
        { question: 'How important is the vibe of the name?', answer: 'Crucial. The name itself is the first piece of marketing you present to highly image-conscious creators.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Influencer Agency Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Names that shape the culture and connect the world.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Naming in Social Media Management</h2>
          <p>
            An influencer agency sits between two worlds: the chaotic, trendy world of creators, and the structured, ROI-focused world of corporate brands. Your name must bridge this gap.
          </p>

          <h3>Finding the Balance</h3>
          <p>
            You want a name that feels fresh and relevant to creators, but professional enough that a Fortune 500 CMO trusts you with their budget.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to generate your own agency names?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=influencer" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
