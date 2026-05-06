import { test, expect } from '@playwright/test';
import 'dotenv/config'; // This loads the .env variables immediately upon import

import { InputsPage } from '../pages/InputsPage';
import { getTestDataFromDB } from '../lib/dbClient';
test.use({ 
    launchOptions: { 
        slowMo: 500 
    } 
});

test.describe('MySQL Data-Driven Suite', () => {

    test('Execute Sequential DB Tests', async ({ page }) => {
        // Increase timeout for 50 DB rows + slowMo delay
        test.setTimeout(120000); 

        const data = await getTestDataFromDB();
        const inputsPage = new InputsPage(page);
        
        await inputsPage.navigate();

        for (const row of data) {
            await test.step(`Testing DB Case: ${row.test_case_name}`, async () => {
                const valueToEnter = row.input_value.toString();
                
                await inputsPage.enterNumber(valueToEnter);
                
                const actualValue = await inputsPage.getInputValue();
                expect(actualValue).toBe(valueToEnter);
                
                // Pause so you can see the DB data entry
                await page.waitForTimeout(1000);
            });
        }
    });
});