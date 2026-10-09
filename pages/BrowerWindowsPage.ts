import { Page, Locator, BrowserContext } from "@playwright/test";
import { TestBase } from "../common/TestBase";
export class BrowserWindows {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly btnNewTab: Locator;
    readonly btnNewWindow: Locator;
    readonly btnNewWindowMessage: Locator;
    readonly testBase: TestBase;

    constructor (page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.testBase = new TestBase(this.page);
        this.btnNewTab = page.locator('#tabButton');
        this.btnNewWindow = page.locator('#windowButton');
        this.btnNewWindowMessage = page.locator('#messageWindowButton');
    }

    async clickNewTab(page: Page,context: BrowserContext, locator: Locator): Promise<Page> {
        await this.testBase.clickElement(locator);
        const newTabPage =await this.testBase.clickAndOpenNewTab(page, context, locator);
        return newTabPage;
    }

}