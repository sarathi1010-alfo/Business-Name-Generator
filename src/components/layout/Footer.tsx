import Link from 'next/link';
import { siteConfig } from '@/lib/config';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-2">{siteConfig.siteName}</h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              {siteConfig.description}
            </p>
            <p className="text-sm text-muted-foreground">
              Powered by <a href="https://hub.alfo.online" className="text-primary hover:underline">alfo.online</a>
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Tools Hub</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {siteConfig.ecosystemTools.slice(0, 5).map((tool) => (
                <li key={tool.name}>
                  <a href={tool.url} target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:underline transition-colors">
                    {tool.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="https://hub.alfo.online" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline transition-colors mt-2 inline-block">
                  All Tools &rarr;
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy-policy" className="hover:text-foreground hover:underline transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-foreground hover:underline transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground hover:underline transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-foreground hover:underline transition-colors">Contact</Link></li>
              <li><a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:underline transition-colors">Twitter / X</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between border-t pt-8 md:flex-row text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} alfo.online. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
