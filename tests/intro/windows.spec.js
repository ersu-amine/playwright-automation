//import playwright from '@playwright/test';
import { test, expect } from '@playwright/test';

test.describe("Window Popups", () => {

    test("Widnow popup practice", async ({ page }) => {

        let newPageEvent = page.waitForEvent("popup");

        await page.goto("https://the-internet.herokuapp.com/windows");

        await page.locator("text='Click Here'");

        let newPageWindow = await newPageEvent; //resolves the promise

        //verify newWindow
        expect(newPageWindow).toHaveTitle("New Window");
        expect(page).toHaveTitle("The Internet");

        //await page.bringToFront();
        
        //use explicitly to bringto front
        await newPageWindow.bringToFront();
        //verify text in the new window
        let textInNewPage = newPageWindow.locator("h3");
        expect(textInNewPage).toBeVisible();
        expect(textInNewPage).toBe("New Window");

    });
});