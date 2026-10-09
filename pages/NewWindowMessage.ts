import { Page, BrowserContext, Locator } from "@playwright/test";
import { TestBase } from "../common/TestBase";
export class NewWindowMessage {
    readonly page: Page;
    readonly context: BrowserContext
    readonly content: Locator;
    readonly testBase: TestBase;

    constructor(page: Page) {
        this.page = page;
        this.context = page.context();
        this.testBase = new TestBase(this.page);
        this.content = page.locator('body');
    }
}