import { Metadata } from 'next';
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
import { buildIndustryMeta } from '@/lib/seo/metaFactories';
import { resolveMetadata } from '@/lib/seo/resolveMetadata';

export async function generateMetadata(): Promise<Metadata> {
  const meta = buildIndustryMeta('tech');
  return resolveMetadata({
    ...meta,
    title: 'Tech Business Name Generator | Modern Tech Startup Names',
    description: 'Generate high-growth, modern tech company names. Explore trending tech name ideas, brandable domains, and AI-powered startup naming.',
    canonical: 'https://brandforge.alfo.online/names-for-tech',
  });
}

export default function NamesForTechPage() {
  const meta = buildIndustryMeta('tech');

  const staticNames = generateNames({
    industry: 'tech',
    vibe: 'modern',
    length: 'any',
    style: 'startup',
    isTwoWords: false,
  }, 12);

  return (
    <>
      <JsonLd schema={buildBreadcrumbSchema(meta.breadcrumbs)} />
      <Header />
      <main className="flex-1 flex flex-col items-center bg-[#0a0a0c] text-white">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b border-white/5">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              Tech Business Name Generator
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Find the perfect brandable name for your technology company or digital startup. Get inspired by top ideas or customize in the full generator.
            </p>
            <div className="pt-4">
              <Link href="/?industry=tech">
                <Button size="lg" className="font-bold">Open Full Generator</Button>
              </Link>
            </div>
          </div>
        </section>

        <div className="w-full py-8 flex justify-center border-b border-white/5">
          <AdSlot variant="leaderboard" />
        </div>

        <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16">
          <h2 className="text-2xl font-bold tracking-tight mb-8">Top Tech Name Ideas</h2>
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
            <Link href="/?industry=tech">
              <Button>Try the interactive studio</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
