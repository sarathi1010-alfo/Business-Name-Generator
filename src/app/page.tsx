"use client";

import { useGenerator } from '@/hooks/useGenerator';
import { useShortlist } from '@/hooks/useShortlist';
import { FilterBar } from '@/components/generator/FilterBar';
import { NameGrid } from '@/components/generator/NameGrid';
import { ShortlistSidebar } from '@/components/generator/ShortlistSidebar';
import { AdSlot } from '@/components/ui/AdSlot';
import { RelatedTools } from '@/components/ui/RelatedTools';
import { PopularTools } from '@/components/ui/PopularTools';
import { Suspense, useMemo } from 'react';

function GeneratorPageContent() {
  const { filters, updateFilter, results, isGenerating, generate } = useGenerator();
  const { shortlist, toggleShortlist, clearShortlist } = useShortlist();

  const shortlistMap = useMemo(() => {
    return shortlist.reduce((acc, curr) => {
      acc[curr.name] = true;
      return acc;
    }, {} as Record<string, boolean>);
  }, [shortlist]);

  return (
    <>
      <main className="flex-1 flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 px-4 bg-gradient-to-b from-background to-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground balance-text">
              Generate brandable business names with filters, vibes, and instant shortlist tools.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              A fast, polished business naming studio that helps founders discover, filter, compare, and shortlist brandable names in seconds.
            </p>
          </div>
        </section>

        {/* AdSlot below hero */}
        <div className="w-full py-8 bg-background flex justify-center border-b">
          <AdSlot variant="leaderboard" />
        </div>

        {/* Generator App with Sidebar Layout */}
        <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-10 items-start">

            {/* Main Content */}
            <div className="flex-1 flex flex-col gap-10 w-full min-w-0">
              <FilterBar
                filters={filters}
                updateFilter={updateFilter}
                onGenerate={generate}
                isGenerating={isGenerating}
              />

              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <h2 className="text-2xl font-bold tracking-tight">Generated Names</h2>
                  <p className="text-sm text-muted-foreground">{results.length} ideas ready</p>
                </div>

                <NameGrid
                  names={results}
                  isGenerating={isGenerating}
                  shortlistMap={shortlistMap}
                  onToggleShortlist={toggleShortlist}
                />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-6">
              <PopularTools />
              <AdSlot variant="rectangle" className="w-full min-h-[250px] bg-muted/20 border rounded-xl" />
            </aside>

          </div>
        </section>
        <FAQAccordion />
      </main>

      <ShortlistSidebar
        shortlist={shortlist}
        onRemove={toggleShortlist}
        onClear={clearShortlist}
      />
    </>
  );
}


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

function FAQAccordion() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 md:px-8 py-16">
      <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Are these business names free to use?</AccordionTrigger>
          <AccordionContent>
            Yes! BrandForge generates ideas using open dictionaries and structural algorithms. However, you should always check local trademark databases to ensure a name isn&apos;t legally protected in your industry before officially registering it.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How does the generation algorithm work?</AccordionTrigger>
          <AccordionContent>
            Our tool uses a hybrid weighted combinational system. It mixes industry-specific roots, emotional/vibe prefixes and suffixes, and applies scoring heuristics to ensure names are highly pronounceable, symmetrical, and domain-friendly.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I check domain availability?</AccordionTrigger>
          <AccordionContent>
            Currently, our tool provides a heuristic &quot;Domain Likely&quot; score indicating the probability that a short .com might be available or acquirable. Full live domain registry integration is coming soon.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Suspense fallback={<div className="h-screen w-full flex items-center justify-center">Loading...</div>}>
        <GeneratorPageContent />
        <RelatedTools />
      </Suspense>
    </>
  );
}
