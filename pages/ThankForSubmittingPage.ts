import { Page, Locator } from "@playwright/test";
import { TestBase } from "../common/TestBase";
export class ThankForSubmittingPage {
    readonly page: Page;
    readonly lbValue: string = 'xpath=//tbody/tr/td[text()="@param"]/following-sibling::td';
    readonly testBase: TestBase;
    constructor (page: Page) {
        this.page = page;
        this.testBase = new TestBase(this.page);
    }

    async getValueByLocator(label: string): Promise<string> {
        let value: string = '';
        const newXpath: Locator = await this.testBase.getLocatorByXpath(this.lbValue, label);
        value = await newXpath.textContent() || '';
        return value;
    }
}