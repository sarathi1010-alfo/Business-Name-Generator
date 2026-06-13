"use client";

import { BrandKit } from '@/types';
import { Download, LayoutTemplate, Palette, Type, MessageSquare } from 'lucide-react';

export function StartupPack({ kit }: { kit: BrandKit }) {
  const { dna } = kit;

  const assets = [
    { name: 'Brand Colors (Hex/RGB)', icon: Palette, description: 'Export your primary, secondary, and accent palettes for Figma and Tailwind.' },
    { name: 'Typography System', icon: Type, description: `Heading: ${dna.typography.headingFont} | Body: ${dna.typography.bodyFont}` },
    { name: 'Voice & Tone Guidelines', icon: MessageSquare, description: 'Copywriting rules and taglines for your marketing team.' },
    { name: 'Landing Page Hero', icon: LayoutTemplate, description: 'High-converting hero section layout and copy.' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">One-Click Startup Pack</h2>
          <p className="text-white/60 text-sm">Everything you need to hand off to developers and marketers.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-md transition-colors text-sm font-medium border border-white/10">
          <Download className="w-4 h-4" />
          Download All Assets (ZIP)
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {assets.map((asset, i) => (
          <div key={i} className="flex gap-4 p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
              <asset.icon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-medium text-white text-sm">{asset.name}</h4>
              <p className="text-white/50 text-xs mt-1">{asset.description}</p>
            </div>
            <button className="ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <Download className="w-4 h-4 text-white/40 hover:text-white" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
