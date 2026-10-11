import {Page, Locator, Dialog} from "@playwright/test";
import {TestBase} from "../common/TestBase";
export class AlertsPage {
    readonly page: Page;
    readonly alertsButton: Locator;
    readonly timerAlertButton: Locator;
    readonly confirmButton: Locator
    readonly promptButton: Locator;
    readonly testBase: TestBase;

    constructor(page: Page) {
        this.page = page;
        this.alertsButton = page.locator('#alertButton');
        this.timerAlertButton = page.locator('#timerAlertButton');
        this.confirmButton = page.locator('#confirmButton');
        this.promptButton = page.locator('#promtButton');
        this.testBase = new TestBase(this.page);
    }

    async getAlertMessageAndClickAccept(page: Page, locator: Locator): Promise<string> {
        let alertMessage: string = '';        
        page.on('dialog', async dialog => {
            alertMessage = dialog.message();
            await page.waitForTimeout(5000);
            await dialog.accept();
        });
        await this.testBase.clickElement(locator);
        return alertMessage;
    }

}