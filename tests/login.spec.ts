import { expect, test } from '@playwright/test';
import { LoginPage } from '../POMs/loginPage';
import { LoginEnvironments } from '../environments/loginEnvironments';

test('Login with correct credentials', async({ page }) => {
    const loginPage = new LoginPage(page);
    const loginEnvironments = new LoginEnvironments(page);

    await page.goto(loginEnvironments.baseUrl);
    await loginPage.login(loginEnvironments.validEmail, loginEnvironments.validPassword);
    await page.waitForURL('https://cobe-accounting.herokuapp.com/home/Offers?page=1');

});

test('Login with incorrect credentials', async({ page }) => {
    const loginPage = new LoginPage(page);
    const loginEnvironments = new LoginEnvironments(page);

    await page.goto(loginEnvironments.baseUrl);
    await loginPage.login(loginEnvironments.invalidEmail, loginEnvironments.invalidPassword);
    await expect(page.locator('div').getByText(/Incorrect email or password/).first()).toBeVisible();

});

test('Error message whenn loging in with incorrect credentials', async({ page }) => {
    const loginPage = new LoginPage(page);
    const loginEnvironments = new LoginEnvironments(page);

    await page.goto(loginEnvironments.baseUrl);
    await loginPage.login(loginEnvironments.invalidEmail, loginEnvironments.invalidPassword);
    await loginPage.assertErrorMessageIsVisible();


});

test('Show or Hide Password Button', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const loginEnvironments = new LoginEnvironments(page);

    await page.goto(loginEnvironments.baseUrl);
    await loginPage.login(loginEnvironments.validEmail, loginEnvironments.validPassword);

    await loginPage.showHideButton.click();
    expect(page.locator('label').filter({ hasText: 'Password' }).getByRole('img'));


});


test('Nonexistant registar option', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const loginEnvironments = new LoginEnvironments(page);

    await page.goto(loginEnvironments.baseUrl);
    await loginPage.register();
});