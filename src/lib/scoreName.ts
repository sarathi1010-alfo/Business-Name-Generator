import { GeneratedName } from '../types';

/**
 * Heuristics for scoring a generated name.
 * We want to evaluate:
 * - pronounceability: alternating vowels and consonants
 * - domain-likeliness: shorter is better, no weird characters
 * - uniqueness: uses some invented or rare fragments
 * - visual symmetry: balanced length, good looking letters (o, m, v, a)
 */

const VOWELS = ['a', 'e', 'i', 'o', 'u', 'y'];

function getPronounceability(name: string): number {
  let score = 80;
  let consecutiveVowels = 0;
  let consecutiveConsonants = 0;

  for (let i = 0; i < name.length; i++) {
    const char = name[i].toLowerCase();
    if (VOWELS.includes(char)) {
      consecutiveVowels++;
      consecutiveConsonants = 0;
    } else {
      consecutiveConsonants++;
      consecutiveVowels = 0;
    }

    if (consecutiveConsonants > 2) score -= 15;
    if (consecutiveVowels > 2) score -= 10;
  }

  return Math.max(10, Math.min(100, score));
}

function getDomainLikeliness(name: string): number {
  let score = 100;
  // Shorter domains are better
  if (name.length > 10) score -= (name.length - 10) * 5;
  if (name.length < 5) score += 10;

  // Fake "availability" heuristic based on length and common letters


  return Math.max(10, Math.min(100, score));
}

function getSymmetry(name: string): number {
  let score = 70;
  const symmetricLetters = ['o', 'm', 'v', 'a', 'x', 'w', 'h', 'i'];
  let symCount = 0;

  for (const char of name.toLowerCase()) {
    if (symmetricLetters.includes(char)) symCount++;
  }

  score += (symCount / name.length) * 40;
  return Math.max(10, Math.min(100, score));
}

function getUniqueness(name: string): number {
  // A bit arbitrary without a real corpus, but we can give bonus for 'z', 'x', 'q', 'v'
  let score = 60;
  const rareLetters = ['z', 'x', 'q', 'v', 'k'];
  for (const char of name.toLowerCase()) {
    if (rareLetters.includes(char)) score += 15;
  }
  return Math.max(10, Math.min(100, score));
}

export function scoreName(name: string): Pick<GeneratedName, 'score' | 'domainAvailabilityScore'> {
  const pronounceability = getPronounceability(name);
  const domainLikeliness = getDomainLikeliness(name);
  const symmetry = getSymmetry(name);
  const uniqueness = getUniqueness(name);

  const total = Math.round((pronounceability * 0.4) + (domainLikeliness * 0.2) + (symmetry * 0.1) + (uniqueness * 0.3));

  // Pseudo-random but deterministic-ish domain availability
  // We use the length and char codes to generate a stable fake score
  let charSum = 0;
  for(let i=0; i<name.length; i++) charSum += name.charCodeAt(i);
  const domainAvailabilityScore = (charSum % 60) + 40; // 40 to 99

  return {
    score: {
      total,
      pronounceability,
      domainLikeliness,
      uniqueness,
      symmetry
    },
    domainAvailabilityScore
  };
}
