import { test } from '@playwright/test';
import { LoginPage } from '../POMs/loginPage';
import { LoginEnvironments } from '../environments/loginEnvironments';
import { NewOfferEnvironments } from '../environments/newOfferEnvironments';
import { OfferModalPage } from '../POMs/offerModalPage';




test('Select client with zero projects', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const loginEnvironments = new LoginEnvironments(page);

    await page.goto(loginEnvironments.baseUrl);
    await loginPage.login(loginEnvironments.validEmail, loginEnvironments.validPassword);
    await loginPage.assertHomeSectionIsDisplayed();

    const offerModalPage = new OfferModalPage(page);
    const newOfferEvironments = new NewOfferEnvironments(page);

    await offerModalPage.selectClient(newOfferEvironments.clientZeroProject);
    await offerModalPage.assertClientWithoutProjectErrorMessage();
    await offerModalPage.assertProjectDropdownIsHidden();

    await offerModalPage.selectLanguage(newOfferEvironments.englishLanguage);
    await offerModalPage.assertDisabledContinueButton();
});



test('Select client with one projects', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const loginEnvironments = new LoginEnvironments(page);

    await page.goto(loginEnvironments.baseUrl);
    await loginPage.login(loginEnvironments.validEmail, loginEnvironments.validPassword);
    await loginPage.assertHomeSectionIsDisplayed();

    const offerModalPage = new OfferModalPage(page);
    const newOfferEvironments = new NewOfferEnvironments(page);

    await offerModalPage.selectClient(newOfferEvironments.clientOneProject);
    await offerModalPage.assertAutomaticProjectFill(newOfferEvironments.projectOne);
    await offerModalPage.selectLanguage(newOfferEvironments.englishLanguage);
    await offerModalPage.clickContinueButton();
    await offerModalPage.assertSuccessfulNewOffer();
});


test('Select client with two projects', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const loginEnvironments = new LoginEnvironments(page);

    await page.goto(loginEnvironments.baseUrl);
    await loginPage.login(loginEnvironments.validEmail, loginEnvironments.validPassword);
    await loginPage.assertHomeSectionIsDisplayed();

    const offerModalPage = new OfferModalPage(page);
    const newOfferEvironments = new NewOfferEnvironments(page);

    await offerModalPage.selectClient(newOfferEvironments.clientTwoProject);
    await offerModalPage.selectProject(newOfferEvironments.projectTwo);
    await offerModalPage.selectLanguage(newOfferEvironments.englishLanguage);
    await offerModalPage.clickContinueButton();
    await offerModalPage.assertSuccessfulNewOffer();
});

test('Cancel creating new offer', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const loginEnvironments = new LoginEnvironments(page);

    await page.goto(loginEnvironments.baseUrl);
    await loginPage.login(loginEnvironments.validEmail, loginEnvironments.validPassword);
    await loginPage.assertHomeSectionIsDisplayed();

    const offerModalPage = new OfferModalPage(page);
    const newOfferEvironments = new NewOfferEnvironments(page);

    await offerModalPage.selectClient(newOfferEvironments.clientTwoProject);
    await offerModalPage.selectProject(newOfferEvironments.projectOne);
    await offerModalPage.selectLanguage(newOfferEvironments.germanLanguage);
    await offerModalPage.clickCancelButton();
    await offerModalPage.assertSuccessfullCancellation();
});