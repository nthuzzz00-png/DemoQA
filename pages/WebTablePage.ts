import { Page, Locator } from "@playwright/test";
export class WebTablePage {
    readonly page: Page
    readonly searchText: Locator;
    readonly searchResults: string ='//tbody/tr/td[@param]';
    constructor (page: Page){
        this.page = page;
        this.searchText = page.locator('#searchBox');
    }

    // async getLocatorXpath(searchResults: string, param: string): Promise<Locator> {
    //     const dynamicXpath: string = searchResults.replace('@param', param);
    //     const locator: Locator = this.page.locator(`xpath=${dynamicXpath}`);
    //     return locator;
    // }

    //Nhập kết quar
    async searchForText(searchLocator: Locator, text: string): Promise<void> {
        await searchLocator.fill(text);
    }

    async verifySearchText(searchResualt: Locator, searchText: string): Promise<boolean> {
        let isSuccessful: boolean = false;
        const numberOfRecords = await searchResualt.count();
        let count: number = 0;
        for (let i = 0; i < numberOfRecords; i++) {
            const element = searchResualt.nth(i);
            const text: string = await element.textContent() || '';
            if (text.includes(searchText)) {
                count = count + 1;
            }
        }
        if (count === numberOfRecords) {
            isSuccessful = true;
        }
        return isSuccessful;
    }
    
}