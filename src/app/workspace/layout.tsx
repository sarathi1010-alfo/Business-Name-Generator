import { ReactNode } from 'react';
import Link from 'next/link';

export default function WorkspaceLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 border-r border-white/5 bg-white/5 backdrop-blur-xl p-6 flex flex-col gap-6 shrink-0">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-white">
          <span className="flex h-4 w-4 rounded-full bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.8)]" />
          BrandForge
        </Link>
        <nav className="flex flex-col gap-2">
          <Link href="/workspace" className="px-3 py-2 rounded-md bg-white/10 text-white font-medium hover:bg-white/15 transition-colors">
            My Brands
          </Link>
          <Link href="/" className="px-3 py-2 rounded-md text-white/60 hover:text-white hover:bg-white/5 transition-colors">
            Generate New
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
