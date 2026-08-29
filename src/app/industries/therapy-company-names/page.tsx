
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Therapy & Mental Health Brand Names',
  description: 'Discover calming, trustworthy names for therapy practices and mental health startups. Learn how to build a brand that prioritizes healing and care.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/therapy-company-names',
  },
};

export default function TherapyCompanyNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'How do you name a therapy practice?', answer: 'A therapy practice name should be calming, professional, and trustworthy. It should evoke a sense of peace, growth, or clarity.' },
        { question: 'What are good words for a mental health brand?', answer: 'Words that suggest healing, guidance, and peace are effective. Examples include Mind, Calm, Peace, Care, Path, and Growth.' },
        { question: 'Should I use my own name for a therapy practice?', answer: 'Using your own name (e.g., Smith Counseling) builds immediate personal trust, but an abstract or evocative name (e.g., Clear Path Therapy) can feel more modern and may be easier to scale.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Therapy Company Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Names that foster trust, healing, and peace of mind.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Designing a Brand for Mental Health</h2>
          <p>
            In the mental health and therapy space, the primary goal of your brand identity is to lower the barrier to entry by creating a sense of safety and trust. A clinical or overly complex name can feel intimidating, while a name that is too playful might lack the necessary professionalism.
          </p>

          <h3>Evoking Calm and Clarity</h3>
          <p>
            The best names in this industry often use soft phonetics and words associated with nature, light, or journeying. Think about the <Link href="/blog/the-psychology-of-brand-names" className="text-indigo-400 hover:underline">psychology of brand names</Link>—soft vowel sounds and gentle consonants (like M, L, and S) can naturally soothe the listener.
          </p>

          <h3>The Role of Color Psychology</h3>
          <p>
            The name is only part of the equation. In therapy branding, <Link href="/blog/what-is-color-psychology" className="text-indigo-400 hover:underline">color psychology</Link> is paramount. Soft blues, muted greens, and warm earth tones can visually reinforce the calm suggested by your brand name.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Find the right path for your brand.</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=therapy" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                Launch BrandForge Studio
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
