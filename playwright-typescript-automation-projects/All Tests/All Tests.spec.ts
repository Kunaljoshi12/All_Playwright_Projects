import { test, expect, Locator } from '@playwright/test';
import { gotoTablePage } from './helpers.spec';

test("XPath self axis", async ({ page }) => {
    await gotoTablePage(page);
    const self: Locator = page.locator("//td[text()='Maria Anders']/self::td");
    await expect(self).toHaveText("Maria Anders");
});

test("XPath parent axis", async ({ page }) => {
    await gotoTablePage(page);
    const parent: Locator = page.locator("//td[text()='Francisco Chang']/parent::tr");
    await expect(parent).toContainText("Mexico");
    const texts = await parent.allTextContents();
    console.log(texts.map(t => t.replace(/\s+/g, ' ').trim()));
});

test("XPath child axis", async ({ page }) => {
    await gotoTablePage(page);
    const secondcell: Locator = page.locator("//table[@id='customers']//tr[3]/child::td");
    await expect(secondcell).toHaveCount(3);
    await expect(secondcell.nth(1)).toHaveText("Francisco Chang");
});

test("XPath ancestor axis", async ({ page }) => {
    await gotoTablePage(page);
    const table: Locator = page.locator("//td[text()='Germany']/ancestor::table");
    await expect(table).toHaveAttribute('class', 'ws-table-all');
});

test("XPath descendant axis", async ({ page }) => {
    await gotoTablePage(page);
    const allTds: Locator = page.locator("//table[@id='customers']/descendant::td");
    await expect(allTds).toHaveCount(18);
});

test("XPath following axis", async ({ page }) => {
    await gotoTablePage(page);
    const Following: Locator = page.locator("//td[normalize-space()='Germany']/following::td[1]");
    await expect(Following).toHaveText("Centro comercial Moctezuma");
});

test("XPath following-sibling axis", async ({ page }) => {
    await gotoTablePage(page);
    const FollowingSibling: Locator = page.locator("//td[normalize-space()='Maria Anders']/following-sibling::td");
    await expect(FollowingSibling).toHaveCount(1);
});

test("XPath preceding axis", async ({ page }) => {
    await gotoTablePage(page);
    const PrecedingCell: Locator = page.locator("//td[text()='Germany']/preceding-sibling::td[1]");
    await expect(PrecedingCell).toHaveText("Maria Anders");
});

test("XPath preceding-sibling axis", async ({ page }) => {
    await gotoTablePage(page);
    const Precedingsibling: Locator = page.locator("//td[text()='Germany']/preceding-sibling::td");
    await expect(Precedingsibling).toHaveText(["Alfreds Futterkiste", "Maria Anders"]);
});