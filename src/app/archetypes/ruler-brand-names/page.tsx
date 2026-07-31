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
import { buildVibeMeta } from '@/lib/seo/metaFactories';
import { resolveMetadata } from '@/lib/seo/resolveMetadata';

const archetype = 'ruler';
const archetypeTitle = 'Ruler';

export async function generateMetadata(): Promise<Metadata> {
  const title = `${archetypeTitle} Brand Archetype Names`;
  const meta = buildVibeMeta('premium'); // Base meta
  meta.title = title;
  meta.description = `Discover authoritative, premium brand names for the ${archetypeTitle} archetype. Perfect for luxury, finance, and industry-leading startups.`;
  meta.slug = `/archetypes/${archetype}-brand-names`;
  return resolveMetadata(meta);
}

const faqs = [
  { question: `What is the ${archetypeTitle} brand archetype?`, answer: `The ${archetypeTitle} brand archetype represents power, control, and exclusivity. These brands are leaders in their industry, offering premium products and guaranteeing high quality.` },
  { question: `How to name a ${archetypeTitle} brand?`, answer: `Naming a ${archetypeTitle} brand requires strong, commanding, and often traditional-sounding words. Names that imply heritage, apex positioning, or absolute authority work well (e.g., Rolex, Mercedes-Benz).` }
];

export default function ArchetypeNamesPage() {
  const staticNames = generateNames({ industry: 'finance', vibe: 'premium', length: 'short', style: 'brandable', isTwoWords: false }, 12);
  const title = `${archetypeTitle} Brand Archetype Names`;

  return (
    <>
      <JsonLd schema={buildBreadcrumbSchema([
        { label: 'Home', href: '/' },
        { label: title, href: `/archetypes/${archetype}-brand-names` }
      ])} />
      <JsonLd schema={buildFaqSchema(faqs)} />
      <Header />
      <main className="flex-1 flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              {title} – Authoritative, Premium, and Bold
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Command respect from day one. Discover names that perfectly align with the {archetypeTitle} archetype.
            </p>
            <div className="pt-4">
              <Link href={`/?vibe=premium`}>
                <Button size="lg" className="font-bold">Open Full Generator</Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Understanding The {archetypeTitle} Archetype</h2>
          <p className="text-lg font-medium border-l-4 border-indigo-500 pl-4 py-1 bg-muted/30">
            The {archetypeTitle} archetype embodies prestige, leadership, and absolute authority. A successful {archetypeTitle} brand name projects power and stability, using commanding language and sophisticated visual identity to assure customers they are investing in the undisputed market leader.
          </p>
          <p>
            Brands utilizing this archetype don&apos;t just participate in the market; they seek to dominate it and set the standard for everyone else. Think of brands like Rolex or Mercedes-Benz—they do not compete on price; they compete on absolute superiority.
          </p>
        </section>

        <div className="w-full py-8 flex justify-center border-b">
          <AdSlot variant="leaderboard" />
        </div>

        <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16">
          <h2 className="text-2xl font-bold tracking-tight mb-8 text-foreground">Top {archetypeTitle} Name Ideas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {staticNames.map((n, i) => (
              <div key={n.id} className="pointer-events-none">
                <NameCard nameObj={n} index={i} isShortlisted={false} onToggleShortlist={undefined as unknown as () => void} />
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-card border rounded-xl flex flex-col items-center text-center space-y-4">
            <Link href={`/?vibe=premium`}>
              <Button variant="outline" size="lg">Explore more {archetypeTitle} names</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}