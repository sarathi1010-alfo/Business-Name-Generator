/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Robotics Company Names - Generate Futuristic Brand Ideas',
  description: 'Generate advanced, mechanical robotics company names. Find the perfect brandable domain for your automation startup.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/robotics-company-names',
  },
};

export default function RoboticsCompanyNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a good robotics company name?', answer: 'Good robotics company names sound futuristic, precise, and dynamic. They frequently use words related to automation, mechanisms, systems, and intelligence.' },
        { question: 'Should my robotics name sound human or mechanical?', answer: 'It depends on your product. Consumer-facing robotics (like home assistants) benefit from friendly, human-sounding names, while industrial robotics lean toward strong, technical names.' },
        { question: 'What suffixes are common for robotics?', answer: 'Common suffixes include -tech, -bot, -mech, -tron, and -sys.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Robotics Company Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Precise, automated, and futuristic. Name your robotics startup.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Naming the Future of Automation</h2>
          <p>
            The robotics industry blends hardware with advanced software. A strong brand name in this space needs to sound cutting-edge while inspiring confidence in reliability and safety.
          </p>

          <h3>Finding the Right Tone</h3>
          <p>
            Consider your archetype. Are you the 'Magician' bringing science fiction to life, or the 'Hero' building robust machines for hazardous environments?
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to generate robotics names?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=robotics" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
