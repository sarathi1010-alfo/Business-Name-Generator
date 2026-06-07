import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const useCaseData = [
  {
    tool: "brand-name-generator",
    useCases: ["startup", "app", "restaurant", "clothing brand", "tech company", "agency"],
    keywords: ["free business name generator", "startup name maker", "creative brand names"]
  }
];

const comparisonData = [
  {
    tool: "brandforge",
    competitors: ["namelix", "shopify", "looka", "novanym", "squadhelp"]
  }
];

const templateData = [
  {
    tool: "brandforge",
    categories: ["saas-startups", "ecommerce-stores", "local-businesses", "creative-agencies"]
  }
];

const blogData = [
  {
    slug: "how-to-choose-a-startup-name",
    title: "How to Choose a Startup Name in 2025",
    targetKeyword: "startup name",
    content: "Choosing a startup name is one of the most important early decisions a founder will make. It needs to be memorable, easy to spell, and ideally have an available .com domain. Start by brainstorming core concepts related to your business, then use a tool like BrandForge to generate combinations and check availability."
  },
  {
    slug: "best-practices-for-brand-naming",
    title: "Best Practices for Brand Naming",
    targetKeyword: "brand naming",
    content: "When naming your brand, keep it simple. Avoid hyphens and numbers. Think about the feeling or &quot;vibe&quot; you want to convey. If your brand is modern and tech-focused, you might want a short, abstract name. If it&apos;s a traditional business, a more descriptive name might work better."
  }
]

// 1. Generate Use-Case Pages
const useCasesDir = path.join(__dirname, 'src', 'app', 'use-cases');
if (!fs.existsSync(useCasesDir)) fs.mkdirSync(useCasesDir, { recursive: true });

useCaseData.forEach(entry => {
  entry.useCases.forEach(useCase => {
    const slug = useCase.toLowerCase().replace(/\s+/g, '-');
    const folderPath = path.join(useCasesDir, slug);
    if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath, { recursive: true });
    const titleCase = useCase.charAt(0).toUpperCase() + useCase.slice(1);

    const pageContent = `import { Metadata } from 'next';
import { RelatedTools } from '@/components/ui/RelatedTools';
import { Button } from '@/components/ui/button';
import { AdSlot } from '@/components/ui/AdSlot';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '${titleCase} Name Generator | BrandForge',
  description: 'Generate the perfect name for your ${useCase}. Find unique, brandable ideas instantly.',
  keywords: ${JSON.stringify(entry.keywords)},
};

export default function UseCasePage() {
  return (
    <>
      <main className="flex-1 flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-gradient-to-b from-background to-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              ${titleCase} Name Generator
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Looking for a unique, catchy name for your ${useCase}? Use our AI-powered generator to find the perfect fit in seconds.
            </p>
            <div className="pt-4">
              <Link href="/">
                <Button size="lg" className="font-bold">Open Full Generator</Button>
              </Link>
            </div>
          </div>
        </section>

        <div className="w-full py-8 flex justify-center border-b">
          <AdSlot variant="leaderboard" />
        </div>

        <section className="w-full max-w-4xl mx-auto px-4 md:px-8 py-16 prose prose-slate dark:prose-invert">
          <h2>How to choose a name for your ${useCase}</h2>
          <p>
            The best ${useCase} names are memorable, easy to spell, and evoke the right feeling.
            Avoid long, complicated words. Our tool helps you filter by vibe and industry to match your brand&apos;s core identity.
          </p>
        </section>

        <div className="w-full py-8 flex justify-center">
          <AdSlot variant="rectangle" />
        </div>

        <RelatedTools />
      </main>
    </>
  );
}
`;
    fs.writeFileSync(path.join(folderPath, 'page.tsx'), pageContent);
  });
});

// 2. Generate Comparison Pages
const vsDir = path.join(__dirname, 'src', 'app', 'vs');
if (!fs.existsSync(vsDir)) fs.mkdirSync(vsDir, { recursive: true });

