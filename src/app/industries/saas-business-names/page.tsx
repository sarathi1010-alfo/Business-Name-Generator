import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildIndustryMeta } from '@/lib/seo/metaFactories';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';
import { resolveMetadata } from '@/lib/seo/resolveMetadata';

const meta = buildIndustryMeta('saas-business');

export async function generateMetadata(): Promise<Metadata> {
  return resolveMetadata(meta);
}

export default function SaaSBrandIdentityPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a good SaaS brand identity?', answer: 'A good SaaS brand identity combines trustworthiness with innovation, often using crisp typography and blue or purple color palettes.' },
        { question: 'Which archetypes work best for SaaS?', answer: 'The Sage, The Magician, and The Creator are excellent archetypes for SaaS companies.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Brand Identity for SaaS: The Complete 2026 Guide</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              The SaaS market is projected to reach $819B by 2030. Standing out requires a powerful, cohesive brand identity.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Top 5 Brand Archetypes for SaaS</h2>
          <ul>
            <li><strong>The Sage:</strong> Ideal for analytics and data-heavy platforms (focuses on truth and understanding).</li>
            <li><strong>The Magician:</strong> Perfect for AI-driven software that automates complex tasks.</li>
            <li><strong>The Creator:</strong> Best for design, development, and productivity tools.</li>
            <li><strong>The Ruler:</strong> Great for enterprise-grade security and compliance software.</li>
            <li><strong>The Hero:</strong> Works well for tools that help users overcome specific business challenges.</li>
          </ul>

          <h2>Visual Identity</h2>
          <p>
            When building a SaaS brand, your visual identity must signal both competence and ease of use.
          </p>
          <ul>
            <li><strong>Color Palette:</strong> Blues and purples are universally trusted in tech. They signal security, intelligence, and modernism.</li>
            <li><strong>Typography:</strong> Stick to highly legible, geometric sans-serifs like Inter, Geist, or Roboto for the UI. You can use a more distinctive serif for marketing headings.</li>
          </ul>

          <h2>Brand Voice</h2>
          <p>
            Your brand voice should be authoritative, clear, and relentlessly helpful. Avoid excessive jargon unless your software is targeted strictly at senior engineers.
          </p>

          <h2>3 Real-World Examples</h2>
          <ul>
            <li><strong>Stripe:</strong> Masterclass in The Creator archetype mixed with The Sage. Crisp, clean, and developer-focused.</li>
            <li><strong>Slack:</strong> The Everyday Man mixed with The Jester. Approachable, colorful, and fun.</li>
            <li><strong>Vercel:</strong> The Magician. Sleek, fast, and seemingly capable of making the impossible (instant global deployments) look easy.</li>
          </ul>

          <div className="bg-white/5 border border-white/10 p-6 rounded-xl mt-12 mb-12">
            <h3 className="mt-0 text-xl font-bold">Quick Reference: SaaS Branding</h3>
            <table className="w-full text-left">
              <tbody>
                <tr><td className="font-bold py-1">Industry</td><td>SaaS / Software</td></tr>
                <tr><td className="font-bold py-1">Archetype</td><td>The Sage, The Magician, The Creator</td></tr>
                <tr><td className="font-bold py-1">Colors</td><td>Blues, Purples, High-Contrast Black/White</td></tr>
                <tr><td className="font-bold py-1">Voice</td><td>Clear, Authoritative, Helpful</td></tr>
                <tr><td className="font-bold py-1">Examples</td><td>Stripe, Slack, Vercel</td></tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to generate your SaaS identity?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                Open BrandForge Studio
              </Link>
            </div>
            <p className="text-center mt-4 text-sm">
              Read <Link href="/blog/how-to-build-brand-strategy" className="text-indigo-400 hover:underline">The Ultimate Guide to Building a Brand Strategy</Link>, explore <Link href="/identity-directions" className="text-indigo-400 hover:underline">Generated Identity Directions</Link>, or deep dive into <Link href="/archetypes/sage-brand-names" className="text-indigo-400 hover:underline">The Sage archetype</Link>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}