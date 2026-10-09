import { Page, Locator } from "@playwright/test";
export class LinkPage {
    readonly page: Page;
    //Link mở tab mới
    readonly linkHome: Locator;
    readonly linkHomeEeNAr: Locator;
    //Link gửi api call
    readonly linkCreated: Locator;
    readonly linkNoContent: Locator;
    readonly linkMoved: Locator;
    readonly linkBadRequest: Locator;
    readonly linkUnauthorized: Locator;
    readonly linkForbidden: Locator;
    readonly linkNotFound: Locator;

    constructor (page: Page) {
        this.page = page;
        this.linkHome = page.locator('#simpleLink');
        this.linkHomeEeNAr = page.locator('#dynamicLink');
        this.linkCreated = page.locator('#created');
        this.linkNoContent = page.locator('#no-content');
        this.linkMoved = page.locator('#moved');
        this.linkBadRequest = page.locator('#bad-request');
        this.linkUnauthorized = page.locator('#unauthorized');
        this.linkForbidden = page.locator('#forbidden');
        this.linkNotFound = page.locator('#invalid-url');
        
    }

    //Click link mở tab mới
    async clickLinkGetNewPage(linkLocator: Locator): Promise<Page> {
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            linkLocator.click()
        ]);
        await newPage.waitForLoadState();
        return newPage;
    }
}