/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fintech Startup Names – Trust & Innovation',
  description: 'Discover the best naming strategies for fintech startups. Build a brand name that balances technological innovation with financial trust and security.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/fintech-startup-names',
  },
};

export default function FintechStartupNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What is a good name for a fintech startup?', answer: 'A good fintech name must balance trust (since it handles money) with innovation (since it is a tech company). It should sound secure yet forward-thinking.' },
        { question: 'What are common naming trends in fintech?', answer: 'Many fintechs use abstract, short names (e.g., Stripe, Plaid) or compound words that suggest movement and capital (e.g., Wealthfront, CoinBase).' },
        { question: 'Should a fintech name be descriptive or abstract?', answer: 'Abstract names are highly popular for B2B infrastructure fintechs, while B2C apps often use slightly more descriptive or evocative names to clearly explain their value.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Fintech Startup Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Names that balance financial trust with technological innovation.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>The Fintech Naming Challenge</h2>
          <p>
            Naming a fintech startup involves a unique tension. On one hand, you need to sound like a modern, disruptive technology company. On the other hand, you are asking people to trust you with their money, which requires a sense of stability, security, and institutional weight.
          </p>

          <h3>Finding the Balance</h3>
          <p>
            The most successful fintech names often utilize words associated with flow, security, or wealth (e.g., Pay, Vault, Flow, Trust) combined with modern naming conventions like dropping vowels or using <Link href="/name-styles/portmanteau-brand-names" className="text-indigo-400 hover:underline">portmanteaus</Link>.
          </p>

          <h3>The Importance of a Clean Domain</h3>
          <p>
            For a digital-first financial product, trust begins with the URL. A complicated domain name or a strange extension can trigger phishing fears in cautious consumers. When generating your name, prioritize options that have clean, logical domain paths. Read more about this in our guide on <Link href="/blog/how-to-name-a-future-proof-startup" className="text-indigo-400 hover:underline">future-proofing your startup name</Link>.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Secure your brand's future.</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=fintech" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
