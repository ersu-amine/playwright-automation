import { expect, test } from '@playwright/test';

test.describe("group", () => {
    let elements;

    test.beforeEach(async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/');
        elements = await page.locator("//li/a").all();//get all elements
    });

    test("verfiy 44 elements in list element", async ({ page }) => {
        //check the size, should be 44
        test.expect(elements.length).toBe(44);

    });

    test("verify elements are visible and clickable", async ({ page }) => {

        //for loop to check each

        for (let each of elements) {
            await test.expect(each).toBeVisible();

            await expect(each).toBeEnabled();
        }

    });

    test("verify each element in elements array have href attribute", async ({ page }) => {

        //for loop to check each
        for (let each of elements) {
            await expect(each).toHaveAttribute("href");
            let href = await each.getAttribute("href");
            console.log(href);
        }
    });

});
