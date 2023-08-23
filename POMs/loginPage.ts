import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly emailInputField: Locator;
    readonly passwordInputField: Locator;
    readonly showHideButton: Locator;
    readonly loginButton: Locator;
    readonly emailErrorMessage: Locator;
    readonly passwordErrorMessage: Locator;
    readonly registerButtonn: Locator;
    readonly

    constructor(page: Page) {
        this.page = page;
        this.emailInputField = page.locator('label').filter({ hasText: 'Email' }).locator('div');
        this.passwordInputField = page.locator('label').filter({ hasText: 'Password' }).locator('div').first();
        this.showHideButton = page.locator('label').filter({ hasText: 'Password' }).getByRole('img');
        this.loginButton = page.getByRole('button', { name: 'Log In' });
        this.emailErrorMessage = page.locator('div').filter({ hasText: /^Incorrect email or password$/ }).first();
        this.passwordErrorMessage = page.locator('div').filter({ hasText: /^Incorrect email or password$/ }).nth(2);
        this.registerButtonn = page.locator('button', { hasText: 'Register' });
    }

    async login(emailValue: string, passwordValue: string) {
        await this.emailInputField.fill(emailValue);
        await this.passwordInputField.fill(passwordValue);
        await this.loginButton.click();
    

    }

    async assertHomePageLink(){
        await expect(this.page).toHaveURL('https://cobe-accounting.herokuapp.com/home/Offers?page=1');

    }

    

    async visibility(emailValue: string, passwordValue: string) {
        await this.emailInputField.fill(emailValue);
        await this.passwordInputField.fill(passwordValue);
        await this.showHideButton.click();


    }

    async assertErrorMessageIsVisible() {
        await expect(this.emailErrorMessage).toBeVisible();
        await expect(this.passwordErrorMessage).toBeVisible();
    }


    async register() {
        await expect(this.registerButtonn).toBeHidden();

    }

}