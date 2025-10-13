// give  https://username:password@domain.com

import{test} from '@playwright/test';

test('basic auth by embedding', async ({page})=>{
    await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    await page.waitForTimeout(3000);

});

test('basic auth by encoding as base64', async ({page})=>{

    //more secure way
    let encoding = Buffer.from('admin:admin').toString('base64');

    await page.setExtraHTTPHeaders({
        'Authorization': `Basic ${encoding}`
    });

    //authenticated
        await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    await page.waitForTimeout(3000);
});

test('@env-test environment varibles', async ({page})=>{
    console.log(process.env.THEINTERNET_USERNAME);
    console.log(process.env.THEINTERNET_PASSWORD);
});

test('@env-test basic auth by encoding as base64 with env varibles', async ({page})=>{

    let encoding = Buffer.from(`${process.env.THEINTERNET_USERNAME}:${process.env.THEINTERNET_PASSWORD}`).toString('base64');

    await page.setExtraHTTPHeaders({
        'Authorization': `Basic ${encoding}`
    });

    //authenticated
        await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    await page.waitForTimeout(3000);
});