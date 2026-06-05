export type Industry = 'tech' | 'ai' | 'beauty' | 'fitness' | 'fashion' | 'finance' | 'health' | 'ecommerce' | 'agency' | 'saas' | 'gaming' | 'education' | 'food';

export type Vibe = 'luxury' | 'modern' | 'minimalist' | 'futuristic' | 'playful' | 'premium' | 'elegant' | 'bold' | 'edgy' | 'trustworthy';

export type LengthFilter = 'short' | 'medium' | 'long' | 'any';

export type NameStyle = 'startup' | 'brandable' | 'premium' | 'futuristic';

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
