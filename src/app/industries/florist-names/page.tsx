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
import { buildIndustryMeta } from '@/lib/seo/metaFactories';
import { resolveMetadata } from '@/lib/seo/resolveMetadata';

const industry = 'florist';

export async function generateMetadata(): Promise<Metadata> {
  const meta = buildIndustryMeta(industry);
  return resolveMetadata(meta);
}

const faqs = [
  { question: "How to choose a florist brand name?", answer: "Look for words that evoke growth, beauty, nature, or elegance. Combining botanical terms with words of emotion or artistry often works well." },
  { question: "Are descriptive names good for florists?", answer: "Yes, names like 'The Daily Bloom' clearly state what you do, though more evocative names can help you stand out for premium event styling." }
];

export default function FloristNamesPage() {
  const staticNames = generateNames({ industry, vibe: 'elegant', length: 'short', style: 'brandable', isTwoWords: true }, 12);
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
              Florist Brand Names – Fresh, Elegant, and Natural
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Find the perfect name for your flower shop, botanical studio, or event floral design business.
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
          <h2 className="text-2xl font-bold tracking-tight mb-8">Top Florist Name Ideas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {staticNames.map((n, i) => (
              <div key={n.id} className="pointer-events-none">
                <NameCard nameObj={n} index={i} isShortlisted={false} onToggleShortlist={undefined as unknown as () => void} />
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-card border rounded-xl flex flex-col items-center text-center space-y-4">
            <Link href={`/?industry=${industry}`}>
              <Button variant="outline" size="lg">Explore more Florist names</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
