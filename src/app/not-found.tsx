import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0c] text-white">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-6">
        <h1 className="text-6xl font-extrabold tracking-tight">404</h1>
        <h2 className="text-2xl font-semibold">Brand Identity Not Found</h2>
        <p className="text-muted-foreground max-w-md">
          The business name category or industry generator you are looking for does not exist or has been moved.
        </p>
        <Link href="/">
          <Button size="lg" className="font-bold">
            Return to BrandForge Generator
          </Button>
        </Link>
      </main>
      <Footer />
    </div>
  );
}
