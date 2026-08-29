
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildFaqSchema } from '@/lib/seo/buildSchema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Medical Brand Names - Generate Trustworthy Healthcare Ideas',
  description: 'Generate professional, trustworthy medical brand names. Discover naming trends for clinics, health tech, and medical practices.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/industries/medical-brand-names',
  },
};

export default function MedicalBrandNamesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema([
        { question: 'What makes a good medical brand name?', answer: 'A good medical brand name conveys trust, expertise, and care. It should be easy to pronounce and inspire confidence in patients.' },
        { question: 'Should medical names be descriptive or abstract?', answer: 'Descriptive names (e.g., City Cardiology) are clear and traditional, while abstract names (e.g., Novant) are modern and allow for broader service expansion.' },
        { question: 'How important is the domain name for a medical practice?', answer: 'A clear domain name is important for patient access. While .com is ideal, .health or .care are becoming acceptable alternatives.' }
      ])} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Medical Brand Names</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional, trustworthy, and caring. Find the perfect name for your medical practice or health tech startup.
            </p>
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-16 prose prose-slate dark:prose-invert">
          <h2>Naming Your Medical Practice</h2>
          <p>
            In healthcare, trust is paramount. Your brand name is often the first interaction a patient has with your practice. It needs to convey competence, empathy, and stability. Avoid names that are overly trendy or difficult to spell.
          </p>

          <h3>Medical Naming Trends</h3>
          <p>
            While traditional names based on location or founder names remain common, there is a growing trend towards evocative names that focus on wellness, vitality, and advanced care. Words derived from Latin or Greek roots related to health and healing are also popular choices.
          </p>

          <div className="mt-8 p-6 bg-card border rounded-lg not-prose">
            <h3 className="text-xl font-bold mb-2 text-center">Generate Medical Name Ideas</h3>
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
