import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | BrandForge',
  description: 'Learn more about BrandForge and the alfo.online ecosystem.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-3xl py-12 px-4 md:px-8">
      <h1 className="text-4xl font-bold mb-6">About BrandForge</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>
          BrandForge is a powerful, AI-driven brand name generator designed to help founders, creators, and businesses find the perfect identity.
        </p>
        <h2>The Ecosystem</h2>
        <p>
          BrandForge is proudly built as part of the <strong>alfo.online</strong> ecosystem—a compounding network of internet tools designed to make your work easier, faster, and more efficient.
        </p>
        <p>
          Our mission is to build standalone, fast, and free utilities without the bloat.
        </p>
        <h2>Why We Built This</h2>
        <p>
          Finding a good brand name is hard. Existing tools were either cluttered with ads, locked behind paywalls, or just generated generic results. We built BrandForge to provide a clean, fast, and highly customizable naming experience.
        </p>
      </div>
    </div>
  );
}
