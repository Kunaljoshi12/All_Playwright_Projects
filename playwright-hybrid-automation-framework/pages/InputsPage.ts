import { Page, Locator, expect } from '@playwright/test';

export class InputsPage {
  // Define types for the page and locators
  private readonly page: Page;
  private readonly inputField: Locator;
  private readonly pageHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    // Locator for the number input field on 'The Internet' page
    this.inputField = page.locator('input[type="number"]');
    this.pageHeader = page.locator('h3');
  }

  /**
   * Navigates to the Inputs page
   */
  async navigate() {
    await this.page.goto('/inputs');
    await expect(this.pageHeader).toHaveText('Inputs');
  }

  /**
   * Clears the field and enters a new value
   * @param value The string representation of the number to enter
   */
  async enterNumber(value: string) {
    // Playwright's fill() automatically waits for the element to be actionable
    await this.inputField.clear();
    await this.inputField.fill(value);
  }

  /**
   * Retrieves the current value from the input field
   * Useful for assertions in your test scripts
   */
  async getInputValue(): Promise<string> {
    return await this.inputField.inputValue();
  }
}