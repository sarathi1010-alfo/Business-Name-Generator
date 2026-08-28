import { NameCard } from "@/components/generator/NameCard";
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AdSlot } from '@/components/ui/AdSlot';
import { generateNames } from '@/lib/generateNames';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { buildBreadcrumbSchema, buildFaqSchema } from '@/lib/seo/buildSchema';
import { buildVibeMeta } from '@/lib/seo/metaFactories';
import { resolveMetadata } from '@/lib/seo/resolveMetadata';

const vibe = 'premium';

export async function generateMetadata(): Promise<Metadata> {
  const meta = buildVibeMeta(vibe);
  return resolveMetadata(meta);
}

const faqs = [
  { question: "What is a premium brand name?", answer: "A premium brand name evokes feelings of premium, helping to position your business in a specific emotional or stylistic category." },
  { question: "Why choose a premium vibe?", answer: "Selecting the right vibe helps attract your target audience by setting the appropriate tone before they even see your product." }
];

export default function PremiumNamesPage() {
  const staticNames = generateNames({ industry: 'tech', vibe: 'premium' as any, length: 'short', style: 'brandable', isTwoWords: false }, 12);
  const meta = buildVibeMeta(vibe);

  return (
    <>
      <JsonLd schema={buildBreadcrumbSchema(meta.breadcrumbs)} />
      <JsonLd schema={buildFaqSchema(faqs)} />
      <Header />
      <main className="flex-1 flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              Premium Brand Names – Set the Right Tone
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover premium brand names engineered for perception and trust.
            </p>
            <div className="pt-4">
              <Link href={`/?vibe=${vibe}`}>
                <Button size="lg" className="font-bold">Open Full Generator</Button>
              </Link>
            </div>
          </div>
        </section>

        <div className="w-full py-8 flex justify-center border-b">
          <AdSlot variant="leaderboard" />
        </div>

        <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16">
          <h2 className="text-2xl font-bold tracking-tight mb-8">Examples of Premium Brand Names</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {staticNames.map((n, i) => (
              <div key={n.id} className="pointer-events-none">
                <NameCard nameObj={n} index={i} isShortlisted={false} onToggleShortlist={undefined as unknown as () => void} />
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-card border rounded-xl flex flex-col items-center text-center space-y-4">
            <Link href={`/?vibe=${vibe}`}>
              <Button variant="outline" size="lg">Generate more names</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
