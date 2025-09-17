//const{test} = require('@playwright/test'); //before ES module

import { test } from "@playwright/test"; // after ES module came out

test("First test @practice @navigation", async ({ page }) => {
    await page.goto("https://www.google.com");

    let searchBox = page.locator("//textarea[@class='gLFyf']");

    await page.waitForTimeout(2000);

    //searchBox.type("benefits of coffee");//types each one by one

    await searchBox.fill("benefits of tea");//fill all at once

    await page.keyboard.press("Enter");


});




