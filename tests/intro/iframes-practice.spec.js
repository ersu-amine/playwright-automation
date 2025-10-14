import { test } from '@playwright/test';

test.describe("Frames and Nested Frames", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/iframe");
    });

    test("verify iframe text", async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/iframe");
        let iframe = page.frameLocator("#mce_0_ifr");

        let textBody = iframe.locator("#tinymce");
        await test.expect(textBody).toHaveText("Your content goes here.");
    });

    test("verify iframe text within nested frames", async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/nested_frames");

        let topFrame = page.frameLocator("//frame[@name='frame-top']");

        //has only one frame inside
        let bottomFrame = page.frameLocator("//frame[@name='frame-bottom']");
        let bodyTextBottom = bottomFrame.locator("body");
        await test.expect(bodyTextBottom).toHaveText("BOTTOM");

        let leftFrame = topFrame.frameLocator("//frame[@name='frame-left']");
        await test.expect(leftFrame.locator("body")).toHaveText("LEFT");

        let rightFrame = topFrame.frameLocator("//frame[@name='frame-right']");
        await test.expect(rightFrame.locator("body")).toHaveText("RIGHT");

        let middleFrame = topFrame.frameLocator("//frame[@name='frame-middle']");
        await test.expect(middleFrame.locator("body")).toHaveText("MIDDLE");

    });

});