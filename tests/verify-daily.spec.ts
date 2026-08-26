import { test, expect } from '@playwright/test';

const urls = [

  '/blog/how-to-build-a-personal-brand',
  '/industries/massage-therapy-names',
  '/industries/acupuncture-names',
  '/industries/chiropractor-names',
  '/industries/physical-therapy-names',
  '/industries/personal-trainer-names',
  '/industries/nutritionist-names',
  '/industries/life-coach-names',
  '/industries/career-coach-names',
  '/industries/business-coach-names',
  '/industries/tutoring-names'
,
  '/name-styles/alliteration-brand-names',
  '/name-styles/alphanumeric-brand-names',
  '/name-styles/foreign-word-brand-names',
  '/name-styles/dictionary-word-brand-names',
  '/industries/florist-names',
  '/industries/barbershop-names',
  '/industries/cafe-names',
  '/industries/moving-company-names',
  '/archetypes/innovator-brand-names',
  '/archetypes/guide-brand-names',
  '/blog/how-to-name-local-business'
];

test.describe('Daily Content Engine Verification', () => {
  for (const url of urls) {
    test(`Verify ${url}`, async ({ page }) => {
      // 1. Check HTTP 200 (Playwright handles this implicitly, but we can verify no 404 text)
      const response = await page.goto(url);
      expect(response?.status()).toBe(200);

      // 2. Check exactly one H1
      const h1Count = await page.locator('h1').count();
      expect(h1Count).toBe(1);

      // 3. Console error checking
      const errors: string[] = [];
      page.on('pageerror', error => errors.push(error.message));
      page.on('console', msg => {
        if (msg.type() === 'error') errors.push(msg.text());
      });

      // Wait a bit for potential JS errors
      await page.waitForTimeout(1000);
      expect(errors).toEqual([]);
    });
  }

  test('Core Functionality Test', async ({ page }) => {
    await page.goto('/');

    // Check if name generator creates names (cards should exist)
    await page.waitForSelector('[data-testid="brand-card"]');
    const cardsCount = await page.locator('[data-testid="brand-card"]').count();
    expect(cardsCount).toBeGreaterThan(0);
  });
});
