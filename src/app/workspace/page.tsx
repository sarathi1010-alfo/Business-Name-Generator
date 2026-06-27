"use client";

import { useState, useCallback, useMemo } from 'react';
import { useFounderMode } from '@/hooks/useFounderMode';
import Link from 'next/link';
import { LandingPageMockup, SocialPostMockup } from '@/components/workspace/Mockups';
import { StartupPack } from '@/components/workspace/StartupPack';
import { ChevronRight } from 'lucide-react';
import { BrandDNASliders } from '@/components/workspace/BrandDNASliders';
import { morphBrandDNA, BrandDNASliders as SlidersType } from '@/lib/brand-engine';

export default function WorkspacePage() {
  const { projects, activeProject, activeKit, setActiveProjectId, updateActiveKitDNA } = useFounderMode();

  const [compareMode, setCompareMode] = useState(false);
  const [selectedForCompare, setSelectedForCompare] = useState<string[]>([]);

  const handleToggleCompareSelection = (projectId: string) => {
    setSelectedForCompare(prev => {
      if (prev.includes(projectId)) {
        return prev.filter(id => id !== projectId);
      }
      if (prev.length < 2) {
        return [...prev, projectId];
      }
      return prev; // Max 2 selected
    });
  };

  const toggleCompareMode = () => {
    setCompareMode(prev => {
      const next = !prev;
      if (!next) setSelectedForCompare([]);
      return next;
    });
  };

  const [sliders, setSliders] = useState<SlidersType>({
    modernClassic: 50,
    boldSubtle: 50,
    playfulSerious: 50
  });

  const handleExportBrandBoard = useCallback(() => {
    if (!activeKit) return;

    const { name, tagline, dna } = activeKit;
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${name} - Brand Board</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=${dna.typography.headingFont.split(',')[0].replace(' ', '+')}:wght@700&family=${dna.typography.bodyFont.split(',')[0].replace(' ', '+')}:wght@400;500&display=swap');

    :root {
      --primary: ${dna.palette.primary};
      --secondary: ${dna.palette.secondary};
      --accent: ${dna.palette.accent};
      --bg: ${dna.palette.background};
      --fg: ${dna.palette.foreground};
      --heading-font: ${dna.typography.headingFont};
      --body-font: ${dna.typography.bodyFont};
    }

    body {
      margin: 0;
      padding: 40px;
      background-color: #f8fafc;
      color: #0f172a;
      font-family: 'Inter', sans-serif;
    }

    .board {
      max-width: 800px;
      margin: 0 auto;
      background-color: var(--bg);
      color: var(--fg);
      padding: 60px;
      border-radius: 12px;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(0,0,0,0.05);
    }

    .header {
      text-align: center;
      margin-bottom: 60px;
    }

    .logo {
      font-family: var(--heading-font);
      font-size: 64px;
      font-weight: 700;
      margin: 0;
      letter-spacing: -0.02em;
      color: var(--primary);
    }

    .tagline {
      font-family: var(--body-font);
      font-size: 18px;
      opacity: 0.8;
      margin-top: 10px;
    }

    .section {
      margin-bottom: 50px;
    }

    .section-title {
      font-family: 'Inter', sans-serif;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-weight: 600;
      color: #64748b;
      margin-bottom: 20px;
      border-bottom: 1px solid rgba(100,116,139,0.2);
      padding-bottom: 8px;
    }

    .colors {
      display: flex;
      gap: 20px;
    }

    .color-swatch {
      flex: 1;
      height: 120px;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 12px;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
      color: white;
      font-size: 12px;
      font-family: monospace;
      text-shadow: 0 1px 2px rgba(0,0,0,0.5);
    }

    .typography {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
    }

    .font-sample h4 {
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      margin: 0 0 10px 0;
      opacity: 0.6;
      font-weight: 500;
    }

    .font-sample-heading {
      font-family: var(--heading-font);
      font-size: 36px;
      font-weight: 700;
      margin: 0;
      line-height: 1.2;
    }

    .font-sample-body {
      font-family: var(--body-font);
      font-size: 16px;
      line-height: 1.6;
      margin: 0;
    }

    .voice {
      display: flex;
      gap: 12px;
      margin-bottom: 20px;
    }

    .voice-badge {
      background: rgba(100,116,139,0.1);
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 500;
    }

    @media print {
      body {
        background-color: white;
        padding: 0;
      }
      .board {
        box-shadow: none;
        border: none;
        padding: 0;
      }
    }
  </style>
</head>
<body>
  <div class="board">
    <div class="header">
      <h1 class="logo">${name}</h1>
      <p class="tagline">${tagline || dna.voice.tagline}</p>
    </div>

    <div class="section">
      <div class="section-title">Color Palette (${dna.palette.name})</div>
      <div class="colors">
        <div class="color-swatch" style="background-color: var(--primary);">
          <span>Primary</span>
          <span>${dna.palette.primary}</span>
        </div>
        <div class="color-swatch" style="background-color: var(--secondary);">
          <span>Secondary</span>
          <span>${dna.palette.secondary}</span>
        </div>
        <div class="color-swatch" style="background-color: var(--accent);">
          <span>Accent</span>
          <span>${dna.palette.accent}</span>
        </div>
        <div class="color-swatch" style="background-color: var(--bg); color: var(--fg); border: 1px solid rgba(0,0,0,0.1);">
          <span>Background</span>
          <span>${dna.palette.background}</span>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Typography (${dna.typography.name})</div>
      <div class="typography">
        <div class="font-sample">
          <h4>Heading</h4>
          <p class="font-sample-heading">Aa Bb Cc<br>0123456789</p>
        </div>
        <div class="font-sample">
          <h4>Body</h4>
          <p class="font-sample-body">The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. How vexingly quick daft zebras jump.</p>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Brand Voice & Tone</div>
      <div class="voice">
        ${dna.voice.tone.map(t => `<span class="voice-badge">${t}</span>`).join('')}
      </div>
      <div class="font-sample-body" style="font-style: italic; opacity: 0.8; margin-top: 10px;">
        "${dna.voice.sampleCopy.heroHeading}"
      </div>
    </div>
  </div>
</body>
</html>
    `;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  }, [activeKit]);

  const handleSliderChange = useCallback((newSliders: SlidersType) => {
    setSliders(newSliders);
    if (activeKit) {
      // Re-morph from the base (in a real app we might want to store the original un-morphed DNA)
      // Since we don't have the "original", we just derive it.
      // A better way is to regenerate from the industry/vibe or just mutate the existing.
      // We will mutate the current activeKit.dna for demonstration.
      // But morphBrandDNA expects a base. We can pass the activeKit.dna, but repeated morphs might drift.
      // So let's generate a base fresh from original generation params.
      import('@/lib/brand-engine').then(({ generateBrandDNA }) => {
         const baseDna = generateBrandDNA(activeKit.filtersUsed.industry, activeKit.filtersUsed.vibe);
         const newDna = morphBrandDNA(baseDna, newSliders);
         updateActiveKitDNA(newDna);
      });
    }
  }, [activeKit, updateActiveKitDNA]);


  return (
    <div className="p-8 md:p-12 max-w-6xl mx-auto space-y-8">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Brand Workspace</h1>
          <p className="text-white/60 text-lg">Manage, refine, and deploy your generated brand identities.</p>
        </div>
        {projects.length >= 2 && (
          <button
            onClick={toggleCompareMode}
            className={`px-4 py-2 rounded-md font-medium text-sm transition-colors border ${
              compareMode
                ? 'bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/20'
                : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10'
            }`}
          >
            {compareMode ? 'Cancel Comparison' : 'Compare Brands'}
          </button>
        )}
      </header>

      {compareMode && selectedForCompare.length === 2 && (
        <div className="glass-panel p-6 rounded-2xl bg-indigo-900/20 border border-indigo-500/30 mb-8 animate-in fade-in zoom-in duration-300">
          <h2 className="text-xl font-bold text-white mb-6">Comparing Brands</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {selectedForCompare.map(pid => {
              const proj = projects.find(p => p.id === pid);
              const kit = proj?.kits.find(k => k.id === proj.activeKitId);
              if (!proj || !kit) return null;

              return (
                <div key={proj.id} className="space-y-6">
                  <div
                    className="p-6 rounded-xl relative overflow-hidden"
                    style={{ backgroundColor: kit.dna.palette.background, color: kit.dna.palette.foreground }}
                  >
                    <h3 className="text-3xl font-bold relative z-10" style={{ fontFamily: kit.dna.typography.headingFont.split(',')[0] }}>
                      {proj.name}
                    </h3>
                    <p className="mt-2 text-sm opacity-80 font-medium">{kit.dna.archetype}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass-panel p-4 rounded-xl bg-white/5">
                      <div className="text-xs text-white/50 mb-1">Colors</div>
                      <div className="flex h-4 gap-1 rounded overflow-hidden">
                         <div className="flex-1" style={{backgroundColor: kit.dna.palette.primary}}></div>
                         <div className="flex-1" style={{backgroundColor: kit.dna.palette.secondary}}></div>
                         <div className="flex-1" style={{backgroundColor: kit.dna.palette.accent}}></div>
                      </div>
                    </div>
                    <div className="glass-panel p-4 rounded-xl bg-white/5">
                      <div className="text-xs text-white/50 mb-1">Typography</div>
                      <div className="text-sm font-medium text-white truncate">{kit.dna.typography.name}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}


      {projects.length === 0 ? (
        <div className="glass-panel border border-white/10 rounded-2xl p-12 text-center space-y-4 bg-white/5 backdrop-blur-md">
          <div className="h-16 w-16 bg-white/10 rounded-full mx-auto flex items-center justify-center text-2xl">
            ✨
          </div>
          <h3 className="text-xl font-medium text-white">No brands generated yet</h3>
          <p className="text-white/60 max-w-md mx-auto">
            Head over to the generator to craft your first Founder Brand Operating System identity.
          </p>
          <Link href="/" className="inline-block mt-4 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-md transition-colors">
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
                    {compareMode ? (
                      <label className="flex items-center gap-3 cursor-pointer p-2 rounded hover:bg-white/5 transition-colors">
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-white/20 bg-black/20 accent-indigo-500"
                          checked={selectedForCompare.includes(project.id)}
                          onChange={() => handleToggleCompareSelection(project.id)}
                          disabled={!selectedForCompare.includes(project.id) && selectedForCompare.length >= 2}
                        />
                        <span className="text-sm font-medium text-white/80 select-none">
                          {selectedForCompare.includes(project.id) ? 'Selected for compare' : 'Select to compare'}
                        </span>
                      </label>
                    ) : (
                      <button
                        onClick={() => setActiveProjectId(project.id)}
                        className="w-full py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded text-sm font-medium transition-colors"
                      >
                        Open Brand Kit
                      </button>
                    )}
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
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-bold">{activeProject.name} Identity</h3>
                  <button
                    onClick={handleExportBrandBoard}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded transition-colors"
                  >
                    Export Brand Board
                  </button>
                </div>

                <div className="mb-8">
                  <BrandDNASliders sliders={sliders} onChange={handleSliderChange} />
                </div>

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
