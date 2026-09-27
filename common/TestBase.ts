import { Page, Locator } from "@playwright/test";
export class TestBase{
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async goto(uri: string) {
        await this.page.goto(uri);
    }

   async getLocatorByXpath (label: string, xpath: string): Promise<Locator> {
        const dynamicXpath: string = xpath.replace('@param', label);
        const locator: Locator = this.page.locator(`xpath=${dynamicXpath}`);
        return locator;
    }
}