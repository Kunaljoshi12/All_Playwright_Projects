import { test, expect } from '@playwright/test';
import { InputsPage } from '../pages/InputsPage';
import { ExcelReader } from '../utils/excelReader';


test.use({ 
    launchOptions: { 
        slowMo: 500 
    } 
});

test.describe('Excel Data-Driven Suite', () => {

    test('Execute Sequential Excel Inputs', async ({ page }) => {
        // Increase timeout to 2 minutes for 50 rows + slow motion delay
        test.setTimeout(120000); 

        const inputsPage = new InputsPage(page);
        const dataPath = './data/test_inputs.xlsx';
        
        // Load data from Excel
        const excelRows = await ExcelReader.getTestData(dataPath, 'Sheet1');

        // Navigate once before starting the data loop
        await inputsPage.navigate(); 

        for (const row of excelRows) {
            // Skip empty rows
            if (row.inputValue === undefined || row.inputValue === null) {
                console.warn(`Skipping row: Missing 'inputValue' column data.`);
                continue;
            }

            await test.step(`Testing Value: ${row.inputValue}`, async () => {
                const valueToEnter = row.inputValue.toString();
                
                // Clear and type the new value
                await inputsPage.enterNumber(valueToEnter);
                
                // Verify the input field updated correctly
                const actualValue = await inputsPage.getInputValue();
                expect(actualValue).toBe(valueToEnter);

                
                await page.waitForTimeout(1000);
            });
        }
    });
});