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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

function HowItWorksSection() {
  const steps = [
    {
      num: '01',
      title: 'Enter Seed Keywords',
      desc: 'Type your core concept, industry niche, or target audience keywords into the input field to initialize suggestions.',
    },
    {
      num: '02',
      title: 'Select Naming Style',
      desc: 'Filter by modern, compound, blend, invented, or classic linguistic structures to fit your brand identity.',
    },
    {
      num: '03',
      title: 'Filter & Shortlist',
      desc: 'Narrow down names by syllable length, rhyme schemes, and save your favorite candidates to the interactive shortlist.',
    },
    {
      num: '04',
      title: 'Check Domain Availability',
      desc: 'Instantly verify .com domain availability and export your tailored brand identity assets.',
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 md:px-8 py-16 border-t border-white/5">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
          How It Works
        </h2>
        <p className="text-white/60 text-base md:text-lg">
          Follow four simple steps to discover, filter, and secure your next company name.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => (
          <div
            key={step.num}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col justify-between"
          >
            <div>
              <span className="text-3xl font-extrabold text-indigo-400 mb-3 block">{step.num}</span>
              <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQAccordion() {
  const faqs = [
    {
      q: 'What makes a business name catchy and brandable?',
      a: 'A catchy, brandable business name is memorable, pronounceable, evocative, and easy to spell. BrandForge pairs cognitive fluency heuristics with linguistic styling to craft names that capture consumer attention.',
    },
    {
      q: 'Can I filter business names by industry or naming style?',
      a: 'Yes. BrandForge allows you to filter generated names across diverse industries including tech, SaaS, eCommerce, health, and finance, as well as naming styles such as compound words, blends, and real words.',
    },
    {
      q: 'How do I check if the matching domain name is available?',
      a: 'Every generated business name in BrandForge provides instant domain verification checks for top-level domains including .com, .io, and .ai with direct registration links.',
    },
    {
      q: 'Is this business name generator completely free to use?',
      a: 'Yes. BrandForge provides unlimited free business name generation with full access to industry filters, style presets, shortlist saving, and brand DNA exports with no credit card required.',
    },
    {
      q: 'How does the brand DNA mapping work?',
      a: 'Our core engine uses curated heuristics mapped to psychological archetypes (The Creator, The Innovator, The Ruler, etc.) to orchestrate complementary typography pairings, color palettes, and tone of voice alongside each name.',
    },
  ];

  return (
    <section className="w-full max-w-4xl mx-auto px-4 md:px-8 py-20 border-t border-white/5">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-center text-white">
        Frequently Asked Questions
      </h2>
      <div className="glass-panel rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-b border-white/10 last:border-b-0 px-4 py-2">
              <AccordionTrigger className="text-white hover:text-indigo-300 transition-colors text-left font-medium min-h-[44px]">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-white/60 text-base leading-relaxed pt-2 pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

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
      <main id="main-content" className="flex-1 flex flex-col items-center bg-[#0a0a0c] text-white selection:bg-indigo-500/30 w-full overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-28 px-4 overflow-hidden border-b border-white/5">
          {/* Cinematic Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#0a0a0c] to-[#0a0a0c] pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-electric-violet/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="container relative z-10 max-w-5xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-indigo-300 mb-2 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-indigo-500" />
              Founder Brand Operating System
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70 balance-text">
              Generate Catchy Brandable Business Names in Seconds
            </h1>
            <p className="text-base md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
              Launch your venture with memorable, brandable business names generated in seconds. BrandForge combines linguistic naming heuristics with industry-specific algorithms to deliver catchy, modern, and memorable names for startups, eCommerce stores, and tech apps. Filter by syllable count, naming style, and instantly verify .com domain availability.
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

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* FAQ Accordion Section */}
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

export default function Home() {
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'BrandForge Free Business Name Generator',
      url: 'http://brandforge.alfo.online/',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      description:
        'Generate catchy, brandable business name ideas in seconds. Free AI company name generator with industry filters, style presets, and domain checks.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What makes a business name catchy and brandable?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A catchy, brandable business name is memorable, pronounceable, evocative, and easy to spell. BrandForge pairs cognitive fluency heuristics with linguistic styling to craft names that capture consumer attention.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I filter business names by industry or naming style?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. BrandForge allows you to filter generated names across diverse industries including tech, SaaS, eCommerce, health, and finance, as well as naming styles such as compound words, blends, and real words.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I check if the matching domain name is available?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Every generated business name in BrandForge provides instant domain verification checks for top-level domains including .com, .io, and .ai with direct registration links.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this business name generator completely free to use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. BrandForge provides unlimited free business name generation with full access to industry filters, style presets, shortlist saving, and brand DNA exports with no credit card required.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does the brand DNA mapping work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our core engine uses curated heuristics mapped to psychological archetypes (The Creator, The Innovator, The Ruler, etc.) to orchestrate complementary typography pairings, color palettes, and tone of voice alongside each name.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to Generate Business Names with BrandForge',
      description: 'Four simple steps to generate catchy brandable business names and verify domain availability.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Enter Seed Keywords',
          text: 'Type your core concept, industry niche, or target audience keywords into the input field to initialize suggestions.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Select Naming Style',
          text: 'Filter by modern, compound, blend, invented, or classic linguistic structures to fit your brand identity.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Filter & Shortlist',
          text: 'Narrow down names by syllable length, rhyme schemes, and save your favorite candidates to the interactive shortlist.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Check Domain Availability',
          text: 'Instantly verify .com domain availability and export your tailored brand identity assets.',
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'http://brandforge.alfo.online/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Business Name Generator',
          item: 'http://brandforge.alfo.online/',
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <Header />
      <Suspense fallback={<div className="h-screen w-full flex items-center justify-center">Loading...</div>}>
        <GeneratorPageContent />
      </Suspense>
      <Footer />
    </>
  );
}
