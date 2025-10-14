import { test, expect } from '@playwright/test';

test.describe("Locator methods for checkboxes and dropdowns", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com");
    });

    test("Checkboxes checking", async ({ page }) => {
        page.locator("text=Checkboxes").click();

        let checkbox1 = page.locator("//form[@id='checkboxes']/input[1]");
        let checkbox2 = page.locator("//form[@id='checkboxes']/input[2]");

        await checkbox1.check();
        await checkbox2.uncheck();

        await expect(checkbox1).toBeChecked();
        await expect(checkbox2).not.toBeChecked();

    });

    test("selectOption() for dropdown", async ({page}) => {
        page.locator("text=Dropdown").click();
        let dropdown = page.locator("#dropdown");
        await page.waitForTimeout(2000);

        //select by value
        await dropdown.selectOption("1");
        await page.waitForTimeout(2000);

        //select by index
        await dropdown.selectOption({index:2});
        await page.waitForTimeout(2000);

        //select by visible text
        await dropdown.selectOption({label:"Option 1"});
        await page.waitForTimeout(2000);
    });
});
