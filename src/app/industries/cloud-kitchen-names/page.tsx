import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cloud Kitchen Names - Generate Brand Ideas',
  description: 'Generate modern, appetizing cloud kitchen and ghost kitchen names. Discover naming trends in the food delivery industry.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/cloud-kitchen-names',
  },
};

export default function CloudkitchenNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a good cloud kitchen name?', answer: 'A good cloud kitchen name should be memorable, easy to pronounce, and communicate your core value proposition clearly.' },
        { question: 'Should a cloud kitchen name be descriptive?', answer: 'Descriptive names can help with immediate recognition, but abstract or evocative names can offer more flexibility as your business grows.' },
        { question: 'How do I choose the right domain for my cloud kitchen?', answer: 'While .com is ideal, many modern brands successfully use alternative extensions like .co, .io, or industry-specific domains if the .com is unavailable.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Cloud Kitchen Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Find the perfect brandable name for your cloud kitchen business.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Naming in the Cloud Kitchen Industry</h2>
          <p>
            Choosing the right name for your cloud kitchen is a critical first step. Your name sets the tone for your brand identity and influences how potential customers perceive your offerings. In a competitive market, a strong, memorable name can be your biggest asset.
          </p>

          <h3>Finding Your Unique Angle</h3>
          <p>
            Consider what makes your cloud kitchen unique. Are you focused on speed, quality, innovation, or tradition? Your brand name should reflect these core values and appeal directly to your target audience.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Ready to generate your own names?</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=cloud-kitchen" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
