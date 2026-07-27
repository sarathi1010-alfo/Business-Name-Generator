/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Crypto Startup Names - Generate Decentralized Brand Ideas',
  description: 'Generate secure, modern crypto startup names. Find the perfect brandable domain for your Web3 project.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/crypto-startup-names',
  },
};

export default function CryptoStartupNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a good crypto startup name?', answer: 'Good crypto startup names often sound futuristic, secure, and decentralized. They frequently use words related to blocks, chains, nodes, and ledgers.' },
        { question: 'Do I need a .io or .xyz domain?', answer: 'While .io and .xyz domains are very popular in the Web3 space and signal your industry, .com is still the gold standard if you can find a short, brandable name.' },
        { question: 'Should my crypto name be abstract or descriptive?', answer: 'Abstract names (like Solana) are highly brandable and memorable, while descriptive names (like Chainlink) immediately communicate what the project does. Both can be successful.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Crypto Startup Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Secure, decentralized, and highly scalable. Name your Web3 revolution.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Naming in the Web3 Era</h2>
          <p>
            The crypto landscape is evolving rapidly. Slapping "Coin" onto the end of a generic word is no longer enough to stand out. The best Web3 brands are moving toward evocative naming—words that suggest security, consensus, networks, or digital ownership.
          </p>

          <h3>Finding the Right Tone</h3>
          <p>
            Consider your archetype. Are you the 'Explorer' building a new metaverse, or the 'Ruler' offering enterprise blockchain solutions? Your name should reflect the specific value of your protocol.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to generate crypto names?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=crypto" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
