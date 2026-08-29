
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nutrition Brand Names - Generate Healthy Ideas',
  description: 'Generate fresh, healthy nutrition brand names. Discover naming strategies for supplements, diet plans, and wellness foods.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/nutrition-brand-names',
  },
};

export default function NutritionBrandNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a good nutrition brand name?', answer: 'A good nutrition brand name sounds natural, energetic, and clean. It should appeal to consumers looking for health and vitality.' },
        { question: 'What words are common in nutrition naming?', answer: 'Words like Vital, Pure, Core, Nutri, Bio, and Green are frequently used to communicate health and natural ingredients.' },
        { question: 'Should a nutrition name focus on the ingredients?', answer: 'It can, but focusing on the benefit (e.g., energy, balance, longevity) is often more powerful and allows for product line expansion.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Nutrition Brand Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Fresh, energetic, and healthy. Find a name that fuels your brand.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Naming Your Nutrition Brand</h2>
          <p>
            In the nutrition and wellness space, your brand name needs to communicate purity and effectiveness. Consumers are looking for products they can trust to improve their health. A strong name will instantly convey a sense of vitality and balance.
          </p>

          <h3>Nutrition Naming Trends</h3>
          <p>
            Modern nutrition brands are moving away from clinical-sounding names towards more lifestyle-oriented, evocative names. Clean, minimalist names that suggest natural ingredients and holistic well-being are highly effective.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Generate Nutrition Name Ideas</h3>
            <div className="flex justify-center mt-4">
              <Link href="/?industry=health" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
