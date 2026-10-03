import { Page, Locator } from "@playwright/test";
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

    async selectCheckBoxs(checkBoxXpath: string, labels: string[]): Promise<void> {
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

}