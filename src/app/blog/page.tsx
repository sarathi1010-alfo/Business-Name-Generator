import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'BrandForge Blog - Insights for Founders and Brand Builders',
  description: 'Deep dives into brand identity, archetypes, strategy, and naming. Build a brand that stands out.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/blog',
  },
};

const categories = [
  "Fundamentals",
  "Archetypes",
  "Industry Guides",
  "Comparisons",
  "Visual Identity"
];

const posts = [
  {
    title: "How to Build a Powerful Brand Strategy",
    description: "A step-by-step blueprint to build a scalable brand strategy from scratch. Master positioning, visual identity, and brand voice.",
    slug: "how-to-build-brand-strategy",
    date: "Jul 2026",
    category: "Fundamentals"
  },
  {
    title: "The Ultimate Guide to Brand Identity in 2026",
    description: "Your complete blueprint for building a cohesive, powerful brand identity that builds trust and drives growth in 2026.",
    slug: "ultimate-guide-to-brand-identity",
    date: "Jul 2026",
    category: "Fundamentals"
  },
  {
    title: "What is Brand Identity?",
    description: "Discover what brand identity truly is and why it's the foundation of business success.",
    slug: "what-is-brand-identity",
    date: "Jul 2026",
    category: "Fundamentals"
  },
  {
    title: "What is a Brand Archetype?",
    description: "A quick guide to understanding brand archetypes and how they shape your brand's personality and voice.",
    slug: "what-is-a-brand-archetype",
    date: "Jul 2026",
    category: "Archetypes"
  },
  {
    title: "Why is Branding Important?",
    description: "Learn why investing in branding early gives founders a significant strategic advantage.",
    slug: "why-is-branding-important",
    date: "Jul 2026",
    category: "Fundamentals"
  },
  {
    title: "What is Brand Positioning?",
    description: "Understand how to carve out a unique space in your customers' minds to differentiate from competitors.",
    slug: "what-is-brand-positioning",
    date: "Jul 2026",
    category: "Fundamentals"
  },
  {
    title: "What is Brand Voice?",
    description: "Learn the core elements of brand voice and how to communicate consistently across all channels.",
    slug: "what-is-brand-voice",
    date: "Jul 2026",
    category: "Fundamentals"
  },
  {
    title: "How to Choose a Brand Name That Stands Out",
    description: "Learn how to choose a memorable, unique brand name. Explore naming strategies and check domain availability.",
    slug: "choose-standout-brand-name",
    date: "Feb 2026",
    category: "Naming"
  },
  {
    title: "The Ultimate Guide to Brand Archetypes",
    description: "Learn how to use the 12 psychological brand archetypes to build a powerful, human-centric brand.",
    slug: "ultimate-guide-to-brand-archetypes",
    date: "Feb 2026",
    category: "Archetypes"
  },
  {
    title: "Brand Identity vs. Brand Image",
    description: "Understanding the crucial difference between who you are and how people see you.",
    slug: "brand-identity-vs-brand-image",
    date: "Feb 2026",
    category: "Comparisons"
  },
  {
    title: "How to Define Your Brand Voice",
    description: "Master the art of brand linguistics. Learn how to define a brand voice that resonates.",
    slug: "how-to-define-your-brand-voice",
    date: "Feb 2026",
    category: "Visual Identity"
  }
];

export default function BlogIndexPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[#0a0a0c] text-white">
        <section className="w-full py-16 md:py-24 px-4 border-b border-white/5">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white to-white/50">
              BrandForge Blog – Brand Identity Guides, Archetypes & Strategy
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Welcome to the BrandForge Blog. This is your ultimate resource for navigating the complex world of brand identity in 2026. Whether you are a solo founder bootstrapping a new idea or a seasoned entrepreneur looking to rebrand, our deep dives will give you the strategic edge. We cover everything from the psychological power of brand archetypes and the intricate mechanics of visual identity, to programmatic comparisons of top branding tools and industry-specific guides. By blending timeless design heuristics with modern market trends, we aim to demystify branding, equipping you with actionable insights that transform abstract concepts into a cohesive, high-converting Founder Brand Operating System.
            </p>
          </div>
        </section>

        <section className="container max-w-6xl mx-auto px-4 py-8 border-b border-white/5">
          <div className="flex flex-wrap justify-center gap-4">
             {categories.map((cat) => (
                <Badge key={cat} variant="outline" className="text-white/70 border-white/20 hover:bg-white/10 px-4 py-2 text-sm cursor-pointer transition-colors">
                  {cat}
                </Badge>
             ))}
          </div>
        </section>

        <section className="container max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="h-full bg-white/5 border-white/10 hover:border-indigo-500/50 transition-colors group">
                  <CardHeader>
                    <div className="flex justify-between items-center mb-4">
                      <Badge variant="secondary" className="bg-indigo-500/20 text-indigo-300 border-none">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-white/40">{post.date}</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-indigo-400 transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-white/60 pt-2">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
