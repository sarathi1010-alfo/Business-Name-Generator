import { Metadata } from 'next';
import { Vibe } from '@/types';
import { dictionary } from '@/data/dictionary';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AdSlot } from '@/components/ui/AdSlot';
import { generateNames } from '@/lib/generateNames';
import { NameCard } from '@/components/generator/NameCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { buildBreadcrumbSchema } from '@/lib/seo/buildSchema';
import { buildVibeMeta } from '@/lib/seo/metaFactories';
import { resolveMetadata } from '@/lib/seo/resolveMetadata';

interface Props {
  params: Promise<{ vibe: string }>;
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const resolvedParams = await params;
  const vibe = resolvedParams?.vibe || 'modern';
  const normalized = vibe.toLowerCase();

  // Validate vibe exists, otherwise fallback
  const validVibe = Object.keys(dictionary.vibeTokens).includes(normalized) ? normalized : 'modern';
  const meta = buildVibeMeta(validVibe);

  return resolveMetadata(meta);
}

export function generateStaticParams() {
  const vibes = Object.keys(dictionary.vibeTokens) as Vibe[];
  return vibes.map((vibe) => ({
    vibe,
  }));
}

export default async function VibePage({ params }: Props) {

  const resolvedParams = await params;
  const vibe = resolvedParams?.vibe || 'modern';

  const normalized = vibe.toLowerCase() as Vibe;

  // Validate vibe exists, otherwise fallback
  const validVibe = Object.keys(dictionary.vibeTokens).includes(normalized) ? normalized : 'modern';

  // Pre-generate some static names for SEO content
  const staticNames = generateNames({
    industry: 'tech', // default
    vibe: validVibe,
    length: 'any',
    style: 'brandable',
    isTwoWords: false
  }, 12);

  const cap = validVibe.charAt(0).toUpperCase() + validVibe.slice(1);
  const meta = buildVibeMeta(validVibe);

  return (
    <>
      <JsonLd schema={buildBreadcrumbSchema(meta.breadcrumbs)} />
      <Header />
      <main className="flex-1 flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              {cap} Brand Names
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Looking for a {validVibe} feel? Browse our curated ideas and launch your next big thing.
            </p>
            <div className="pt-4">
              <Link href={`/?vibe=${validVibe}`}>
                <Button size="lg" className="font-bold">Open Full Generator</Button>
              </Link>
            </div>
          </div>
        </section>

        <div className="w-full py-8 flex justify-center border-b">
          <AdSlot variant="leaderboard" />
        </div>

        <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16">
          <h2 className="text-2xl font-bold tracking-tight mb-8">Top {cap} Name Ideas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {staticNames.map((n, i) => (
              <div key={n.id} className="pointer-events-none">
                <NameCard
                  nameObj={n}
                  index={i}
                  isShortlisted={false}
                  onToggleShortlist={undefined as unknown as () => void}
                />
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-card border rounded-xl flex flex-col items-center text-center space-y-4">
            <Link href={`/?vibe=${validVibe}`}>
              <Button variant="outline" size="lg">Explore more {validVibe} names</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
