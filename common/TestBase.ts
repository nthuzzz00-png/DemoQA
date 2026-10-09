import { Page, Locator, BrowserContext } from "@playwright/test";
export class TestBase{
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async goto(uri: string) {
        await this.page.goto(uri);
    }

   getLocatorByXpath (label: string, xpath: string): Locator {
        const dynamicXpath: string = xpath.replace('@param', label);
        const locator: Locator = this.page.locator(`xpath=${dynamicXpath}`);
        return locator;
    }

    async inputText(locator: Locator, text: string, options: { clear?: boolean; delay?: number} = {}): Promise<void> {
        if(options.clear){
            await locator.fill('');
        }
        if (options.delay){
            await this.waitForDelay(options.delay);
        }
        await locator.fill(text);
    }

    async clickElement(locator: Locator): Promise<void> {
        await locator.click();
    }

    async selectRadioButton(radioXpath: string, label: string): Promise<void> {
        const radioButtonLocator: Locator = await this.getLocatorByXpath(label, radioXpath);
        await radioButtonLocator.check();
    }

    async selectDropdownBox(dropdownLocator: Locator, option: string|{label?: string, value?: string, index?: number}): Promise<void> {
        await dropdownLocator.selectOption(option);
    }

    //Combobox
    async inputComboboxWithMultiValues(locator: Locator, text: string[]): Promise<void> {
        for(const value of text){
            await locator.fill(value);
            await locator.press('Enter');
        }
    }

    async selectCheckBoxes(checkBoxXpath: string, labels: string[]): Promise<void> {
        for (const value of labels) {
            const checkBoxLocator: Locator = this.getLocatorByXpath(value, checkBoxXpath);
            await checkBoxLocator.check();
        }
    }

    getLocatorXpathByParams(xpath: string, param1: string, param2: string): Locator {
        const dynamicXpath: string = xpath.replace('@param1', param1).replace('@param2', param2);
        const locator: Locator = this.page.locator(`xpath=${dynamicXpath}`);
        return locator;
    }

    async waitForDelay(timeout: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    async selectDropdownList(locator: Locator, option: string): Promise<void> {
        await locator.selectOption({ label: option });
    }

    //Opent new tab link bất kì
    async openNewTab(context: BrowserContext, url?: string): Promise<Page> {
        const newPage = await context.newPage();
        if (url) {
            await newPage.goto(url);
        }
        return newPage;
    }

    async clickAndOpenNewTab(page: Page, context: BrowserContext, locator: Locator): Promise<Page> {
        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            locator.click()
        ]);
        await newPage.waitForLoadState();
        return newPage;
    }

    //Open new window link bất kì
    async openNewWindow(context: BrowserContext, url?: string): Promise<Page> {
        const newPage = await context.newPage();
        if (url) {
            await newPage.goto(url);
        }
        return newPage;
    }

    async clickAndOpenNewWindow(page: Page, context: BrowserContext, locator: Locator): Promise<Page> {
        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            locator.click()
        ]);
        await newPage.waitForLoadState();
        return newPage;
    }

    async getTextLocator(locator: Locator): Promise<string> {
        const text: string = await locator.textContent() || '';
        return text;
    }

    //Alerts
    async clickAlertsButton(page: Page, action: 'accept', promptText?: string): Promise<string> {
        let alertMessage: string = '';
        page.once('dialog', async (dialog) => {
            alertMessage = await dialog.message();
            await dialog.accept(promptText);
        });
        return alertMessage;
    }
}