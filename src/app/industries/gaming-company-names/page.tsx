import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AdSlot } from '@/components/ui/AdSlot';
import { generateNames } from '@/lib/generateNames';
import { NameCard } from '@/components/generator/NameCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { buildBreadcrumbSchema, buildFaqSchema } from '@/lib/seo/buildSchema';
import { buildIndustryMeta } from '@/lib/seo/metaFactories';
import { resolveMetadata } from '@/lib/seo/resolveMetadata';

const industry = 'gaming';

export async function generateMetadata(): Promise<Metadata> {
  const meta = buildIndustryMeta(industry);
  return resolveMetadata(meta);
}

const faqs = [
  { question: "How to name a gaming company?", answer: "Naming a gaming company involves thinking about the genre of games you make. Use dynamic, action-oriented, or fantasy-themed words that resonate with gamers." },
  { question: "What makes a gaming studio name memorable?", answer: "A memorable gaming studio name is usually punchy, evokes a specific atmosphere (like futuristic, epic, or playful), and is easy to pronounce across different languages." }
];

export default function GamingNamesPage() {
  const staticNames = generateNames({ industry, vibe: 'futuristic', length: 'short', style: 'brandable', isTwoWords: false }, 12);
  const meta = buildIndustryMeta(industry);

  return (
    <>
      <JsonLd schema={buildBreadcrumbSchema(meta.breadcrumbs)} />
      <JsonLd schema={buildFaqSchema(faqs)} />
      <Header />
      <main className="flex-1 flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              Gaming Company Names – Epic, Futuristic, and Immersive
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Find an epic name for your indie studio, esports team, or gaming brand. Generate ideas that gamers will remember.
            </p>
            <div className="pt-4">
              <Link href={`/?industry=${industry}`}>
                <Button size="lg" className="font-bold">Open Full Generator</Button>
              </Link>
            </div>
          </div>
        </section>

        <div className="w-full py-8 flex justify-center border-b">
          <AdSlot variant="leaderboard" />
        </div>

        <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16">
          <h2 className="text-2xl font-bold tracking-tight mb-8">Top Gaming Name Ideas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {staticNames.map((n, i) => (
              <div key={n.id} className="pointer-events-none">
                <NameCard nameObj={n} index={i} isShortlisted={false} onToggleShortlist={undefined as unknown as () => void} />
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-card border rounded-xl flex flex-col items-center text-center space-y-4">
            <Link href={`/?industry=${industry}`}>
              <Button variant="outline" size="lg">Explore more Gaming names</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}