# GSC Technical Hygiene & Fix Plan - BrandForge

## Status Audit (Simulated)
Based on current repository state and architecture:
- **Excluded (noindex):** `/api/*` and `/workspace/*` are correctly excluded via `src/middleware.ts` to prevent indexing of private/functional routes.
- **Discovered - currently not indexed:** New programmatic routes (`/name-styles/*`, `/industries/*`, `/archetypes/*`) may experience a delay.
- **404 Errors:** No broken internal links detected during crawl.

## Fix & Optimization Plan

### 1. Resolve Coverage Issues
- **Action:** Monitor GSC "Pages" report for "Discovered - currently not indexed".
- **Fix:** If pages remain unindexed for >7 days, increase internal link density from high-authority blog posts and ensure they are present in the relevant sitemaps (`sitemap-articles.xml`, `sitemap-products.xml`).

### 2. Standard Technical Hygiene
- **Canonical Alignment:** Ensure all URLs in sitemaps strictly match the canonicals defined in `src/middleware.ts` (lowercase, no trailing slash).
- **IndexNow Integration:** Continue triggering the IndexNow API for all new and updated content to signal freshness to Bing and Yandex.
- **Sitemap Pinging:** Manually ping Google with updated sitemap URLs after major content deployments.

### 3. Monitoring
- Weekly check of GSC "Core Web Vitals" to ensure the high-end cinematic design doesn't impact performance.
- Monthly audit of "Search Results" to identify new long-tail keyword opportunities for future programmatic pages.
