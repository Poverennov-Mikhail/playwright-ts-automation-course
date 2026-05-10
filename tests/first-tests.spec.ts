import { test, expect } from '@playwright/test';

test.describe('Мои первые тесты', () => {

  test('Открытие главной страницы saucedemo и проверка заголовка', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page.locator('.login_logo')).toBeVisible();
    await expect(page).toHaveTitle(/Swag Labs/);
  });

  test('Проверка формы логина (позитивный сценарий)', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await expect(page).toHaveURL(/.*inventory.html/);
    await expect(page.locator('.inventory_list')).toBeVisible();
  });
});