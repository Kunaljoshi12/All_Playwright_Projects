import { Page } from '@playwright/test';

export const gotoTablePage = async (page: Page): Promise<void> => {
    await page.goto('https://www.w3schools.com/html/html_tables.asp', { timeout: 60000 });
};