import { test, expect } from '../../src/fixtures/base';
import { InventoryPage } from '../../src/pages/InventoryPage';
import { LoginPage } from '../../src/pages/LoginPage';
import users from '../data/users.json';

test.describe('SauceDemo login', () => {
  test('standard user can log in successfully @smoke @critical', async ({ page }) => {
    const loginPage = new LoginPage(page);
    let inventoryPage: InventoryPage;

    await test.step('Open the login page', async () => {
      await loginPage.goto();
      await expect(loginPage.usernameInput).toBeVisible();
      await expect(loginPage.passwordInput).toBeVisible();
      await expect(loginPage.loginButton).toBeVisible();
    });

    await test.step('Log in with the standard user credentials', async () => {
      inventoryPage = await loginPage.loginAs(users.standard);
    });

    await test.step('Verify the inventory page', async () => {
      await expect(page).toHaveURL(/\/inventory\.html$/);
      await expect(inventoryPage.productsHeading).toBeVisible();
    });
  });
});
