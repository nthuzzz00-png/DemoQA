import { Page, Locator } from "@playwright/test";
export class RadioPage {
    readonly page: Page;
    readonly rdYes: Locator;
    readonly rdImpressive: Locator;
    readonly rdNo: Locator;
    readonly lbYesNo: Locator;
    readonly lbYouSeclected: Locator;
    constructor (page: Page){
        this.page = page;
        this.rdYes = page.locator("#yesRadio");
        this.rdImpressive = page.locator("#impressiveRadio");
        this.rdNo = page.locator("#noRadio");
        this.lbYesNo = page.locator(".text-success");
        this.lbYouSeclected = page.locator("xpath = //span[@class='text-success']/..");
    }

    async clickRadioButton(radioButton: Locator){
        await radioButton.click();
    }

    async getTextResult(locator: Locator): Promise<string> {
        const text: string = await locator.textContent() || '';
        return text;
    }
}