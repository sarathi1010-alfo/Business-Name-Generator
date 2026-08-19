import { test, expect } from '@playwright/test';

const urls = [
  '/blog/how-to-build-a-startup-brand',
  '/industries/towing-names',
  '/industries/pool-cleaning-names',
  '/industries/pest-control-names',
  '/industries/electrician-names',
  '/industries/locksmith-names',
  '/industries/tree-service-names',
  '/industries/waste-management-names',
  '/industries/paving-names',
  '/industries/fencing-names',
  '/industries/home-inspection-names'
];

test.describe('Daily Content Engine Verification', () => {
  for (const url of urls) {
    test(`Verify ${url}`, async ({ page }) => {
      const response = await page.goto(url);
      expect(response?.status()).toBe(200);

      const h1Count = await page.locator('h1').count();
      expect(h1Count).toBe(1);

      const errors: string[] = [];
      page.on('pageerror', error => errors.push(error.message));
      page.on('console', msg => {
        if (msg.type() === 'error') errors.push(msg.text());
      });

      await page.waitForTimeout(1000);
      expect(errors).toEqual([]);
    });
  }

  test('Core Functionality Test', async ({ page }) => {
    await page.goto('/');

    await page.waitForSelector('[data-testid="brand-card"]');
    const cardsCount = await page.locator('[data-testid="brand-card"]').count();
    expect(cardsCount).toBeGreaterThan(0);
  });
});
