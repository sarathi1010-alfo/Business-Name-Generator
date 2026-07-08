import { test, expect } from '@playwright/test';

const baseUrl = 'http://localhost:3000';

const urls = [
  '/',
  '/blog/choose-standout-brand-name',
  '/blog/what-is-brand-identity',
  '/blog/brand-identity-vs-brand-image',
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
];

test.describe('Technical Integrity & Functional Verification', () => {
  for (const url of urls) {
    test(`Verify ${url} returns 200 OK and has no console errors`, async ({ page }) => {
      const consoleErrors: string[] = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') consoleErrors.push(msg.text());
      });

      const response = await page.goto(`${baseUrl}${url}`);
      expect(response?.status()).toBe(200);
      expect(consoleErrors).toHaveLength(0);
    });
  }

  test('Verify core naming generation functionality', async ({ page }) => {
    await page.goto(baseUrl);

    // Ensure the page loaded
    await expect(page.getByRole('heading', { name: 'Launch an elite brand identity in seconds.' })).toBeVisible();

    // The tool uses Industry/Vibe/Style selects
    const selects = page.locator('select');
    await selects.nth(0).selectOption('food'); // Industry
    await selects.nth(1).selectOption('luxury'); // Vibe

    const generateButton = page.getByRole('button', { name: /Generate Names/i });
    await generateButton.click();

    // Wait for generation (results should appear)
    const nameCards = page.locator('.group\\/card');
    await expect(nameCards.first()).toBeVisible({ timeout: 15000 });

    // Expand a name card to see complete DNA
    await nameCards.first().click();

    // Verify Brand DNA elements are shown in the expanded card
    await expect(page.locator('text=Archetype')).toBeVisible();
    await expect(page.locator('text=Typography')).toBeVisible();
    await expect(page.locator('text=Palette')).toBeVisible();
    await expect(page.locator('text=Voice')).toBeVisible();
  });
});
