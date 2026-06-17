"use client";

import { useFounderMode } from '@/hooks/useFounderMode';
import Link from 'next/link';
import { LandingPageMockup, SocialPostMockup } from '@/components/workspace/Mockups';
import { StartupPack } from '@/components/workspace/StartupPack';
import { ChevronRight } from 'lucide-react';
import { validateInternalLink } from '@/lib/seo/utils';

export default function WorkspacePage() {
  const { projects, activeProject, activeKit, setActiveProjectId } = useFounderMode();

  return (
    <div className="p-8 md:p-12 max-w-6xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Brand Workspace</h1>
        <p className="text-white/60 text-lg">Manage, refine, and deploy your generated brand identities.</p>
      </header>

      {projects.length === 0 ? (
        <div className="glass-panel border border-white/10 rounded-2xl p-12 text-center space-y-4 bg-white/5 backdrop-blur-md">
          <div className="h-16 w-16 bg-white/10 rounded-full mx-auto flex items-center justify-center text-2xl">
            ✨
          </div>
          <h3 className="text-xl font-medium text-white">No brands generated yet</h3>
          <p className="text-white/60 max-w-md mx-auto">
            Head over to the generator to craft your first Founder Brand Operating System identity.
          </p>
          <Link href={validateInternalLink("/")} className="inline-block mt-4 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-md transition-colors">
            Generate a Brand
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const activeKit = project.kits.find(k => k.id === project.activeKitId);
            if (!activeKit) return null;

            return (
              <div key={project.id} className="glass-panel group relative border border-white/10 rounded-2xl overflow-hidden bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-md">
                {/* Brand Preview Header */}
                <div
                  className="h-32 p-6 flex flex-col justify-end relative"
                  style={{ backgroundColor: activeKit.dna.palette.background, color: activeKit.dna.palette.foreground }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="relative z-10 flex justify-between items-end">
                    <h3 className="text-2xl font-bold" style={{ fontFamily: activeKit.dna.typography.headingFont.split(',')[0] }}>
                      {project.name}
                    </h3>
                    <div className="flex gap-1">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: activeKit.dna.palette.primary }} />
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: activeKit.dna.palette.secondary }} />
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: activeKit.dna.palette.accent }} />
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/50">Archetype</span>
                    <span className="text-indigo-300 font-medium">{activeKit.dna.archetype}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/50">Voice</span>
                    <span className="text-white/80">{activeKit.dna.voice.tone[0]} & {activeKit.dna.voice.tone[1]}</span>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <button
                      onClick={() => setActiveProjectId(project.id)}
                      className="w-full py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded text-sm font-medium transition-colors"
                    >
                      Open Brand Kit
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Detail View for Active Project */}
      {activeProject && activeKit && (
        <div className="mt-16 border-t border-white/10 pt-16 space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="flex items-center gap-4 text-white/60 mb-8">
            <span>Workspace</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">{activeProject.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: DNA and Pack */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h3 className="text-3xl font-bold mb-6">{activeProject.name} Identity</h3>
                <div className="space-y-4 text-sm text-white/80">
                  <div className="glass-panel p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-white/50 mb-1">Archetype</div>
                    <div className="font-medium text-indigo-400 text-lg">{activeKit.dna.archetype}</div>
                  </div>
                  <div className="glass-panel p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-white/50 mb-1">Typography</div>
                    <div className="font-medium text-white">{activeKit.dna.typography.name}</div>
                  </div>
                  <div className="glass-panel p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-white/50 mb-2">Palette ({activeKit.dna.palette.name})</div>
                    <div className="flex gap-2 h-8">
                      <div className="flex-1 rounded" style={{ backgroundColor: activeKit.dna.palette.primary }} />
                      <div className="flex-1 rounded" style={{ backgroundColor: activeKit.dna.palette.secondary }} />
                      <div className="flex-1 rounded" style={{ backgroundColor: activeKit.dna.palette.accent }} />
                      <div className="flex-1 rounded" style={{ backgroundColor: activeKit.dna.palette.background }} />
                      <div className="flex-1 rounded" style={{ backgroundColor: activeKit.dna.palette.foreground }} />
                    </div>
                  </div>
                </div>
              </div>

              <StartupPack kit={activeKit} />
            </div>

            {/* Right Column: Visual Mockups */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">Landing Page Preview</h3>
                <LandingPageMockup kit={activeKit} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">Social Media Preview</h3>
                <SocialPostMockup kit={activeKit} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
