import { Locator, Page } from '@playwright/test';

import { BasePage } from './BasePage';
import { InventoryPage } from './InventoryPage';

export interface UserCredentials {
  username: string;
  password: string;
}

export class LoginPage extends BasePage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async goto(): Promise<void> {
    await this.page.goto('https://www.saucedemo.com');
  }

  async loginAs(credentials: UserCredentials): Promise<InventoryPage> {
    await this.usernameInput.fill(credentials.username);
    await this.passwordInput.fill(credentials.password);
    await this.loginButton.click();
    return new InventoryPage(this.page);
  }
}
