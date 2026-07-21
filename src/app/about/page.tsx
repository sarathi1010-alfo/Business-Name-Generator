import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Sparkles } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About BrandForge - The Founder Brand Operating System',
  description: 'Learn about our mission to democratize elite brand identity and the Alfo ecosystem of design utilities.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white">
        <section className="relative w-full py-24 md:py-32 px-4 overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#0a0a0c] to-[#0a0a0c] pointer-events-none" />
          <div className="container relative z-10 max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white to-white/50">
              Our Mission
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed">
              BrandForge was built with a single objective: to give founders the strategic edge of a high-end branding agency without the six-figure price tag.
            </p>
          </div>
        </section>

        <section className="container max-w-3xl mx-auto px-4 py-16 md:py-24 prose prose-lg dark:prose-invert">
          <p>
            The traditional branding process is broken for startups. It is often too slow, prohibitively expensive, or frustratingly generic. Founders find themselves caught between paying exorbitant agency fees or settling for cookie-cutter logo generators that fail to capture the true essence of their vision. We believe that an elite brand identity—one that communicates trust, authority, and innovation—should be accessible to everyone with a great idea.
          </p>
          <p>
            This belief led to the creation of <strong>BrandForge</strong>. BrandForge isn&apos;t just a logo maker; it&apos;s a comprehensive <em>Founder Brand Operating System</em>. By answering a few simple questions, founders can instantly generate a cohesive Brand DNA—complete with psychological archetypes, premium typography pairings, and engineered color palettes. Instead of starting from a blank canvas, you start from a foundation of proven design principles.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Part of the Alfo Ecosystem</h2>
          <p>
            BrandForge is a proud member of the <strong>Alfo Ecosystem</strong>, a suite of ultra-fast, interconnected design utilities built specifically for modern creators and entrepreneurs. The Alfo philosophy is simple: tools should be fast, intelligent, and focused on output.
          </p>
          <p>
            Whether you are using our color generator <em>PaletteFlow</em>, our typography matcher <em>FontFusion</em>, or testing your new identity in real-world scenarios with <em>MockBrand</em>, the entire ecosystem is designed to orchestrate identities that don&apos;t just look good in a vacuum, but perform effectively in the chaotic real world.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Why We Built This</h2>
          <p>
            We built BrandForge because we saw too many brilliant products fail to gain traction simply because their visual identity didn&apos;t reflect the quality of their engineering. In a digital landscape dominated by noise and endless competition, a strong, resonant brand is your ultimate differentiator. We use curated heuristics and psychological mapping to ensure that every brand direction generated through our studio feels human, intentional, and deeply connected to your target audience.
          </p>
          <p>
            Ready to build a brand that stands out? Start exploring our <Link href="/blog" className="text-indigo-400 hover:text-indigo-300">guides and archetypes</Link> (like our <Link href="/blog/what-is-a-brand-story" className="text-indigo-400 hover:text-indigo-300">guide to brand stories</Link>) or dive straight into the <Link href="/" className="text-indigo-400 hover:text-indigo-300">generator</Link>.
          </p>

          <div className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 mt-12">
            <div className="p-3 bg-indigo-500/20 rounded-full">
              <Sparkles className="h-6 w-6 text-indigo-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-white/40 uppercase tracking-widest">Built by Alfo</p>
              <p className="text-lg text-white font-semibold">Precision-engineered for founders.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
