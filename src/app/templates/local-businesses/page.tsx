import { Metadata } from 'next';
import { RelatedTools } from '@/components/ui/RelatedTools';
import { Button } from '@/components/ui/button';
import { AdSlot } from '@/components/ui/AdSlot';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Local Businesses Naming Templates | BrandForge',
  description: 'Explore naming templates and formulas specifically designed for Local Businesses.',
};

export default function TemplatePage() {
  return (
    <>
      <main className="flex-1 flex flex-col items-center">
        <section className="w-full py-16 px-4 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight">
              Local Businesses Naming Templates
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proven naming formulas and root words perfect for Local Businesses.
            </p>
            <Link href="/">
              <Button>Launch Generator</Button>
            </Link>
          </div>
        </section>
        <div className="w-full py-8 flex justify-center">
          <AdSlot variant="leaderboard" />
        </div>
        <RelatedTools />
      </main>
    </>
  );
}
