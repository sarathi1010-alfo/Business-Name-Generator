import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'BrandForge Blog - Insights for Founders and Brand Builders',
  description: 'Deep dives into brand identity, archetypes, strategy, and naming. Build a brand that stands out.',
  alternates: {
    canonical: 'https://brandforge.alfo.online/blog',
  },
};

const posts = [
  {
    title: "How to Choose a Brand Name That Stands Out",
    description: "Learn how to choose a memorable, unique brand name. Explore naming strategies and check domain availability.",
    slug: "choose-standout-brand-name",
    date: "Feb 2026",
    category: "Naming"
  },
  {
    title: "What is Brand Identity? A Founder's Guide",
    description: "Discover what brand identity truly is and why it's the foundation of business success.",
    slug: "what-is-brand-identity",
    date: "Feb 2026",
    category: "Fundamentals"
  },
  {
    title: "The Ultimate Guide to Brand Archetypes",
    description: "Learn how to use the 12 psychological brand archetypes to build a powerful, human-centric brand.",
    slug: "ultimate-guide-to-brand-archetypes",
    date: "Feb 2026",
    category: "Strategy"
  },
  {
    title: "Brand Identity vs. Brand Image",
    description: "Understanding the crucial difference between who you are and how people see you.",
    slug: "brand-identity-vs-brand-image",
    date: "Feb 2026",
    category: "Strategy"
  },
  {
    title: "How to Define Your Brand Voice",
    description: "Master the art of brand linguistics. Learn how to define a brand voice that resonates.",
    slug: "how-to-define-your-brand-voice",
    date: "Feb 2026",
    category: "Voice"
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
              The BrandForge Blog
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
              Strategic insights on naming, identity, and the psychology of branding for the modern founder.
            </p>
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
