"use client";

import { BrandDNASliders as SlidersType } from '@/lib/brand-engine';

interface BrandDNASlidersProps {
  sliders: SlidersType;
  onChange: (sliders: SlidersType) => void;
}

export function BrandDNASliders({ sliders, onChange }: BrandDNASlidersProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({
      ...sliders,
      [name]: parseInt(value, 10),
    });
  };

  return (
    <div className="glass-panel p-6 rounded-xl bg-white/5 border border-white/10 space-y-6">
      <h3 className="text-lg font-semibold text-white mb-4">Fine-Tune DNA</h3>

      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-white/60 font-medium uppercase tracking-wider">
            <span>Modern</span>
            <span>Classic</span>
          </div>
          <input
            type="range"
            name="modernClassic"
            min="0"
            max="100"
            value={sliders.modernClassic}
            onChange={handleChange}
            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-indigo-500"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs text-white/60 font-medium uppercase tracking-wider">
            <span>Bold</span>
            <span>Subtle</span>
          </div>
          <input
            type="range"
            name="boldSubtle"
            min="0"
            max="100"
            value={sliders.boldSubtle}
            onChange={handleChange}
            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-indigo-500"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs text-white/60 font-medium uppercase tracking-wider">
            <span>Playful</span>
            <span>Serious</span>
          </div>
          <input
            type="range"
            name="playfulSerious"
            min="0"
            max="100"
            value={sliders.playfulSerious}
            onChange={handleChange}
            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-indigo-500"
          />
        </div>
      </div>
    </div>
  );
}
