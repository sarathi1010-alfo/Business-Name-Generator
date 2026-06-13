"use client";

import { BrandKit } from '@/types';
import * as motion from 'motion/react-client';

interface MockupProps {
  kit: BrandKit;
}

export function LandingPageMockup({ kit }: MockupProps) {
  const { dna } = kit;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full aspect-[16/9] rounded-xl overflow-hidden border border-black/10 shadow-2xl relative"
      style={{ backgroundColor: dna.palette.background, color: dna.palette.foreground }}
    >
      {/* Mock Browser Header */}
      <div className="h-8 w-full bg-black/5 flex items-center px-4 gap-2 border-b border-black/5">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-amber-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
        <div className="mx-auto h-4 w-48 bg-black/5 rounded text-[10px] flex items-center justify-center text-black/40 font-mono">
          {kit.name.toLowerCase()}.com
        </div>
      </div>

      {/* Hero Content */}
      <div className="p-8 flex flex-col h-[calc(100%-2rem)] justify-center items-center text-center relative z-10">
        <div
          className="text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
          style={{ backgroundColor: dna.palette.primary + '20', color: dna.palette.primary }}
        >
          {dna.archetype}
        </div>
        <h1
          className="text-4xl font-extrabold mb-4 max-w-lg balance-text"
          style={{ fontFamily: dna.typography.headingFont }}
        >
          {dna.voice.sampleCopy.heroHeading}
        </h1>
        <p
          className="text-sm max-w-md opacity-80 mb-8"
          style={{ fontFamily: dna.typography.bodyFont }}
        >
          {dna.voice.sampleCopy.socialBio} {dna.voice.tagline}
        </p>
        <button
          className="px-6 py-3 rounded-md font-medium text-sm transition-transform hover:scale-105"
          style={{ backgroundColor: dna.palette.primary, color: dna.palette.background }}
        >
          Get Started
        </button>
      </div>

      {/* Decorative Gradients based on palette */}
      <div
        className="absolute top-0 right-0 w-64 h-64 blur-3xl rounded-full opacity-20 pointer-events-none"
        style={{ backgroundColor: dna.palette.secondary }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 blur-3xl rounded-full opacity-20 pointer-events-none"
        style={{ backgroundColor: dna.palette.accent }}
      />
    </motion.div>
  );
}

export function SocialPostMockup({ kit }: MockupProps) {
  const { dna } = kit;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="w-full max-w-sm mx-auto bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
    >
      <div className="p-4 flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg"
          style={{ backgroundColor: dna.palette.primary, fontFamily: dna.typography.headingFont }}
        >
          {kit.name.charAt(0)}
        </div>
        <div>
          <div className="font-bold text-sm text-gray-900" style={{ fontFamily: dna.typography.headingFont }}>{kit.name}</div>
          <div className="text-xs text-gray-500" style={{ fontFamily: dna.typography.bodyFont }}>@{kit.name.toLowerCase()}</div>
        </div>
      </div>

      <div className="px-4 pb-4 text-sm text-gray-800" style={{ fontFamily: dna.typography.bodyFont }}>
        <p>{dna.voice.sampleCopy.socialBio}</p>
        <p className="mt-2 text-blue-500">#{kit.name} #Launch</p>
      </div>

      <div
        className="w-full aspect-video flex items-center justify-center p-6 text-center relative overflow-hidden"
        style={{ backgroundColor: dna.palette.secondary }}
      >
        <div className="absolute inset-0 bg-black/10" />
        <h3
          className="relative z-10 text-2xl font-bold text-white drop-shadow-md"
          style={{ fontFamily: dna.typography.headingFont }}
        >
          {dna.voice.tagline}
        </h3>
      </div>
    </motion.div>
  );
}
