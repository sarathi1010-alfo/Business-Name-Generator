import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-7xl items-center px-4 md:px-8">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="font-bold sm:inline-block">
              BrandForge
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Generator
            </Link>
            <Link
              href="/names-for-tech"
              className="transition-colors hover:text-foreground/80 text-foreground/60 hidden sm:block"
            >
              Industries
            </Link>
            <Link
              href="/blog"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Blog
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Future search / tools */}
          </div>
          <nav className="flex items-center">
            {/* Theme toggle could go here */}
          </nav>
        </div>
      </div>
    </header>
  );
}
