import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://cobe-accounting.herokuapp.com/');
  
    await expect(page.getByRole('heading', { name: 'COBE Accounting' })).toBeVisible();

//LOGIN WITH CORRECT CREDENTIALS + SHOW PASSWORD

/*
    await page.getByLabel('Email').fill('hello@cobeisfresh.com');
    await page.getByLabel('Password').fill('cobeisfresh123');
    await page.locator('form').getByRole('img').click();
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.waitForURL('https://cobe-accounting.herokuapp.com/home/Offers?page=1');
*/



 //LOGIN WITH INCORRET CREDENTIALS
/*
 await page.getByLabel('Email').fill('hello@cobeisfresh.com');
 await page.getByLabel('Password').fill('cobefresh321');
 await page.getByRole('button', { name: 'Log In' }).click();
 await expect(page.locator('div').getByText(/Incorrect email or password/).first()).toBeVisible();
*/



//LOGOUT

    await page.getByLabel('Email').fill('hello@cobeisfresh.com');
    await page.getByLabel('Password').fill('cobeisfresh123');
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.getByRole('link', { name: 'Settings' }).click();
    await page.getByText('Log out').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
});

