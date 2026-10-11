import { test, expect } from '@playwright/test';
import {AlertsPage} from "../pages/AlertsPage";
import {TestBase} from "../common/TestBase";
test ('Test alerts', async ({ page }) => {
    const alertsPage = new AlertsPage(page);
    const testBase = new TestBase(page);
    await testBase.goto('alerts');
    //await page.waitForTimeout(5000);
    // await testBase.clickElement(alertsPage.alertsButton);
    const alertMessage = await alertsPage.getAlertMessageAndClickAccept(page, alertsPage.alertsButton);
    expect(alertMessage).toBe('You clicked a button');

})