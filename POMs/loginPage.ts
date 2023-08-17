import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly emailInputField: Locator;
    readonly passwordInputField: Locator;
    readonly showHideButton: Locator;
    readonly loginButton: Locator;
    readonly 

    constructor(page: Page) {
        this.page = page;
        this.emailInputField = page.locator('label').filter({ hasText: 'Email' }).locator('div');
        this.passwordInputField = page.locator('label').filter({ hasText: 'Password' }).locator('div').first();
        this.showHideButton = page.locator('label').filter({ hasText: 'Password' }).getByRole('img');
        this.loginButton = page.getByRole('button', { name: 'Log In' });
    }

    async login(emailValue: string, passwordValue: string) {
        await this.emailInputField.fill(emailValue);
        await this.passwordInputField.fill(passwordValue);
        await this.showHideButton.click();
        await this.loginButton.click();
    }
}