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
import { buildArchetypeMeta } from '@/lib/seo/metaFactories';
import { resolveMetadata } from '@/lib/seo/resolveMetadata';

const archetype = 'innovator';

export async function generateMetadata(): Promise<Metadata> {
  const meta = buildArchetypeMeta(archetype);
  return resolveMetadata(meta);
}

const faqs = [
  { question: "What is the Innovator brand archetype?", answer: "The Innovator (often related to the Creator or Magician) is focused on bringing the new, the unseen, and the cutting-edge to the market. They break the mold and lead progress." },
  { question: "What industries fit the Innovator archetype?", answer: "Tech, SaaS, biotech, AI, and any industry where disruption and advanced solutions are the primary value proposition." }
];

export default function InnovatorArchetypeNamesPage() {
  const staticNames = generateNames({ industry: 'tech', vibe: 'futuristic', length: 'short', style: 'brandable', isTwoWords: false }, 12);
  const meta = buildArchetypeMeta(archetype);

  return (
    <>
      <JsonLd schema={buildBreadcrumbSchema(meta.breadcrumbs)} />
      <JsonLd schema={buildFaqSchema(faqs)} />
      <Header />
      <main className="flex-1 flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              Innovator Brand Archetype Names – Visionary and Cutting-Edge
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Find forward-thinking names that establish your brand as a pioneer and industry leader.
            </p>
            <div className="pt-4">
              <Link href={`/?style=futuristic`}>
                <Button size="lg" className="font-bold">Open Full Generator</Button>
              </Link>
            </div>
          </div>
        </section>

        <div className="w-full py-8 flex justify-center border-b">
          <AdSlot variant="leaderboard" />
        </div>

        <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16">
          <h2 className="text-2xl font-bold tracking-tight mb-8">Top Innovator Name Ideas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {staticNames.map((n, i) => (
              <div key={n.id} className="pointer-events-none">
                <NameCard nameObj={n} index={i} isShortlisted={false} onToggleShortlist={undefined as unknown as () => void} />
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-card border rounded-xl flex flex-col items-center text-center space-y-4">
            <Link href={`/?style=futuristic`}>
              <Button variant="outline" size="lg">Explore more Innovator names</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
