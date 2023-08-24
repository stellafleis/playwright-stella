import { expect, test } from '@playwright/test';
import { LoginPage } from '../POMs/loginPage';
import { LoginEnvironments } from '../environments/loginEnvironments';

test('Login with correct credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const loginEnvironments = new LoginEnvironments(page);

    await page.goto(loginEnvironments.baseUrl);
    await loginPage.login(loginEnvironments.validEmail, loginEnvironments.validPassword);
    await loginPage.assertHomeSectionIsDisplayed();

});

test('Login with incorrect credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const loginEnvironments = new LoginEnvironments(page);

    await page.goto(loginEnvironments.baseUrl);
    await loginPage.login(loginEnvironments.invalidEmail, loginEnvironments.invalidPassword);
    await loginPage.assertErrorMessageIsVisible();

});

test('Error message when loging in with incorrect credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const loginEnvironments = new LoginEnvironments(page);

    await page.goto(loginEnvironments.baseUrl);
    await loginPage.login(loginEnvironments.invalidEmail, loginEnvironments.invalidPassword);
    await loginPage.assertErrorMessageIsVisible();


});

test('Show or Hide Password Button', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const loginEnvironments = new LoginEnvironments(page);

    await page.goto(loginEnvironments.baseUrl)
    await loginPage.assertPasswordIsVisible(loginEnvironments.validPassword);


});


test('Nonexistant registar option', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const loginEnvironments = new LoginEnvironments(page);

    await page.goto(loginEnvironments.baseUrl);
    await loginPage.register();
});