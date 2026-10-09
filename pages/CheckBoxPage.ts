import { Page, Locator } from "@playwright/test";
export class CheckBoxPage {
    //readonly page: Page;
    readonly chkXpath: string="//span[text()='@param']//preceding-sibling::span[1]";
    readonly lbText: Locator;
    constructor (public readonly page: Page) {
        this.lbText = page.locator('//*[@id="result"]/span');
        //this.page = page;
        //this.checkBoxLoc = page.locator("xpath=///span[text()='@param']//preceding-sibling::span[1]");
    }
    async isHomeChecked(locator: Locator): Promise<boolean> {
        const classAttribute: string = await locator.getAttribute('class') || '';
        if (classAttribute.includes('rc-tree-checkbox-checked')) {
            return true;
        }
        return false;
    }

    // async getLocatorByXpath (label: string, xpath: string): Promise<Locator> {
    //     const dynamicXpath: string = xpath.replace('@param', label);
    //     const locator: Locator = this.page.locator(`xpath=${dynamicXpath}`);
    //     return locator;
    // }

    async getTextResult(locators: Locator): Promise<string> {
        let result: string = '';
        const count = await locators.count();
        for (let i = 0; i < count; i++) {
            const element = locators.nth(i);
            const text: string = await element.textContent() || '';
            result += text + ' ';
        }
        return result.trim();
    }
}
