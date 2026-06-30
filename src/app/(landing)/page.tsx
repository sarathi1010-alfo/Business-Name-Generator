"use client";

import { useGenerator } from '@/hooks/useGenerator';
import { useShortlist } from '@/hooks/useShortlist';
import { FilterBar } from '@/components/generator/FilterBar';
import { NameGrid } from '@/components/generator/NameGrid';
import { ShortlistSidebar } from '@/components/generator/ShortlistSidebar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AdSlot } from '@/components/ui/AdSlot';
import { Suspense, useMemo } from 'react';
import { JsonLd } from '@/components/JsonLd';
import { buildWebsiteSchema, buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

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
      <main className="flex-1 flex flex-col items-center bg-[#0a0a0c] text-white selection:bg-indigo-500/30">
        {/* Hero Section */}
        <section className="relative w-full py-24 md:py-32 px-4 overflow-hidden border-b border-white/5">
          {/* Cinematic Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#0a0a0c] to-[#0a0a0c] pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-electric-violet/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="container relative z-10 max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-indigo-300 mb-4 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-indigo-500" />
              Founder Brand Operating System
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50 balance-text">
              Launch an elite brand identity in seconds.
            </h1>
            <p className="text-lg md:text-2xl text-white/60 max-w-3xl mx-auto font-light tracking-wide">
              Stop struggling with logos and hex codes. Generate your complete brand DNA—archetype, typography, palette, and voice—engineered for perception and trust.
            </p>
          </div>
        </section>

        {/* AdSlot below hero */}
        <div className="w-full py-8 bg-[#0a0a0c] flex justify-center border-b border-white/5">
          <AdSlot variant="leaderboard" />
        </div>

        {/* Generator App */}
        <section className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col gap-10">
          <div className="glass-panel p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
            <FilterBar
              filters={filters}
              updateFilter={updateFilter}
              onGenerate={generate}
              isGenerating={isGenerating}
            />
          </div>

          <div id="identity-directions" className="space-y-6 scroll-mt-24">
            <div className="flex justify-between items-end border-b border-white/10 pb-4">
              <h2 className="text-3xl font-bold tracking-tight text-white">Generated Identity Directions</h2>
              <p className="text-sm font-medium text-indigo-400">{results.length} concepts ready</p>
            </div>

            <NameGrid
              names={results}
              isGenerating={isGenerating}
              shortlistMap={shortlistMap}
              onToggleShortlist={toggleShortlist}
            />
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
    <section className="w-full max-w-4xl mx-auto px-4 md:px-8 py-24">
      <h2 className="text-4xl font-bold tracking-tight mb-12 text-center text-white">Frequently Asked Questions</h2>
      <div className="glass-panel rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-md">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-b border-white/10 px-6 py-2">
            <AccordionTrigger className="text-white hover:text-indigo-300 transition-colors">Is this just a logo generator?</AccordionTrigger>
            <AccordionContent className="text-white/60 text-base leading-relaxed pt-2 pb-6">
              No. BrandForge is a complete Founder Brand Operating System. We generate your entire identity—emotional archetype, custom typography pairings, premium color palettes, brand voice, and a holistic strategy. A logo is just one tiny piece of the puzzle.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-b border-white/10 px-6 py-2">
            <AccordionTrigger className="text-white hover:text-indigo-300 transition-colors">How does the brand DNA mapping work?</AccordionTrigger>
            <AccordionContent className="text-white/60 text-base leading-relaxed pt-2 pb-6">
              Our core engine uses curated heuristics mapped to psychological archetypes (The Creator, The Innovator, The Luxury, etc.). Based on your industry and vibe, it orchestrates an identity that naturally builds trust and aligns with market expectations without relying on external APIs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-b border-white/10 px-6 py-2">
            <AccordionTrigger className="text-white hover:text-indigo-300 transition-colors">Can I preview my brand in real-time?</AccordionTrigger>
            <AccordionContent className="text-white/60 text-base leading-relaxed pt-2 pb-6">
              Yes. Visualizing the output is essential to belief. We generate live, real-time mockups across landing pages, social profiles, and business cards so you can see exactly how your brand will perform in the wild.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border-b-0 px-6 py-2">
            <AccordionTrigger className="text-white hover:text-indigo-300 transition-colors">How do I choose a brand name that stands out?</AccordionTrigger>
            <AccordionContent className="text-white/60 text-base leading-relaxed pt-2 pb-6">
              Choosing a standout brand name involves brainstorming across different naming strategies, evaluating for memorability and pronounceability, and ensuring domain and trademark availability. For a deep dive into the process, check out our comprehensive guide on <Link href="/blog/choose-standout-brand-name" className="text-indigo-400 hover:underline">how to choose a brand name that stands out</Link>.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <JsonLd schema={buildWebsiteSchema()} />
      <JsonLd schema={buildFaqSchema([
        { question: "Is this just a logo generator?", answer: "No. BrandForge is a complete Founder Brand Operating System. We generate your entire identity—emotional archetype, custom typography pairings, premium color palettes, brand voice, and a holistic strategy. A logo is just one tiny piece of the puzzle." },
        { question: "How does the brand DNA mapping work?", answer: "Our core engine uses curated heuristics mapped to psychological archetypes (The Creator, The Innovator, The Luxury, etc.). Based on your industry and vibe, it orchestrates an identity that naturally builds trust and aligns with market expectations without relying on external APIs." },
        { question: "Can I preview my brand in real-time?", answer: "Yes. Visualizing the output is essential to belief. We generate live, real-time mockups across landing pages, social profiles, and business cards so you can see exactly how your brand will perform in the wild." },
        { question: "How do I choose a brand name that stands out?", answer: "Choosing a standout brand name involves brainstorming across different naming strategies, evaluating for memorability and pronounceability, and ensuring domain and trademark availability. For a deep dive into the process, check out our comprehensive guide on how to choose a brand name that stands out." }
      ])} />
      <Header />
      <Suspense fallback={<div className="h-screen w-full flex items-center justify-center">Loading...</div>}>
        <GeneratorPageContent />
      </Suspense>
      <Footer />
    </>
  );
}
