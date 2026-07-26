import { expect, Locator, Page } from '@playwright/test';

export class OpenCartHomePage {
  readonly page: Page;
  readonly searchInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('input[name="search"]');
  }

  async goto() {
    await this.page.goto('https://demo.opencart.com/');
  }

  async searchFor(productName: string) {
    await expect(this.searchInput).toBeVisible({ timeout: 100000 });
    await this.searchInput.fill(productName);
    await this.searchInput.press('Enter');
  }

  async expectProductVisible(productName: string) {
    const productLink = this.page.getByRole('link', { name: productName });
    await expect(productLink).toBeVisible({ timeout: 30000 });
  }
}
