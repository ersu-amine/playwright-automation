import { test, expect } from '@playwright/test';

test.describe("Locator methods", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com");
    });

    test("innterText(): retrieves the visible text", async () => {
        let header = page.locator("h1");
        console.log(await header.innerText());
        await expect(header).toHaveText("Welcome to the-internet");
    });

    test("inputValue()", async ({ page }) => {
        page.locator("text='Inputs'").click();

        let inputBox = page.locator("input");

        await inputBox.fill("12345");
        console.log(await inputBox.inputValue());
        await expect(inputBox).toHaveValue("12345");
    });

    test("getAttribute()", async ({ page }) => {
        let hrefFileUpload = await page.locator("text='File Upload'").getAttribute("href");

        console.log(await hrefFileUpload);
        //expect(hrefFileUpload).toBe("/upload");
        expect(hrefFileUpload).toEqual("/upload");
    });

});
