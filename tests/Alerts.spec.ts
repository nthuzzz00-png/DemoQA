import { test, expect } from '@playwright/test';
import {AlertsPage} from "../pages/AlertsPage";
import {TestBase} from "../common/TestBase";
test ('Test alerts', async ({ page }) => {
    const alertsPage = new AlertsPage(page);
    const testBase = new TestBase(page);
    await testBase.goto('alerts');
    
    const alertMessage = await alertsPage.clickAlertsButton(page, 'accept');
    expect(alertMessage).toBe('You clicked a button');
})