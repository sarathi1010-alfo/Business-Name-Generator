import { Metadata } from 'next';
import { RelatedTools } from '@/components/ui/RelatedTools';
import { AdSlot } from '@/components/ui/AdSlot';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Choose a Startup Name in 2025 | BrandForge Blog',
  description: 'Choosing a startup name is one of the most important early decisions a founder will make. It needs to be memorable, easy to spell, and ideally have an...',
};

export default function BlogPostPage() {
  return (
    <>
      <main className="flex-1 flex flex-col items-center py-16">
        <article className="w-full max-w-3xl mx-auto px-4 md:px-8 prose prose-slate dark:prose-invert">
          <h1>How to Choose a Startup Name in 2025</h1>
          <p dangerouslySetInnerHTML={{ __html: 'Choosing a startup name is one of the most important early decisions a founder will make. It needs to be memorable, easy to spell, and ideally have an available .com domain. Start by brainstorming core concepts related to your business, then use a tool like BrandForge to generate combinations and check availability.' }}></p>
          <div className="my-8">
            <AdSlot variant="rectangle" />
          </div>
          <p>Ready to start naming? <Link href="/">Try BrandForge today.</Link></p>
        </article>
        <div className="w-full mt-12 border-t">
          <RelatedTools />
        </div>
      </main>
    </>
  );
}
