/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Web3 Startup Names – Decentralized & Futuristic Brands',
  description: 'Explore the best naming strategies for Web3, crypto, and blockchain startups. Create a brand name that signals decentralization, security, and the future of the internet.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/web3-startup-names',
  },
};

export default function Web3StartupNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What is a good name for a Web3 startup?', answer: 'A good Web3 name often sounds futuristic, decentralized, and technical. It should appeal to crypto-native audiences while remaining accessible.' },
        { question: 'What are common naming elements in Web3?', answer: 'Words like Block, Chain, Node, Mint, and Vault are common. Abstract names and creative misspellings are also widely used.' },
        { question: 'Should a Web3 name be highly technical?', answer: 'It depends on your audience. If you are building infrastructure for developers, technical names work well. If you are building consumer apps (like wallets or NFT platforms), the name should be more approachable.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Web3 Startup Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Names designed for a decentralized future.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Naming in the Decentralized Era</h2>
          <p>
            Web3 and blockchain technology represents the cutting edge of the internet. Therefore, naming a Web3 startup requires a futuristic, tech-forward approach. The audience in this space values innovation, security, and the disruption of traditional systems.
          </p>

          <h3>Common Web3 Tropes</h3>
          <p>
            Many projects lean heavily on technical jargon (nodes, hashes, blocks, chains). While these words immediately signal what industry you are in, they can also make it difficult to stand out. To differentiate your brand, try combining a technical term with an organic or emotional word, creating a unique <Link href="/name-styles/compound-brand-names" className="text-indigo-400 hover:underline">compound name</Link>.
          </p>

          <h3>The Importance of the Visual Vibe</h3>
          <p>
            Web3 branding relies heavily on visual aesthetics—often leaning towards <Link href="/futuristic-brand-names" className="text-indigo-400 hover:underline">futuristic</Link> or cyberpunk themes with dark backgrounds and neon accents. When selecting a name, consider how it will look set in a stark, futuristic typeface.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Mint your new brand identity.</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=web3" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
