import { GenerationFilters, GeneratedName } from '../types';
import { dictionary } from '../data/dictionary';
import { scoreName } from './scoreName';

function sample<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateSingleName(filters: GenerationFilters): string {
  const { industry, vibe, style, isTwoWords } = filters;

  const indTokens = dictionary.industryTokens[industry] || dictionary.roots;
  const vibeTokens = dictionary.vibeTokens[vibe] || dictionary.prefixes;

  const structureRoll = Math.random();

  if (isTwoWords) {
    return `${sample(vibeTokens)} ${sample(indTokens)}`;
  }

  if (style === 'startup' || style === 'futuristic') {
    if (structureRoll < 0.3) return `${sample(vibeTokens)}${sample(dictionary.suffixes)}`;
    if (structureRoll < 0.6) return `${sample(dictionary.prefixes)}${sample(indTokens).toLowerCase()}`;
    return sample(dictionary.invented);
  }

  if (style === 'brandable' || style === 'premium') {
    if (structureRoll < 0.4) return `${sample(vibeTokens)}${sample(indTokens).toLowerCase()}`;
    if (structureRoll < 0.8) return `${sample(dictionary.roots)}${sample(dictionary.suffixes)}`;
    return `${sample(dictionary.prefixes)}${sample(dictionary.roots).toLowerCase()}`;
  }

  // Fallback hybrid
  return `${sample(vibeTokens)}${sample(indTokens).toLowerCase()}`;
}

export function generateNames(filters: GenerationFilters, count: number = 20): GeneratedName[] {
  const results: GeneratedName[] = [];
  const seen = new Set<string>();

  let attempts = 0;
  while (results.length < count && attempts < count * 5) {
    attempts++;
    const nameStr = generateSingleName(filters);

    // Simple length filter
    const len = nameStr.replace(' ', '').length;
    if (filters.length === 'short' && len > 6) continue;
    if (filters.length === 'long' && len < 9) continue;
    if (filters.length === 'medium' && (len < 6 || len > 9)) continue;

    if (!seen.has(nameStr)) {
      seen.add(nameStr);

      const taglines = dictionary.taglines[filters.industry] || dictionary.taglines["tech"];
      const tagline = Math.random() > 0.5 ? sample(taglines) : undefined;

      const scores = scoreName(nameStr);

      results.push({
        id: crypto.randomUUID(),
        name: nameStr,
        tagline,
        ...scores,
        filtersUsed: { ...filters }
      });
    }
  }

  // Sort by total score descending
  return results.sort((a, b) => b.score.total - a.score.total);
}
