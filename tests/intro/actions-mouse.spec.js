import { test } from '@playwright/test';

test.describe("Mouse actions", () => { 
    test.beforeEach(async ({ page }) => {

        await page.goto("https://the-internet.herokuapp.com/");
        await page.waitForTimeout(2000);
    });    
    
    test.afterEach(async ({ page }) => {
        await page.waitForTimeout(2000);
    });

    test("Left click action", async ({ page }) => {
        await page.click("text='Form Authentication'");
    });

    test("Right click action", async ({ page }) => {
        await page.click("text='File Upload'", { button: "right" });
    });

    test("Double click action", async ({ page }) => {});

    test("Hover action", async ({ page }) => {
        await page.click("text='Hovers'");

        await page.waitForTimeout(2000);

        await page.hover("img[alt='User Avatar']");//hover on the very first one

        //get each element
        let avatars =await page.locator("//img[@alt='User Avatar']").all();

        //hover over each avatar
        for(let each of avatars) {
            await each.hover();
            await page.waitForTimeout(2000);
        };

    });       

    test("Scrolling to element", async ({ page }) => {
        //manually scrolling, playwright automatic scrolls to element
        let element = await page.locator("text='Shadow DOM'");

        await element.scrollIntoViewIfNeeded();
        await page.waitForTimeout(2000);
        await element.click();
    });    
    
    test("Scroll with mouse wheel", async ({ page }) => {
        await page.mouse.wheel(0, 1000);});

    test("Drag and drop action", async ({ page }) => {

        await page.click("text='Drag and Drop'");

        let source = page.locator("#column-b");

        let target = page.locator("#column-a");

       // await page.dragAndDrop("#column-b", "#column-a");
       source.dragTo(target);
       
       await page.waitForTimeout(2000);
    });

});