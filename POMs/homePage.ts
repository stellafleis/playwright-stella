import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly homeLink: Locator;
    readonly clientsLink: Locator;
    readonly offersLink: Locator;
    readonly invoicesLink: Locator;
    readonly settingsLink: Locator;
    readonly

    constructor(page: Page) {
        this.page = page;
        this.homeLink = page.getByRole('link', { name: 'Home' });
        this.clientsLink = page.getByRole('link', { name: 'Clients' });
        this.offersLink = page.getByRole('link', { name: 'Offers' });
        this.invoicesLink = page.getByRole('link', { name: 'Invoices' });
        this.settingsLink = page.getByRole('link', { name: 'Settings' });
    }

    async goToSettingsPage() {
        await this.settingsLink.click();
    }
}
