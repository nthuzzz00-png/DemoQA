import { Locator, Page } from "playwright";
export class FramePage {
    readonly page: Page;
    readonly lblSampleHeading: Locator;
    constructor(page: Page) {
        this.page = page;
        this.lblSampleHeading = page.locator("#sampleHeading");
    }
}