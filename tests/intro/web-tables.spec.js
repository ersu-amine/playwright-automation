//import playwright from '@playwright/test';
import { test, expect } from '@playwright/test';

test.describe("Web Tables", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com");
        await page.locator("text='Sortable Data Tables'").click();
        let table = await page.locator("#table1");
    });

    test("web table size", async ({page}) => {
        let table = await page.locator("#table1");
        let rows = await table.locator("tr");
        let columns = await table.locator("th");

        console.log(`Row size ${await rows.count()}`);
        console.log(`Column size ${await columns.count()}`);
    });

});