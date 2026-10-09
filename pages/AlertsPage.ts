import {Page, Locator} from "@playwright/test";
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

    async clickAlertsButton(page: Page, action: () => Promise<string>){
        let alertMessage: string = '';
        const [dialog] = await Promise.all([
            this.page.waitForEvent ('dialog').then(dialog => {
                alertMessage = dialog.message();
            })
        ]);
        await dialog.accept();
        return alertMessage;
    }

}