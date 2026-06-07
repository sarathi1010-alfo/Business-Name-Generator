import { Metadata } from 'next';
import { Industry } from '@/types';
import { dictionary } from '@/data/dictionary';
import { AdSlot } from '@/components/ui/AdSlot';
import { RelatedTools } from '@/components/ui/RelatedTools';
import { generateNames } from '@/lib/generateNames';
import { NameCard } from '@/components/generator/NameCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface Props {
  params: Promise<{ industry: string }>;
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {

  const resolvedParams = await params;
  const industry = resolvedParams?.industry || 'tech';

  const normalized = industry.toLowerCase();
  const cap = normalized.charAt(0).toUpperCase() + normalized.slice(1);
  return {
    title: `${cap} Business Name Generator | BrandForge`,
    description: `Generate unique, brandable ${normalized} business names instantly. Filter by vibe, style, and length to find the perfect name for your ${normalized} startup.`,
  };
}

export function generateStaticParams() {
  const industries = Object.keys(dictionary.industryTokens) as Industry[];
  return industries.map((industry) => ({
    industry,
  }));
}

export default async function IndustryPage({ params }: Props) {

  const resolvedParams = await params;
  const industry = resolvedParams?.industry || 'tech';

  const normalized = industry.toLowerCase() as Industry;

  // Validate industry exists, otherwise fallback
  const validIndustry = Object.keys(dictionary.industryTokens).includes(normalized) ? normalized : 'tech';

  // Pre-generate some static names for SEO content
  const staticNames = generateNames({
    industry: validIndustry,
    vibe: 'modern',
    length: 'any',
    style: 'startup',
    isTwoWords: false
  }, 12);

  const cap = validIndustry.charAt(0).toUpperCase() + validIndustry.slice(1);

  return (
    <>
      <main className="flex-1 flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              {cap} Business Name Generator
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Find the perfect brandable name for your {validIndustry} company. Get inspired by our top ideas or try the full generator.
            </p>
            <div className="pt-4">
              <Link href={`/?industry=${validIndustry}`}>
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
            <h3 className="text-xl font-bold">Want more customized names?</h3>
            <p className="text-muted-foreground max-w-md">
              Use our interactive studio to filter by vibe, style, and length, and save your favorites to a shortlist.
            </p>
            <Link href={`/?industry=${validIndustry}`}>
              <Button>Try the interactive studio</Button>
            </Link>
          </div>
        </section>

        {/* SEO Content Block Example */}
        <section className="w-full max-w-4xl mx-auto px-4 md:px-8 py-16 prose prose-slate dark:prose-invert">
          <h2>How to name your {validIndustry} business</h2>
          <p>
            Naming a {validIndustry} business requires balancing memorability with domain likelihood.
            The best {validIndustry} brands often use short, evocative words rather than long descriptive phrases.
          </p>
          <h3>Tips for success:</h3>
          <ul>
            <li>Keep it under 3 syllables if possible.</li>
            <li>Ensure it passes the &quot;radio test&quot; (easy to spell when heard).</li>
            <li>Check for obvious trademark conflicts early.</li>
          </ul>
        </section>
        <RelatedTools />
      </main>
    </>
  );
}
