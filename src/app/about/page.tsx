import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Sparkles } from 'lucide-react';

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
            The traditional branding process is broken for startups. It&apos;s either too slow, too expensive, or too generic. We believe that an elite brand identity—one that communicates trust, authority, and innovation—should be accessible to everyone with a great idea.
          </p>
          <p>
            BrandForge is part of the <strong>Alfo Ecosystem</strong>, a suite of ultra-fast design utilities including PaletteFlow, FontFusion, and MockBrand. We use curated heuristics and psychological mapping to orchestrate identities that don&apos;t just look good, but perform in the real world.
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
