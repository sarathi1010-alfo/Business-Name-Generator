import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildArchetypeMeta } from '@/lib/seo/metaFactories';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';
import { resolveMetadata } from '@/lib/seo/resolveMetadata';

const meta = buildArchetypeMeta('caregiver');

export async function generateMetadata(): Promise<Metadata> {
  return resolveMetadata(meta);
}

export default function CaregiverArchetypePage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What is the Caregiver brand archetype?', answer: 'The Caregiver archetype is driven by the desire to protect, nurture, and care for others.' },
        { question: 'What are examples of Caregiver brands?', answer: 'Johnson & Johnson, Volvo, and UNICEF.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">The Caregiver Brand Archetype: Complete Guide for 2026</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Master the psychology of the Caregiver to build a brand that radiates safety, support, and profound empathy.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>What is the Caregiver Archetype?</h2>
          <p>
            The Caregiver is motivated by a deep, inherent desire to protect and care for others. Brands adopting this archetype position themselves as safety nets, offering reassurance, service, and unwavering support in a chaotic world.
          </p>

          <h2>Core Characteristics</h2>
          <ul>
            <li><strong>Nurturing:</strong> Deeply invested in the well-being of the customer.</li>
            <li><strong>Altruistic:</strong> Puts the needs of others before their own.</li>
            <li><strong>Protective:</strong> Offers safety and security.</li>
            <li><strong>Compassionate:</strong> Leads with empathy and understanding.</li>
          </ul>

          <h2>Famous Caregiver Brands</h2>
          <p>
            <strong>Johnson & Johnson:</strong> The quintessential Caregiver, famous for products that care for babies and families.
          </p>
          <p>
            <strong>Volvo:</strong> While an automotive brand, Volvo&apos;s entire positioning is built around protecting the family inside the car.
          </p>
          <p>
            <strong>UNICEF:</strong> An organization dedicated entirely to protecting and caring for children worldwide.
          </p>

          <h2>Visual Identity for Caregivers</h2>
          <p>
            Caregiver brands should avoid sharp, aggressive angles.
          </p>
          <ul>
            <li><strong>Colors:</strong> Soft pastels, warm yellows, calming blues, and natural greens. Avoid harsh reds or neon colors.</li>
            <li><strong>Typography:</strong> Rounded sans-serifs or soft, elegant serifs that feel welcoming and legible.</li>
            <li><strong>Imagery:</strong> Focus on human connection, families, safety, and warmth.</li>
          </ul>

          <h2>Brand Voice</h2>
          <p>
            Your tone must be supportive, empathetic, and encouraging. Never speak down to the audience; instead, sound like a supportive parent or a trusted friend offering a helping hand.
          </p>

          <div className="bg-white/5 border border-white/10 p-6 rounded-xl mt-12 mb-12">
            <h3 className="mt-0 text-xl font-bold">Quick Reference: The Caregiver</h3>
            <table className="w-full text-left">
              <tbody>
                <tr><td className="font-bold py-1">Archetype</td><td>The Caregiver</td></tr>
                <tr><td className="font-bold py-1">Traits</td><td>Nurturing, Altruistic, Protective, Compassionate</td></tr>
                <tr><td className="font-bold py-1">Colors</td><td>Pastels, Soft Blues, Greens</td></tr>
                <tr><td className="font-bold py-1">Fonts</td><td>Rounded Sans-Serifs, Soft Serifs</td></tr>
                <tr><td className="font-bold py-1">Examples</td><td>Johnson & Johnson, Volvo, UNICEF</td></tr>
              </tbody>
            </table>
          </div>

          <h2>How to Build Your Caregiver Brand</h2>
          <p>
            You can generate a complete Caregiver Brand DNA using the BrandForge studio. By selecting industries like healthcare or wellness and aiming for trustworthy vibes, the AI will align your generated brand with these core principles.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to generate your identity?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                Open BrandForge Studio
              </Link>
            </div>
            <p className="text-center mt-4 text-sm">
              Read <Link href="/blog/how-to-build-brand-strategy" className="text-indigo-400 hover:underline">The Ultimate Guide to Building a Brand Strategy</Link>, explore <Link href="/identity-directions" className="text-indigo-400 hover:underline">Generated Identity Directions</Link>, or check out our <Link href="/industries/health-wellness-names" className="text-indigo-400 hover:underline">Health & Wellness branding guide</Link>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}