import { test } from '@playwright/test';

test.describe('Test group', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://practice.expandtesting.com/');
    });

    test("verify checkboxes being checked", async () => { 
            let checkbox = page.locator("//input[@id='checkbox1']");
            await checkbox.check();
            await test.expect(checkbox).toBeChecked();
    });

    test("verify title contains text", async ({page}) => {
        let element = page.locator("//h1");
        
        await test.expect(element).toContainText("Automation Testing Practice WebSite for QA and Developers");

        test.expect(element).toHaveText("Automation Testing Practice WebSite for QA and Developers");

});

});