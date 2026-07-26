import { test } from '@playwright/test';
import { OpenCartHomePage } from './pages/opencart-home.page';

test('searches for MacBook and verifies MacBook Air is listed', async ({ page }) => {
  const homePage = new OpenCartHomePage(page);

  await homePage.goto();
  await homePage.searchFor('MacBook');
  await homePage.expectProductVisible('MacBook Air');
});
