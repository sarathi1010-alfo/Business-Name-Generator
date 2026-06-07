import Link from 'next/link';
import { Sparkles, ChevronDown } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-7xl items-center px-4 md:px-8">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="font-bold sm:inline-block">
              {siteConfig.siteName}
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Generator
            </Link>
            <div className="group relative hidden sm:block">
              <button className="flex items-center space-x-1 transition-colors hover:text-foreground/80 text-foreground/60">
                <span>Ecosystem Tools</span>
                <ChevronDown className="h-3 w-3" />
              </button>
              <div className="absolute left-0 top-full mt-2 hidden w-48 rounded-md border bg-popover p-2 text-popover-foreground shadow-md group-hover:block">
                <div className="flex flex-col space-y-1">
                  {siteConfig.ecosystemTools.map((tool) => (
                    <a
                      key={tool.name}
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground"
                    >
                      {tool.name}
                    </a>
                  ))}
                  <div className="my-1 h-px bg-muted" />
                  <a
                    href="https://hub.alfo.online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-sm px-2 py-1.5 text-sm font-semibold hover:bg-accent hover:text-accent-foreground text-primary"
                  >
                    View All Tools &rarr;
                  </a>
                </div>
              </div>
            </div>
            <Link
              href="/about"
              className="transition-colors hover:text-foreground/80 text-foreground/60 hidden sm:block"
            >
              About
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <span className="text-xs text-muted-foreground hidden sm:inline-block">
            Powered by alfo.online
          </span>
        </div>
      </div>
    </header>
  );
}
