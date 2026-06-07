import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | BrandForge',
  description: 'Privacy Policy for BrandForge, part of the alfo.online ecosystem.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto max-w-3xl py-12 px-4 md:px-8">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-muted-foreground mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
      <div className="prose dark:prose-invert max-w-none">
        <p>
          Welcome to BrandForge, a part of the alfo.online ecosystem. We are committed to protecting your personal information and your right to privacy.
        </p>
        <h2>1. Information We Collect</h2>
        <p>
          We collect minimal information required to operate our services. This may include standard web analytics (like IP address, browser type) via Google Analytics (GA4) to understand our traffic.
        </p>
        <h2>2. How We Use Your Information</h2>
        <p>
          We use the information we collect or receive to operate, maintain, and improve our services, and to provide you with a customized experience.
        </p>
        <h2>3. Third-Party Services</h2>
        <p>
          We may use third-party services such as Google AdSense for advertising and Google Analytics for tracking. These services have their own privacy policies.
        </p>
        <h2>4. Your Rights (GDPR & CCPA)</h2>
        <p>
          Depending on your location, you may have the right to access, rectify, or erase your personal data. Contact us to exercise these rights.
        </p>
      </div>
    </div>
  );
}
