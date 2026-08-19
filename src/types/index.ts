export type Industry = 'tech' | 'vr' | 'space' | 'esports' | 'influencer' | 'drone' | 'printing3d' | 'ai' | 'beauty' | 'fitness' | 'fashion' | 'finance' | 'health' | 'ecommerce' | 'agency' | 'saas' | 'gaming' | 'education' | 'food' | 'medical' | 'nutrition' | 'marketing' | 'design' | 'coffee' | 'restaurant' | 'skincare' | 'clothing' | 'cybersecurity' | 'crypto' | 'solar' | 'robotics' | 'logistics' | 'biotech' | 'travel' | 'hospitality' | 'pet' | 'music' | 'automotive' | 'legal' | 'accounting' | 'architecture' | 'wedding' | 'landscaping' | 'plumbing' | 'bakery' | 'brewery' | 'spa' | 'tattoo' | 'roofing' | 'hvac' | 'event' | 'interior' | 'childcare' | 'yoga' | 'publishing' | 'insurance' | 'manufacturing' | 'aviation' | 'agriculture' | 'entertainment' | 'telecom' | 'pharmaceutical' | 'construction' | 'maritime' | 'mining' | 'forestry' | 'retail' | 'media' | 'florist' | 'barbershop' | 'cafe' | 'moving' | 'sustainability' | 'hardware' | 'delivery' | 'therapy' | 'jewelry' | 'furniture' | 'organic' | 'fintech' | 'web3' | 'catering' | 'wind' | 'hydro' | 'ev' | 'battery' | 'smarthome' | 'iot' | 'wearables' | 'ar' | 'quantum' | 'nanotech' | 'microbrewery' | 'foodtruck' | 'boutiquehotel' | 'glamping' | 'telehealth' | 'medtech' | 'edtech' | 'proptech' | 'insurtech' | 'cleantech' | 'towing' | 'pool-cleaning' | 'pest-control' | 'electrician' | 'locksmith' | 'tree-service' | 'waste-management' | 'paving' | 'fencing' | 'home-inspection';

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