comparisonData.forEach(entry => {
  entry.competitors.forEach(competitor => {
    const slug = competitor.toLowerCase().replace(/\s+/g, '-');
    const folderPath = path.join(vsDir, slug);
    if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath, { recursive: true });
    const titleCase = competitor.charAt(0).toUpperCase() + competitor.slice(1);

    const pageContent = `import { Metadata } from 'next';
import { RelatedTools } from '@/components/ui/RelatedTools';
import { Button } from '@/components/ui/button';
import { AdSlot } from '@/components/ui/AdSlot';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'BrandForge vs ${titleCase} | Best Brand Name Generator',
  description: 'Comparing BrandForge to ${titleCase}. Discover why founders prefer BrandForge for generating fast, unique, and brandable business names.',
};

export default function ComparisonPage() {
  return (
    <>
      <main className="flex-1 flex flex-col items-center">
        <section className="w-full py-16 md:py-24 px-4 bg-muted/20 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              BrandForge vs ${titleCase}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Looking for an alternative to ${titleCase}? See why modern founders and creators use BrandForge to name their next big thing.
            </p>
            <div className="pt-4">
              <Link href="/">
                <Button size="lg" className="font-bold">Try BrandForge for Free</Button>
              </Link>
            </div>
          </div>
        </section>

        <div className="w-full py-8 flex justify-center border-b">
          <AdSlot variant="leaderboard" />
        </div>

        <section className="w-full max-w-4xl mx-auto px-4 md:px-8 py-16 prose prose-slate dark:prose-invert">
          <h2>Why Choose BrandForge over ${titleCase}?</h2>
          <p>
            While ${titleCase} is a well-known tool, BrandForge is built specifically for modern internet startups. We focus on highly pronounceable, aesthetic names that fit today&apos;s design trends.
          </p>
          <ul>
            <li><strong>No paywalls:</strong> Generate unlimited ideas for free.</li>
            <li><strong>Vibe-based generation:</strong> Filter by aesthetic (e.g., tech, luxury, playful).</li>
            <li><strong>Clean UI:</strong> No cluttered ads or confusing menus.</li>
          </ul>
        </section>

        <div className="w-full py-8 flex justify-center">
          <AdSlot variant="rectangle" />
        </div>

        <RelatedTools />
      </main>
    </>
  );
}
`;
    fs.writeFileSync(path.join(folderPath, 'page.tsx'), pageContent);
  });
});

// 3. Generate Template Pages
const templatesDir = path.join(__dirname, 'src', 'app', 'templates');
if (!fs.existsSync(templatesDir)) fs.mkdirSync(templatesDir, { recursive: true });

templateData.forEach(entry => {
  entry.categories.forEach(category => {
    const slug = category;
    const folderPath = path.join(templatesDir, slug);
    if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath, { recursive: true });
    const displayTitle = category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    const pageContent = `import { Metadata } from 'next';
import { RelatedTools } from '@/components/ui/RelatedTools';
import { Button } from '@/components/ui/button';
import { AdSlot } from '@/components/ui/AdSlot';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '${displayTitle} Naming Templates | BrandForge',
  description: 'Explore naming templates and formulas specifically designed for ${displayTitle}.',
};

export default function TemplatePage() {
  return (
    <>
      <main className="flex-1 flex flex-col items-center">
        <section className="w-full py-16 px-4 border-b">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight">
              ${displayTitle} Naming Templates
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proven naming formulas and root words perfect for ${displayTitle}.
            </p>
            <Link href="/">
              <Button>Launch Generator</Button>
            </Link>
          </div>
        </section>
        <div className="w-full py-8 flex justify-center">
          <AdSlot variant="leaderboard" />
        </div>
        <RelatedTools />
      </main>
    </>
  );
}
`;
    fs.writeFileSync(path.join(folderPath, 'page.tsx'), pageContent);
  });
});

// 4. Generate Blog Pages
const blogDir = path.join(__dirname, 'src', 'app', 'blog');
if (!fs.existsSync(blogDir)) fs.mkdirSync(blogDir, { recursive: true });

blogData.forEach(post => {
  const folderPath = path.join(blogDir, post.slug);
  if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath, { recursive: true });

  const pageContent = `import { Metadata } from 'next';
import { RelatedTools } from '@/components/ui/RelatedTools';
import { AdSlot } from '@/components/ui/AdSlot';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '${post.title} | BrandForge Blog',
  description: '${post.content.substring(0, 150).replace(/'/g, "\\'").replace(/"/g, "&quot;")}...',
};

export default function BlogPostPage() {
  return (
    <>
      <main className="flex-1 flex flex-col items-center py-16">
        <article className="w-full max-w-3xl mx-auto px-4 md:px-8 prose prose-slate dark:prose-invert">
          <h1>${post.title}</h1>
          <p dangerouslySetInnerHTML={{ __html: '${post.content}' }}></p>
          <div className="my-8">
            <AdSlot variant="rectangle" />
          </div>
          <p>Ready to start naming? <Link href="/">Try BrandForge today.</Link></p>
        </article>
        <div className="w-full mt-12 border-t">
          <RelatedTools />
        </div>
      </main>
    </>
  );
}
`;
  fs.writeFileSync(path.join(folderPath, 'page.tsx'), pageContent);
});

console.log('Comparison, Template, and Blog pages generated successfully!');
