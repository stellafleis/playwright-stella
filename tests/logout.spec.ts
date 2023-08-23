import { test, expect } from '@playwright/test';
import { LoginPage } from '../POMs/loginPage';
import { HomePage } from '../POMs/homePage';
import { SettingsPage } from '../POMs/settingsPage';
import { LoginEnvironments } from '../environments/loginEnvironments';

test('Logout from Settings', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const loginEnvironments = new LoginEnvironments(page);

    await page.goto(loginEnvironments.baseUrl);
    await loginPage.login(loginEnvironments.validEmail, loginEnvironments.validPassword);

    const homePage = new HomePage(page);
    await homePage.settingsLink.click();

    const settingsPage = new SettingsPage(page);
    await settingsPage.logout();
    await settingsPage.assertLoginPageLink();
});