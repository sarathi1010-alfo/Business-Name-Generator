import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Finance Startup Names - Trust & Innovation',
  description: 'Generate professional, trustworthy finance startup and fintech brand names.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/finance-startup-names',
  },
};

export default function FinanceStartupNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a good fintech name?', answer: 'A good fintech name balances trust and security with speed and innovation. It often combines traditional finance words with modern tech suffixes.' },
        { question: 'Why do finance names need to sound trustworthy?', answer: 'Because you are handling peoples money. If the name sounds frivolous or overly playful, users will hesitate to link their bank accounts.' },
        { question: 'Should a finance name be descriptive?', answer: 'It can be, but many successful fintechs use abstract or evocative names (like Stripe, Plaid, or Square) to build a broader platform.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Finance Startup Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Names that balance unshakeable trust with cutting-edge innovation.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Trust meets Tech</h2>
          <p>
            Naming a fintech or finance startup is challenging because you must satisfy two opposing forces: the need for absolute security (which favors traditional, slightly boring names) and the need for innovation (which favors disruptive, edgy names).
          </p>

          <h3>Finding the Balance</h3>
          <p>
            The best finance names find the middle ground. They sound solid and institutional, but look clean and modern. Words implying growth, vaults, ledgers, or seamless movement work well.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Generate Fintech Ideas</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=finance" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
