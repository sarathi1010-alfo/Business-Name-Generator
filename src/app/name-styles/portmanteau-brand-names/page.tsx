import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Portmanteau Brand Names - Creative & Memorable',
  description: 'Learn how to create portmanteau brand names. Combine words to create unique, ownable brand identities.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/name-styles/portmanteau-brand-names',
  },
};

export default function PortmanteauNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What is a portmanteau brand name?', answer: 'A portmanteau brand name is created by blending two or more words together to create a new word that combines their meanings, like Pinterest (pin + interest).' },
        { question: 'Why use a portmanteau for a business name?', answer: 'They are often highly memorable, unique, and easier to trademark or secure a .com domain for compared to standard dictionary words.' },
        { question: 'What are examples of portmanteau brand names?', answer: 'Well-known examples include Netflix (internet + flicks), Instagram (instant camera + telegram), and Groupon (group + coupon).' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Portmanteau Brand Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Blend meanings, stand out, and secure that domain.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>The Power of the Blend</h2>
          <p>
            A portmanteau takes two distinct concepts and fuses them into a single, seamless word. This naming strategy is a favorite among startups because it allows you to be descriptive without being generic.
          </p>

          <h3>Creating a Portmanteau</h3>
          <p>
            The best portmanteaus overlap sounds or letters. Think about the core features of your product or the main benefit to the user. List synonyms for those concepts, and look for natural combinations. For example, if your app helps people manage their daily routine, you might combine "routine" and "sync" into "Routync".
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to brainstorm?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?style=brandable" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
