import { Metadata } from 'next';
import { RelatedTools } from '@/components/ui/RelatedTools';
import { Button } from '@/components/ui/button';
import { AdSlot } from '@/components/ui/AdSlot';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'BrandForge vs Looka | Best Brand Name Generator',
  description: 'Comparing BrandForge to Looka. Discover why founders prefer BrandForge for generating fast, unique, and brandable business names.',
};

export default function ComparisonPage() {
  return (
    <>
      <main className="flex-1 flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              BrandForge vs Looka
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Looking for an alternative to Looka? See why modern founders and creators use BrandForge to name their next big thing.
            </p>
            <div className="pt-4">
              <Link href="/">
                <Button size="lg" className="font-bold">Try BrandForge for Free</Button>
              </Link>
            </div>
          </div>
        </section>

        <div className="w-full py-8 flex justify-center border-b">
          <AdSlot variant="leaderboard" />
        </div>

        <section className="w-full max-w-4xl mx-auto px-4 md:px-8 py-16 prose prose-slate dark:prose-invert">
          <h2>Why Choose BrandForge over Looka?</h2>
          <p>
            While Looka is a well-known tool, BrandForge is built specifically for modern internet startups. We focus on highly pronounceable, aesthetic names that fit today&apos;s design trends.
          </p>
          <ul>
            <li><strong>No paywalls:</strong> Generate unlimited ideas for free.</li>
            <li><strong>Vibe-based generation:</strong> Filter by aesthetic (e.g., tech, luxury, playful).</li>
            <li><strong>Clean UI:</strong> No cluttered ads or confusing menus.</li>
          </ul>
        </section>

        <div className="w-full py-8 flex justify-center">
          <AdSlot variant="rectangle" />
        </div>

        <RelatedTools />
      </main>
    </>
  );
}
