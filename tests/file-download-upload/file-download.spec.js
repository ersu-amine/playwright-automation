import { test, expect } from '@playwright/test';

import path from 'path';

//to verify file exist
import fs from 'fs';

test.describe("File Download Practice", () => {

    test("File download", async ({ page }) => {

        //event listener for download, without await, because we want to start listening before the download starts
        let downloadEvent = page.waitForEvent("download");

        await page.goto("https://the-internet.herokuapp.com/download");

        await page.locator("text='some-file.txt'").click();

        //refers to the download window
        let download = await downloadEvent; //resolves the promise

        let pathToDownload = path.join(__dirname, "./downloads", download.suggestedFilename());

        await download.saveAs(pathToDownload);
        expect(fs.existsSync(pathToDownload)).toBeTruthy();
    });


    test("File upload", async ({ page }) => {

        await page.goto("https://the-internet.herokuapp.com/upload");

        let fileToUpload = path.join(__dirname, "./uploads", "test-upload.txt");

        await page.setInputFiles("#file-upload", fileToUpload);

        //click on upload button
        let uploadButton = page.locator("//input[@id='file-submit']");

        //verify success message
        let successMessage = page.locator("h3");

        await expect(successMessage).toBeVisible();
    });
});