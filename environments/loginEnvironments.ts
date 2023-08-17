import { Page } from '@playwright/test';

export class LoginEnvironments {
    page: Page;
    baseUrl: string;
    validEmail: string;
    validPassword: string;
    invalidEmail: string;
    invalidPassword: string;

    constructor(page: Page) {
        this.page = page;
        this.baseUrl = 'https://cobe-accounting.herokuapp.com/';
        this.validEmail = 'hello@cobeisfresh.com';
        this.validPassword = 'cobeisfresh123';
        this.invalidEmail = 'hello@cobeisf';
        this.invalidPassword = 'cobeisfresh';
    }
}

