import { test, expect } from '@playwright/test';
import { readExcel } from '../utils/excelReader';
import { LoginPage } from '../pages/LoginPage';

const testData = readExcel('./test-data/loginData.xlsx', 'Sheet1');

test.describe('Login Tests - Excel Driven', () => {

  for (const data of testData) {

    test(`Login test with ${data.email}`, async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.navigate();
      await loginPage.login(data.email, data.password);

      const message = await loginPage.getMessage();

      if (data.expectedResult === 'success') {
        expect(message).toContain('Login Successful');
      } else {
        expect(message).toContain('Invalid Credentials');
      }
    });

  }

});