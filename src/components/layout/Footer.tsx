import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-8">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built with precision. <span className="font-semibold text-foreground">BrandForge</span>.
        </p>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <Link href="/blog" className="hover:underline min-h-[44px] flex items-center px-2">Guides</Link>
          <Link href="/" className="hover:underline min-h-[44px] flex items-center px-2">Generator</Link>
          <Link href="/industries/tech-names" className="hover:underline min-h-[44px] flex items-center px-2">Industries</Link>
        </div>
      </div>
    </footer>
  );
}
