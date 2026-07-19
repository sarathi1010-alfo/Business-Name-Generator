import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Company Names - Generate Smart Brand Ideas',
  description: 'Generate futuristic, intelligent AI company names. Find the perfect brandable domain for your artificial intelligence startup.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/ai-company-names',
  },
};

export default function AICompanyNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a good AI company name?', answer: 'Good AI company names often sound futuristic, precise, and intelligent. They frequently use suffixes like -ai, -ml, or -gen, or abstract words conveying thought and speed.' },
        { question: 'Do I need a .ai domain?', answer: 'While .ai domains are highly popular and immediately signal your industry, they can be expensive. Many startups launch with .com or .io if the core name is strong enough.' },
        { question: 'Should my AI name sound human or robotic?', answer: 'It depends on your product. Consumer-facing AI assistants often use human-sounding names (like Claude or Alexa) to build trust, while B2B enterprise AI tools lean toward abstract, technical names.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">AI Company Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Intelligent, futuristic, and highly scalable. Name your AI revolution.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Naming in the Age of Intelligence</h2>
          <p>
            The AI landscape is crowded. Slapping "AI" onto the end of a generic word is no longer enough to stand out. The best AI brands are moving toward evocative naming—words that suggest clarity, synthesis, neural networks, or human-machine collaboration.
          </p>

          <h3>Finding the Right Tone</h3>
          <p>
            Consider your archetype. Are you the 'Sage' offering deep analytics, or the 'Magician' offering generative art tools? Your name should reflect the specific value of your intelligence.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to generate AI names?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=ai" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                Open BrandForge Studio
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
