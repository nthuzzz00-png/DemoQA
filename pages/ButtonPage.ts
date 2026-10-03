import { Page, Locator } from "@playwright/test";
export class ButtonPage{
    readonly page: Page;
    readonly btnDoubleClickMe: Locator;
    readonly btnRightClickMe: Locator;
    readonly btnClickMe: Locator
    readonly lbDoubleClickMessage: Locator;
    readonly lbRightClickMessage: Locator;
    readonly lbClickMeMessage: Locator;

    constructor (page: Page) {
        this.page = page;
        this.btnDoubleClickMe = page.locator('#doubleClickBtn');
        this.btnRightClickMe = page.locator('#rightClickBtn');
        this.btnClickMe = page.locator('xpath=//button[text()="Click Me"]');
        this.lbDoubleClickMessage =page.locator('#doubleClickMessage');
        this.lbRightClickMessage = page.locator('#rightClickMessage');
        this.lbClickMeMessage = page.locator('#dynamicClickMessage');
    }

    async getTextResult(locator: Locator): Promise<string> {
        const text: string = await locator.textContent() || '';
        return text;
    }
}