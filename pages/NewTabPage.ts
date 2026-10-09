import { Page, Locator, BrowserContext } from '@playwright/test';
import { TestBase } from '../common/TestBase';
export class NewTabPage {
    readonly page: Page;
    readonly lbContent: Locator;
    readonly context: BrowserContext;
    readonly testBase: TestBase;

    constructor(page: Page) {
        this.page = page;
        this.lbContent = page.locator('#sampleHeading');
        this.context = page.context();
        this.testBase = new TestBase(this.page);
    }
}