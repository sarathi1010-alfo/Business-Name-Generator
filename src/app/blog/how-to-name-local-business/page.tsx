import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/JsonLd';
import { buildArticleSchema, buildBreadcrumbSchema, buildFaqSchema } from '@/lib/seo/buildSchema';
import { buildArticleMeta } from '@/lib/seo/metaFactories';
import Link from 'next/link';
import { resolveMetadata } from '@/lib/seo/resolveMetadata';

const meta = buildArticleMeta(
  "How to Name a Local Business That Dominates Your City",
  "A complete guide for local founders on choosing a business name that ranks in local SEO, attracts foot traffic, and builds community trust.",
  "/blog/how-to-name-local-business",
  { updatedAt: new Date().toISOString(), publishedAt: new Date().toISOString() }
);

export async function generateMetadata(): Promise<Metadata> {
  return resolveMetadata(meta);
}

const faqs = [
  { question: "Should I use my city name in my business name?", answer: "Using your city name can significantly boost local SEO and immediately communicate your service area to customers, though it can limit future expansion." },
  { question: "Is it better to use my own name for a local business?", answer: "Using a founder's name builds instant personal trust and implies craftsmanship, but can make the business harder to sell later." },
  { question: "How long should a local business name be?", answer: "Aim for 2-3 words. It needs to be short enough to fit on a storefront sign and easy to say when answering the phone." }
];

export default function ArticlePage() {
  return (
    <>
      <JsonLd schema={buildBreadcrumbSchema(meta.breadcrumbs)} />
      <JsonLd schema={buildArticleSchema(meta)} />
      <JsonLd schema={buildFaqSchema(faqs)} />
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white">
        <article className="max-w-3xl mx-auto px-4 py-16 md:py-24 prose prose-lg dark:prose-invert">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">
            How to Name a Local Business That Dominates Your City
          </h1>

          <p className="text-lg font-medium border-l-4 border-indigo-500 pl-4 py-1 bg-muted/30">
            A strong local business name does three things: it tells people what you do, builds trust within the community, and makes it easy for locals to find you online.
          </p>

          <h2>How to Name a Local Business?</h2>
          <p className="text-xl font-bold bg-indigo-900/30 p-4 rounded-lg my-6">
            To name a local business effectively, decide if you want to emphasize your location, your personal name, or the specific service you provide. Ensure the name is easy to spell, pronounce over the phone, and has an available domain name.
          </p>

          <h2>The Three Pillars of Local Naming</h2>
          <h3>1. Location-Based Names</h3>
          <p>
            Names like &quot;Brooklyn Roasters&quot; or &quot;Austin HVAC&quot; are incredibly powerful for local search engine optimization (SEO). When a customer types &quot;HVAC near me&quot; in Austin, having the city in the name gives you a massive advantage. However, this strategy can backfire if you plan to expand to other cities or states.
          </p>

          <h3>2. Founder-Based Names</h3>
          <p>
            &quot;Bob&apos;s Plumbing&quot; or &quot;Smith &amp; Sons Legal&quot;. Using a personal name implies a guarantee of quality. It tells the community that a real person is staking their reputation on the work.
          </p>

          <h3>3. Descriptive Names</h3>
          <p>
            &quot;The Speedy Movers&quot; or &quot;Fresh Cut Barbershop&quot;. These names prioritize clarity above all else. In a fast-paced environment where someone is driving past your storefront, they need to know exactly what you do in less than two seconds.
          </p>

          <h2>Testing Your Name</h2>
          <p>
            Before committing to a name, apply the &quot;Phone Test&quot;. Say it out loud as if you are answering the business phone: &quot;Hello, [Your Business Name], how can I help you?&quot; Is it a mouthful? Is it confusing?
          </p>
          <p>
            Next, check the &quot;Radio Test&quot;. If someone hears the name on a local radio ad, will they know how to spell it to look it up later? Avoid creative misspellings for local service businesses.
          </p>

          <div className="bg-white/5 border border-white/10 p-6 rounded-xl mt-12 mb-12">
            <h3 className="mt-0 text-xl font-bold">Key Takeaways</h3>
            <ul className="mb-0">
              <li><strong>Clarity beats cleverness:</strong> Don&apos;t make local customers guess what you do.</li>
              <li><strong>Consider local SEO:</strong> Location keywords help you rank on Google Maps.</li>
              <li><strong>Pass the radio test:</strong> Ensure it is easy to spell when heard spoken aloud.</li>
            </ul>
          </div>

          <h2>Finding the Perfect Name Faster</h2>
          <p>
            Naming a local business shouldn&apos;t take weeks. Use the <Link href="/" className="text-indigo-400 hover:underline">BrandForge Generator Studio</Link> to instantly generate ideas tailored to your specific industry, whether it is a cafe, barbershop, or moving company. Once you have a name, you can explore <Link href="/identity-directions" className="text-indigo-400 hover:underline">Generated Identity Directions</Link> to build out your full local brand presence.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
