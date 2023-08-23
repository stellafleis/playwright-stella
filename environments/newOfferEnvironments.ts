import { Page } from '@playwright/test';

export class NewOfferEnvironments {
    page: Page;
    homeUrl: string;
    clientZeroProject: string;
    clientOneProject: string;
    clientTwoProject: string;
    projectOne: string;
    projectTwo: string;
    englishLanguage: string;
    croatianLanguage: string;
    germanLanguage: string;


    constructor(page: Page) {
        this.page = page;
        this.homeUrl = 'https://cobe-accounting.herokuapp.com/home/Offers?page=1';
        this.clientZeroProject = 'Automation Test Company #0 [DO NOT DELETE]';
        this.clientOneProject = 'Automation Test Company #1 [DO NOT DELETE]';
        this.clientTwoProject = 'Automation Test Company #2 [DO NOT DELETE]';
        this.projectOne = 'Automation Test Project #1 [DO NOT DELETE]';
        this.projectTwo = 'Automation Test Project #2 [DO NOT DELETE]';
        this.englishLanguage = 'English';
        this.croatianLanguage = 'Croatian';
        this.germanLanguage = 'German';
    }
}
