import { generateCanonicalUrl } from './utils';

export function buildCanonical(slug: string): string {
  return generateCanonicalUrl(slug);
}
