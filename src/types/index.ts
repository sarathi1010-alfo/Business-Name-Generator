export type Industry = 'tech' | 'ai' | 'beauty' | 'fitness' | 'fashion' | 'finance' | 'health' | 'ecommerce' | 'agency' | 'saas' | 'gaming' | 'education' | 'food' | 'medical' | 'nutrition' | 'marketing' | 'design' | 'coffee' | 'restaurant' | 'skincare' | 'clothing' | 'cybersecurity';

export type Vibe = 'luxury' | 'modern' | 'minimalist' | 'futuristic' | 'playful' | 'premium' | 'elegant' | 'bold' | 'edgy' | 'trustworthy';

export type LengthFilter = 'short' | 'medium' | 'long' | 'any';

export type NameStyle = 'startup' | 'brandable' | 'premium' | 'futuristic';

export type BrandArchetype = 'The Creator' | 'The Innovator' | 'The Luxury' | 'The Rebel' | 'The Guide' | 'The Minimalist';

export interface BrandPalette {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  foreground: string;
  name: string;
}

export interface TypographyPairing {
  headingFont: string;
  bodyFont: string;
  name: string;
}

export interface GenerationFilters {
  industry: Industry;
  vibe: Vibe;
  length: LengthFilter;
  style: NameStyle;
  isTwoWords: boolean;
}

export interface GeneratedName {
  id: string;
  name: string;
  tagline?: string;
  score: {
    total: number;
    pronounceability: number;
    domainLikeliness: number;
    uniqueness: number;
    symmetry: number;
  };
  domainAvailabilityScore: number; // Heuristic fake score 0-100
  filtersUsed: GenerationFilters;
  dna?: BrandDNA; // Attached holistic brand identity
}

export interface BrandDNA {
  archetype: BrandArchetype;
  typography: TypographyPairing;
  palette: BrandPalette;
  voice: {
    tone: string[];
    tagline: string;
    sampleCopy: {
      heroHeading: string;
      socialBio: string;
    };
  };
}

export interface BrandKit extends GeneratedName {
  dna: BrandDNA;
  versionName: string;
  createdAt: Date;
}

export interface BrandProject {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  activeKitId: string;
  kits: BrandKit[];
}

export interface Dictionary {
  prefixes: string[];
  suffixes: string[];
  roots: string[];
  invented: string[];
  industryTokens: Record<Industry, string[]>;
  vibeTokens: Record<Vibe, string[]>;
  taglines: Record<Industry, string[]>;
}
