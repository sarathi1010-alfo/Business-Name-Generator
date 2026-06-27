import { Industry, Vibe, BrandArchetype, BrandDNA, TypographyPairing, BrandPalette } from '@/types';

function mapToArchetype(vibe: Vibe, industry: Industry): BrandArchetype {
  if (vibe === 'luxury' || vibe === 'elegant' || vibe === 'premium') return 'The Luxury';
  if (vibe === 'edgy' || vibe === 'bold') return 'The Rebel';
  if (vibe === 'playful') return 'The Creator';
  if (vibe === 'minimalist' && industry !== 'tech' && industry !== 'ai') return 'The Minimalist';
  if (vibe === 'trustworthy' || industry === 'finance' || industry === 'health') return 'The Guide';
  return 'The Innovator'; // Default for modern/futuristic/tech/ai
}

function selectTypography(archetype: BrandArchetype): TypographyPairing {
  const map: Record<BrandArchetype, TypographyPairing> = {
    'The Innovator': { headingFont: 'Inter, sans-serif', bodyFont: 'Roboto Mono, monospace', name: 'Inter + Mono' },
    'The Luxury': { headingFont: 'Playfair Display, serif', bodyFont: 'Lato, sans-serif', name: 'Playfair + Lato' },
    'The Rebel': { headingFont: 'Oswald, sans-serif', bodyFont: 'Inter, sans-serif', name: 'Oswald + Inter' },
    'The Creator': { headingFont: 'Poppins, sans-serif', bodyFont: 'Open Sans, sans-serif', name: 'Poppins + Open Sans' },
    'The Guide': { headingFont: 'Merriweather, serif', bodyFont: 'System-ui, sans-serif', name: 'Merriweather + System' },
    'The Minimalist': { headingFont: 'Helvetica Neue, sans-serif', bodyFont: 'Helvetica, sans-serif', name: 'Helvetica Base' }
  };
  return map[archetype];
}

function generatePalette(archetype: BrandArchetype, industry: Industry): BrandPalette {
  if (archetype === 'The Guide' && industry === 'finance') {
    return { primary: '#1E3A8A', secondary: '#3B82F6', accent: '#F59E0B', background: '#F8FAFC', foreground: '#0F172A', name: 'Trust Blue' };
  }
  if (archetype === 'The Innovator' && industry === 'ai') {
    return { primary: '#7C3AED', secondary: '#4F46E5', accent: '#10B981', background: '#0A0A0C', foreground: '#F8FAFC', name: 'Neon Void' };
  }
  if (archetype === 'The Luxury') {
    return { primary: '#000000', secondary: '#333333', accent: '#D4AF37', background: '#FAFAFA', foreground: '#171717', name: 'Gold Standard' };
  }
  if (archetype === 'The Minimalist') {
    return { primary: '#18181B', secondary: '#71717A', accent: '#18181B', background: '#FFFFFF', foreground: '#18181B', name: 'Stark White' };
  }
  if (archetype === 'The Rebel') {
    return { primary: '#EF4444', secondary: '#DC2626', accent: '#000000', background: '#18181B', foreground: '#F1F5F9', name: 'Crimson Edge' };
  }
  // Default Creator/Modern
  return { primary: '#EC4899', secondary: '#8B5CF6', accent: '#F43F5E', background: '#FEF2F2', foreground: '#0F172A', name: 'Vibrant Pulse' };
}

function determineVoice(archetype: BrandArchetype): { tone: string[], tagline: string, sampleCopy: { heroHeading: string, socialBio: string } } {
  const voices: Record<BrandArchetype, { tone: string[], tagline: string, sampleCopy: { heroHeading: string, socialBio: string } }> = {
    'The Innovator': {
      tone: ['Forward-thinking', 'Concise', 'Visionary'],
      tagline: 'Building the future, today.',
      sampleCopy: { heroHeading: 'Next-generation solutions for modern teams.', socialBio: 'We push the boundaries of what is possible.' }
    },
    'The Luxury': {
      tone: ['Exclusive', 'Refined', 'Understated'],
      tagline: 'Exceptional quality. Uncompromising standards.',
      sampleCopy: { heroHeading: 'Experience true elegance.', socialBio: 'Curating the finest experiences for the discerning few.' }
    },
    'The Rebel': {
      tone: ['Bold', 'Disruptive', 'Unapologetic'],
      tagline: 'Break the rules.',
      sampleCopy: { heroHeading: 'We do not follow trends. We destroy them.', socialBio: 'Challenging the status quo since day one.' }
    },
    'The Creator': {
      tone: ['Authentic', 'Vibrant', 'Relatable'],
      tagline: 'Made for you.',
      sampleCopy: { heroHeading: 'Bring your ideas to life.', socialBio: 'Empowering creators to build beautiful things.' }
    },
    'The Guide': {
      tone: ['Authoritative', 'Calming', 'Clear'],
      tagline: 'A partner you can trust.',
      sampleCopy: { heroHeading: 'Navigating complexity with clarity.', socialBio: 'Providing expert guidance for your most important decisions.' }
    },
    'The Minimalist': {
      tone: ['Direct', 'Essential', 'Quiet'],
      tagline: 'Less, but better.',
      sampleCopy: { heroHeading: 'Simplicity is the ultimate sophistication.', socialBio: 'Focusing only on what matters.' }
    }
  };
  return voices[archetype];
}

