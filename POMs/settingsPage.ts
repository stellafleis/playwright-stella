import { expect, Locator, Page } from '@playwright/test';

export class SettingsPage {
    readonly page: Page;
    readonly homeLink: Locator;
    readonly clientsLink: Locator;
    readonly offersLink: Locator;
    readonly invoicesLink: Locator;
    readonly logoutButton: Locator;
    readonly confirmButton: Locator;
    readonly

    constructor(page: Page) {
        this.page = page;
        this.homeLink = page.getByRole('link', { name: 'Home' });
        this.clientsLink = page.getByRole('link', { name: 'Clients' });
        this.offersLink = page.getByRole('link', { name: 'Offers' });
        this.invoicesLink = page.getByRole('link', { name: 'Invoices' });
        this.logoutButton = page.getByText('Log out');
        this.confirmButton = page.getByRole('button', { name: 'Confirm' })
    }

    async logout() {
        await this.logoutButton.click();
        await this.confirmButton.click();
    }

    async assertLoginPageLink(){
        await expect(this.page).toHaveURL('https://cobe-accounting.herokuapp.com/');
    }

    async assertSuccessfulCancellation(){
        
    }

}