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

export function generateBrandDNA(industry: Industry, vibe: Vibe, _audience: string = 'General'): BrandDNA {
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
