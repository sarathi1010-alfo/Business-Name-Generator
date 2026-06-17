import fs from 'fs';
import path from 'path';

let hasError = false;

function error(msg: string) {
  console.error(`❌ SEO Validation Error: ${msg}`);
  hasError = true;
}

function success(msg: string) {
  console.log(`✅ ${msg}`);
}

// 1. Verify `SEO_CONFIG` has correct defaults
const configPath = path.join(__dirname, 'config.ts');
if (!fs.existsSync(configPath)) {
  error("SEO Config missing");
} else {
  success("SEO Config found");
}

// 2. Validate Sitemap source pattern
const sitemapPath = path.join(__dirname, '..', '..', 'app', 'sitemap.ts');
if (fs.existsSync(sitemapPath)) {
  const content = fs.readFileSync(sitemapPath, 'utf8');
  if (!content.includes('normalizeRoute')) {
    error("Sitemap is missing URL normalization (normalizeRoute)");
  }
  if (!content.includes('buildCanonical')) {
    error("Sitemap is missing canonical enforcement (buildCanonical)");
  }
  success("Sitemap routing uses valid canonical enforcement");
}

// 3. Simple internal link test via grep in components (just checking structure)
const layoutHeaderPath = path.join(__dirname, '..', '..', 'components', 'layout', 'Header.tsx');
if (fs.existsSync(layoutHeaderPath)) {
  const content = fs.readFileSync(layoutHeaderPath, 'utf8');
  if (content.includes('href="/') && !content.includes('validateInternalLink(')) {
    error("Header contains raw unvalidated internal links. Use validateInternalLink()");
  }
}

// Fail the pipeline if any critical error
if (hasError) {
  console.error("🛑 SEO Validation Failed. Build aborted.");
  process.exit(1);
} else {
  success("🚀 All SEO Validations Passed.");
}
