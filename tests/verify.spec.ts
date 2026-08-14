import { test, expect } from '@playwright/test';

const targetUrls = [
  '/blog/complete-guide-to-brand-guidelines',
  '/industries/microbrewery-names',
  '/industries/foodtruck-names',
  '/industries/boutiquehotel-names',
  '/industries/glamping-business-names',
  '/industries/telehealth-startup-names',
  '/industries/medtech-company-names',
  '/industries/edtech-startup-names',
  '/industries/proptech-company-names',
  '/industries/insurtech-startup-names',
  '/industries/cleantech-company-names'
];

test.describe('SEO and Page Validation', () => {
  for (const url of targetUrls) {
    test(`Validates page: ${url}`, async ({ page }) => {
      // Listen for console errors
      const errors: string[] = [];
      page.on('console', msg => {
        if (msg.type() === 'error') {
          errors.push(msg.text());
        }
      });

      const response = await page.goto(`http://localhost:3000${url}`);

      // Verify HTTP 200 OK
      expect(response?.status()).toBe(200);

      // Verify zero console errors
      expect(errors.length).toBe(0);

      // Verify exactly 1 H1
      const h1Count = await page.locator('h1').count();
      expect(h1Count).toBe(1);
    });
  }
});

test('Core Brand Naming Tool Flow', async ({ page }) => {
  // Wait for the hydration to complete
  await page.goto('http://localhost:3000/');

  // Need to ensure exactly 1 header
  const h1Count = await page.locator('h1').count();
  expect(h1Count).toBe(1);

  // Submit generator
  await page.click('button:has-text("Generate Names")');

  // Verify that brand DNA appears
  await page.waitForSelector('[data-testid="brand-card"]', { state: 'visible', timeout: 5000 });
  const cardsCount = await page.locator('[data-testid="brand-card"]').count();
  expect(cardsCount).toBeGreaterThan(0);

  // Need to save one and go to workspace. Wait for first button to appear then interact
  await page.locator('button:has-text("Build Brand Identity")').first().click();

  // Navigate to workspace
  await page.waitForURL('http://localhost:3000/workspace');
  await expect(page).toHaveURL('http://localhost:3000/workspace');

  // Find the button and open the brand kit
  await page.waitForSelector('button:has-text("Open Brand Kit")', { state: 'visible' });
  await page.locator('button:has-text("Open Brand Kit")').first().click();

  // Validate DNA display elements exist in DOM via text matching
  await expect(page.locator('text=Archetype').first()).toBeVisible();
  await expect(page.locator('text=Voice').first()).toBeVisible();
  await expect(page.locator('text=Typography').first()).toBeVisible();
});
