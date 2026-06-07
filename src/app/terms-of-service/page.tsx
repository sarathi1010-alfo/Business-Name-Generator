import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | BrandForge',
  description: 'Terms of Service for BrandForge, part of the alfo.online ecosystem.',
};

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto max-w-3xl py-12 px-4 md:px-8">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
      <p className="text-muted-foreground mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
      <div className="prose dark:prose-invert max-w-none">
        <p>
          Welcome to BrandForge! By using our website, you agree to be bound by these Terms of Service.
        </p>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing BrandForge (a tool powered by alfo.online), you agree to comply with and be bound by these Terms.
        </p>
        <h2>2. Use License</h2>
        <p>
          You are granted a limited, non-exclusive, non-transferable license to use our tools for personal or commercial purposes. You may not copy or reverse-engineer the underlying code.
        </p>
        <h2>3. Disclaimer</h2>
        <p>
          The materials on BrandForge are provided on an &apos;as is&apos; basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties including, without limitation, implied warranties or conditions of merchantability.
        </p>
        <h2>4. Limitations</h2>
        <p>
          In no event shall BrandForge or alfo.online be liable for any damages arising out of the use or inability to use the tools on our website.
        </p>
      </div>
    </div>
  );
}
