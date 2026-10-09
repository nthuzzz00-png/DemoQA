import { Page, Locator } from "@playwright/test";
export class TextBoxPage {
    //Khai báo
    readonly page: Page;
    readonly fullNameLocator: Locator;
    readonly emailLocator: Locator;
    readonly currentAddressLocator: Locator;
    readonly permanentAddressLocator: Locator;
    readonly nameLocator: Locator;
    readonly emailResultLocator: Locator;
    readonly currentAddressResultLocator: Locator;
    readonly permanentAddressResultLocator: Locator;
    //Khởi tạo
    constructor(page: Page) {
        this.page = page;
        this.fullNameLocator = page.locator('#userName');
        this.emailLocator = page.locator('#userEmail');
        this.currentAddressLocator = page.locator('#currentAddress');
        this.permanentAddressLocator = page.locator('#permanentAddress');
        this.nameLocator = page.locator('#name');
        this.emailResultLocator = page.locator('#email');
        this.currentAddressResultLocator = page.locator("xpath=//p[@id='currentAddress']");
        this.permanentAddressResultLocator = page.locator("xpath=//p[@id='permanentAddress']");
    }
    async goto() {
        await this.page.goto('text-box');
    }
    //Hàm nhập dữ liệu vào các trường và click submit
    async inputData(fullName: string|null, email: string|null, currentAddress: string|null, permanentAddress: string|null) {
        await this.page.waitForTimeout(5000);
        await this.fullNameLocator.fill(fullName || '');
        await this.emailLocator.fill(email || '');
        await this.currentAddressLocator.fill(currentAddress || '');
        await this.permanentAddressLocator.fill(permanentAddress || '');
        await this.page.click('#submit');
    }
    async getActuralResult(locator: Locator): Promise<string> {
        const text: string = await locator.textContent() || '';
        const actualResult: string = text.split(':')[1].trim();
        return actualResult;
    }
}
