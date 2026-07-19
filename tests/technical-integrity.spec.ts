
import { test, expect } from '@playwright/test';

const urls = [
  '/blog/how-to-build-brand-strategy',
  '/name-styles/portmanteau-brand-names',
  '/name-styles/founder-brand-names',
  '/name-styles/compound-brand-names',
  '/name-styles/invented-brand-names',
  '/industries/ai-company-names',
  '/industries/saas-business-names',
  '/industries/beauty-brand-names',
  '/industries/finance-startup-names',
  '/archetypes/creator-brand-names',
  '/archetypes/sage-brand-names',
];

test.describe('Technical Integrity Check', () => {
  for (const url of urls) {
    test(`Verify ${url} loads correctly`, async ({ page }) => {
      const response = await page.goto(`http://localhost:3000${url}`);
      expect(response?.status()).toBe(200);

      // Check for single H1
      const h1Count = await page.locator('h1').count();
      expect(h1Count).toBe(1);

      // Check for console errors
      page.on('console', msg => {
        if (msg.type() === 'error') {
          throw new Error(`Console error detected: ${msg.text()}`);
        }
      });
    });
  }

  test('Verify core naming generation functionality', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    // Check main H1
    await expect(page.getByRole('heading', { name: 'Launch an elite brand identity in seconds.' })).toBeVisible();

    // Generate names (click button)
    const generateBtn = page.getByRole('button', { name: /Generate Names/i });
    await generateBtn.click();

    // Check if results are displayed
    const results = page.locator('button').filter({ hasText: /Build Brand Identity/i });
    await expect(results.first()).toBeVisible({ timeout: 10000 });

    // Click on a result to see Brand DNA
    await results.first().click();

    // Wait for workspace display
    await page.waitForURL(/\/workspace/);

    // In workspace, click "Open Brand Kit"
    const openKitBtn = page.getByRole('button', { name: /Open Brand Kit/i });
    await expect(openKitBtn.first()).toBeVisible();
    await openKitBtn.first().click();

    // Verify DNA components are now displayed in the detailed view
    await expect(page.getByText(/Archetype/i).first()).toBeVisible();
    await expect(page.getByText(/Typography/i).first()).toBeVisible();
    await expect(page.getByText(/Palette/i).first()).toBeVisible();
    await expect(page.getByText(/Identity/i).first()).toBeVisible();
  });
});
