import { test } from '@playwright/test';

test.describe('JavaScript Alerts Handling', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    });

    test("Javasvcript Alert - Information Alert", async ({ page }) => {
        page.on('dialog', async (alert) => {
            //display alert message which returns String
            console.log(alert.message());
            alert.accept();
        });

        let jsInfoAlert = page.locator("//button[@onclick='jsAlert()']");
        await jsInfoAlert.click();
    });

    test("Javascript Confirm Alert", async ({ page }) => {
        //should manually interact with alert
        page.on('dialog', async (alert) => {
            console.log(alert.message());
            alert.dismiss(); //or alert.accept();
        });

        let jsConfirmationAlert = page.locator("//button[@onclick='jsConfirm()']");
        await jsConfirmationAlert.click();
    });

        test("Javascript Prompt Alert", async ({ page }) => {
        //should manually interact with alert
        page.on('dialog', async (alert) => {
            console.log(alert.message());
            alert.accept("HelloWorld"); //or alert.dismiss();
        });

        let jsPromptAlert = page.locator("//button[@onclick='jsPrompt()']");
        await jsPromptAlert.click();
    });
});