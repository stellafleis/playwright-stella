import { expect, Locator, Page } from '@playwright/test';

export class OfferModalPage {

    readonly page: Page;
    readonly newOfferModal: Locator;
    readonly createOfferButtton: Locator;
    readonly clientDropdown: Locator;
    readonly projectDropdown: Locator;
    readonly languageDropdown: Locator;
    readonly cancelButton: Locator;
    readonly continueButton: Locator;
    readonly clientWithoutProjectError: Locator;
    readonly disableProjectBar: Locator;
    readonly cobeLogo: Locator;




    constructor(page: Page) {
        this.page = page;
        this.newOfferModal = page.getByText('Create New Offer');
        this.createOfferButtton = page.getByRole('button', { name: 'Create new offer' });
        this.clientDropdown = page.locator('.css-9uxpgx');
        this.projectDropdown = page.locator('#react-select-2-placeholder');
        this.languageDropdown = page.locator('#react-select-3-placeholder');
        this.cancelButton = page.getByRole('button', { name: 'Cancel' });
        this.continueButton = page.getByRole('button', { name: 'Continue' });
        this.clientWithoutProjectError = page.locator('div').filter({ hasText: /^Selected client is without a project, please create a project first\.$/ }).first();
        this.disableProjectBar = page.getByText('ProjectProject');
        this.cobeLogo = page.locator('svg').first();


    }

    async selectClient(client: string) {
        await this.createOfferButtton.click();
        await this.page.waitForTimeout(300);
        await this.clientDropdown.click();
        await this.page.getByText(client, { exact: true }).click();
    }

    async assertClientWithoutProjectErrorMessage() {
        await expect(this.clientWithoutProjectError).toBeVisible();
    }

    async selectProject(project: string) {
        await this.page.waitForTimeout(300);
        await this.projectDropdown.click();
        await this.page.getByText(project, { exact: true }).click();

    }


    async selectLanguage(language: string) {
        await this.languageDropdown.click();
        await this.page.waitForTimeout(300);
        await this.page.getByText(language, { exact: true }).click();

    }

    async assertDisabledContinueButton() {
        await this.page.locator('.sc-ftvSup > div:nth-child(2)').isDisabled();
    }

    async assertAutomaticProjectFill(project: string) {
        await this.page.waitForTimeout(300);
        expect(this.page.getByText(project, { exact: true }));

    }


    async assertProjectDropdownIsHidden() {
        await this.projectDropdown.isHidden();
    }


    async clickContinueButton() {
        await this.continueButton.click();
    }

    async clickCancelButton() {
        await this.cancelButton.click();
    }

    async assertSuccessfulNewOffer() {
        await expect(this.page).toHaveURL('https://cobe-accounting.herokuapp.com/new-offer/');
    }

    async assertSuccessfullCancellation() {
        await expect(this.cobeLogo).toBeVisible();


    }

}
