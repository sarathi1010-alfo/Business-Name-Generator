
import { test, expect } from '@playwright/test';

const urls = [
  '/blog/choose-standout-brand-name',
  '/name-styles/descriptive-brand-names',
  '/name-styles/evocative-brand-names',
  '/name-styles/abstract-brand-names',
  '/name-styles/acronym-brand-names',
  '/industries/tech-startup-names',
  '/industries/fashion-brand-names',
  '/industries/food-beverage-names',
  '/industries/health-wellness-names',
  '/archetypes/hero-brand-names',
  '/archetypes/outlaw-brand-names',
  '/blog/what-is-brand-identity',
  '/blog/brand-identity-vs-brand-image',
];

test.describe('Daily Publish Integrity Check', () => {
  for (const url of urls) {
    test(`Verify ${url} loads correctly`, async ({ page }) => {
      // Catch console errors
      const errors: string[] = [];
      page.on('console', msg => {
        if (msg.type() === 'error') errors.push(msg.text());
      });
      page.on('pageerror', err => errors.push(err.message));

      const response = await page.goto(`http://localhost:3000${url}`);
      expect(response?.status()).toBe(200);

      // Check for exactly one H1
      const h1Count = await page.locator('h1').count();
      expect(h1Count).toBe(1);

      // Verify no console errors occurred during load
      expect(errors, `Console errors detected on ${url}: ${errors.join(', ')}`).toHaveLength(0);
    });
  }

  test('Verify core naming generation and brand kit display', async ({ page }) => {
    // Catch console errors
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    page.on('pageerror', err => errors.push(err.message));

    await page.goto('http://localhost:3000/');

    // Check main H1
    await expect(page.getByRole('heading', { name: 'Launch an elite brand identity in seconds.' })).toBeVisible();

    // Generate names
    const generateBtn = page.getByRole('button', { name: /Generate Names/i });
    await generateBtn.click();

    // Check if results are displayed
    const buildIdentityBtns = page.getByRole('button', { name: /Build Brand Identity/i });
    await expect(buildIdentityBtns.first()).toBeVisible({ timeout: 15000 });

    // Click on the first result
    await buildIdentityBtns.first().click();

    // Wait for workspace redirection
    await page.waitForURL(/\/workspace/, { timeout: 10000 });

    // In workspace, click "Open Brand Kit"
    const openKitBtn = page.getByRole('button', { name: /Open Brand Kit/i });
    await expect(openKitBtn.first()).toBeVisible();
    await openKitBtn.first().click();

    // Verify DNA components
    await expect(page.getByText(/Archetype/i).first()).toBeVisible();
    await expect(page.getByText(/Typography/i).first()).toBeVisible();
    await expect(page.getByText(/Palette/i).first()).toBeVisible();
    await expect(page.getByText(/Voice/i).first()).toBeVisible();

    // Verify no console errors
    expect(errors, `Console errors detected: ${errors.join(', ')}`).toHaveLength(0);
  });
});
