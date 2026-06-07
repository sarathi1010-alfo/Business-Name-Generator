import { Metadata } from 'next';
import { RelatedTools } from '@/components/ui/RelatedTools';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Restaurant Name Generator | BrandForge',
  description: 'Generate the perfect name for your restaurant. Find unique, brandable ideas instantly.',
  keywords: ["free business name generator","startup name maker","creative brand names"],
};

export default function UseCasePage() {
  return (
    <>
      <main className="flex-1 flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-gradient-to-b from-background to-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              Restaurant Name Generator
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Looking for a unique, catchy name for your restaurant? Use our AI-powered generator to find the perfect fit in seconds.
            </p>
            <div className="pt-4">
              <Link href="/">
                <Button size="lg" className="font-bold">Open Full Generator</Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 md:px-8 py-16 prose prose-slate dark:prose-invert">
          <h2>How to choose a name for your restaurant</h2>
          <p>
            The best restaurant names are memorable, easy to spell, and evoke the right feeling.
            Avoid long, complicated words. Our tool helps you filter by vibe and industry to match your brand&apos;s core identity.
          </p>
        </section>

        <RelatedTools />
      </main>
    </>
  );
}
