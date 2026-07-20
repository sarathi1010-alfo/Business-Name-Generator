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

const archetype = 'jester';
const archetypeTitle = 'Jester';

export async function generateMetadata(): Promise<Metadata> {
  const title = `${archetypeTitle} Brand Archetype Names`;
  const meta = buildVibeMeta('playful'); // Base meta
  meta.title = title;
  meta.description = `Discover playful, irreverent brand names for the ${archetypeTitle} archetype. Perfect for fun, disruptive startups looking to entertain.`;
  meta.slug = `/archetypes/${archetype}-brand-names`;
  return resolveMetadata(meta);
}

const faqs = [
  { question: `What is the ${archetypeTitle} brand archetype?`, answer: `The ${archetypeTitle} brand archetype focuses on having fun, living in the moment, and enjoying life. These brands use humor to connect with their audience and break the ice.` },
  { question: `How to name a ${archetypeTitle} brand?`, answer: `Naming a ${archetypeTitle} brand usually involves playful sounds, puns, or slightly irreverent words that signal you don't take yourself too seriously (e.g., Mailchimp, Dollar Shave Club).` }
];

export default function ArchetypeNamesPage() {
  const staticNames = generateNames({ industry: 'tech', vibe: 'playful', length: 'short', style: 'brandable', isTwoWords: false }, 12);
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
              {title} – Playful, Entertaining, and Fun
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Want a brand that makes people smile? Discover names that fit the {archetypeTitle} archetype perfectly.
            </p>
            <div className="pt-4">
              <Link href={`/?vibe=playful`}>
                <Button size="lg" className="font-bold">Open Full Generator</Button>
              </Link>
            </div>
          </div>
        </section>

        <div className="w-full py-8 flex justify-center border-b">
          <AdSlot variant="leaderboard" />
        </div>

        <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16">
          <h2 className="text-2xl font-bold tracking-tight mb-8">Top {archetypeTitle} Name Ideas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {staticNames.map((n, i) => (
              <div key={n.id} className="pointer-events-none">
                <NameCard nameObj={n} index={i} isShortlisted={false} onToggleShortlist={undefined as unknown as () => void} />
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-card border rounded-xl flex flex-col items-center text-center space-y-4">
            <Link href={`/?vibe=playful`}>
              <Button variant="outline" size="lg">Explore more {archetypeTitle} names</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}