export function generateBrandDNA(industry: Industry, vibe: Vibe): BrandDNA {
  const archetype = mapToArchetype(vibe, industry);
  const typography = selectTypography(archetype);
  const palette = generatePalette(archetype, industry);
  const voice = determineVoice(archetype);

  return {
    archetype,
    typography,
    palette,
    voice
  };
}

export interface BrandDNASliders {
  modernClassic: number; // 0 to 100, 50 is neutral
  boldSubtle: number;    // 0 to 100, 50 is neutral
  playfulSerious: number; // 0 to 100, 50 is neutral
}

// Helper to blend colors
function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 0, g: 0, b: 0 };
}

function rgbToHex(r: number, g: number, b: number) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function blendColors(color1: string, color2: string, weight: number): string {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  const r = Math.round(rgb1.r * (1 - weight) + rgb2.r * weight);
  const g = Math.round(rgb1.g * (1 - weight) + rgb2.g * weight);
  const b = Math.round(rgb1.b * (1 - weight) + rgb2.b * weight);

  return rgbToHex(r, g, b);
}

export function morphBrandDNA(baseDna: BrandDNA, sliders: BrandDNASliders): BrandDNA {
  let newArchetype = baseDna.archetype;

  // Playful vs Serious can shift archetypes
  if (sliders.playfulSerious < 30) {
    newArchetype = 'The Creator';
  } else if (sliders.playfulSerious > 70) {
    if (newArchetype === 'The Creator' || newArchetype === 'The Rebel') {
      newArchetype = 'The Guide';
    }
  }

  // Modern vs Classic can shift typography and archetype
  if (sliders.modernClassic > 70) {
     if (newArchetype !== 'The Guide' && newArchetype !== 'The Rebel') {
        newArchetype = 'The Luxury';
     }
  }

  const morphedTypography = selectTypography(newArchetype);
  const basePalette = generatePalette(newArchetype, 'tech' as Industry); // Use a generic industry for palette derivation if not strict

  const morphedPalette = { ...baseDna.palette };

  // Bold vs Subtle
  if (sliders.boldSubtle < 40) {
    // More bold, move towards Rebel / Black / High Contrast
    morphedPalette.primary = blendColors(baseDna.palette.primary, '#EF4444', (40 - sliders.boldSubtle) / 40 * 0.5);
    morphedPalette.background = blendColors(baseDna.palette.background, '#18181B', (40 - sliders.boldSubtle) / 40 * 0.3);
  } else if (sliders.boldSubtle > 60) {
    // More subtle, move towards Minimalist / Gray / Low Contrast
    morphedPalette.primary = blendColors(baseDna.palette.primary, '#71717A', (sliders.boldSubtle - 60) / 40 * 0.5);
    morphedPalette.background = blendColors(baseDna.palette.background, '#FFFFFF', (sliders.boldSubtle - 60) / 40 * 0.3);
  }

  // Modern vs Classic
  if (sliders.modernClassic < 40) {
    // Modern: Neon, vibrant
    morphedPalette.secondary = blendColors(baseDna.palette.secondary, '#4F46E5', (40 - sliders.modernClassic) / 40 * 0.5);
  } else if (sliders.modernClassic > 60) {
    // Classic: Gold, deep blue, muted
    morphedPalette.secondary = blendColors(baseDna.palette.secondary, '#D4AF37', (sliders.modernClassic - 60) / 40 * 0.5);
  }

  const morphedVoice = determineVoice(newArchetype);

  return {
    archetype: newArchetype,
    typography: morphedTypography,
    palette: {
      ...morphedPalette,
      name: `${morphedPalette.name} (Custom)`
    },
    voice: morphedVoice
  };
}
