import { dictionary } from '../data/dictionary';
import { useState, useCallback, useEffect } from 'react';
import { GenerationFilters, GeneratedName } from '../types';
import { generateNames } from '../lib/generateNames';
import { useRouter, useSearchParams } from 'next/navigation';
import { generateBrandDNA } from '../lib/brand-engine';

const DEFAULT_FILTERS: GenerationFilters = {
  industry: 'tech',
  vibe: 'modern',
  length: 'any',
  style: 'startup',
  isTwoWords: false,
};

export function useGenerator(initialOverrides?: Partial<GenerationFilters>) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState<GenerationFilters>(() => {
    // Read from URL or use defaults/overrides
    const urlIndustry = searchParams.get('industry');
    const urlVibe = searchParams.get('vibe');
    const urlLength = searchParams.get('length');
    const urlStyle = searchParams.get('style');

    return {
      ...DEFAULT_FILTERS,
      ...initialOverrides,
      industry: (Object.keys(dictionary.industryTokens).includes(urlIndustry as string) ? urlIndustry : initialOverrides?.industry || DEFAULT_FILTERS.industry) as import("../types").Industry,
      vibe: (Object.keys(dictionary.vibeTokens).includes(urlVibe as string) ? urlVibe : initialOverrides?.vibe || DEFAULT_FILTERS.vibe) as import("../types").Vibe,
      length: (urlLength as import("../types").LengthFilter) || initialOverrides?.length || DEFAULT_FILTERS.length,
      style: (urlStyle as import("../types").NameStyle) || initialOverrides?.style || DEFAULT_FILTERS.style,
      isTwoWords: searchParams.get('isTwoWords') === 'true' || initialOverrides?.isTwoWords || DEFAULT_FILTERS.isTwoWords,
    };
  });

  const [results, setResults] = useState<GeneratedName[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const updateFilter = useCallback(<K extends keyof GenerationFilters>(key: K, value: GenerationFilters[K]) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  }, []);

  const generate = useCallback(() => {
    setIsGenerating(true);
    // Sync to URL
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([k, v]) => {
      params.set(k, String(v));
    });
    router.replace(`/?${params.toString()}`, { scroll: false });

    // Simulate slight delay for UX (perceived generation time)
    setTimeout(() => {
      const newNames = generateNames(filters, 24).map(nameObj => ({
        ...nameObj,
        dna: generateBrandDNA(filters.industry, filters.vibe)
      }));
      setResults(newNames);
      setIsGenerating(false);
    }, 600);
  }, [filters, router]);

  // Initial generate on mount if no results
  useEffect(() => {
    if (results.length === 0 && !isGenerating) {
      setTimeout(() => generate(), 0);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    filters,
    updateFilter,
    results,
    isGenerating,
    generate
  };
}
