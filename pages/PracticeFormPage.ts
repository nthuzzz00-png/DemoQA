import { Page , Locator} from "@playwright/test";
import { TestBase } from "../common/TestBase";
export class PracticeFormPage {
    readonly page: Page;
    readonly txtFirstName: Locator;
    readonly txtLastName: Locator;
    readonly txtEmail: Locator;
    readonly rdGenderXpath: string = '//input[@value="@param"]';
    readonly txtMobile: Locator;
    readonly txtDateOfBirth: Locator;
    readonly ddlYear: Locator;
    readonly ddlMonth: Locator;
    readonly lbDate: string = '//*[@class="react-datepicker__month"]/div[@param1]/div[text()="@param2"]';
    readonly cbSubjects: Locator;
    readonly cbxHobbiesXpath: string ='//input[@value="@param"]';
    readonly txtPicture: Locator;
    readonly txtCurrentAddress: Locator;
    readonly ddlState: Locator;
    readonly ddlCity: Locator;
    readonly submitButton: Locator;
    readonly testBase: TestBase;
    constructor(page: Page) {
        this.page = page;
        this.testBase = new TestBase(page);
        this.txtFirstName = page.locator('#firstName');
        this.txtLastName = page.locator('#lastName');
        this.txtEmail = page.locator('#userEmail');
        this.txtMobile = page.locator('#userNumber');
        this.txtDateOfBirth = page.locator('#dateOfBirthInput');
        this.ddlYear = page.locator('xpath=//*[@class="react-datepicker__year-select"]');
        this.ddlMonth = page.locator('xpath=//*[@class="react-datepicker__month-select"]');
        this.cbSubjects = page.locator('#subjectsInput');
        this.txtPicture = page.locator('#uploadPicture');
        this.txtCurrentAddress = page.locator('#currentAddress');
        this.ddlState = page.locator('#react-select-3-input');
        this.ddlCity = page.locator('#react-select-4-placeholder');
        this.submitButton = page.locator('#submit');
    }

    async inputData(firstName: string, lastName: string, email: string, gender: string, mobile: string, dateOfBirth: string, subjects: string[], hobbies: string[], picturePath: string, currentAddress: string, state: string, city: string): Promise<void> {
        await this.testBase.inputText(this.txtFirstName, firstName);
        await this.testBase.inputText(this.txtLastName, lastName);
        await this.testBase.inputText(this.txtEmail, email);
        await this.testBase.selectRadioButton(this.rdGenderXpath, gender);
        await this.testBase.inputText(this.txtMobile, mobile);
        await this.inputDateOfBirth(dateOfBirth, this.txtDateOfBirth);
        await this.testBase.inputComboboxWithMultiValues(this.cbSubjects, subjects);
    

    }

    async inputDateOfBirth(dateOfBirth: string, locator: Locator): Promise<void> {
        const dateOfBirths: string[] = dateOfBirth.split(' ');
        await this.testBase.selectDropdownBox(this.ddlYear, dateOfBirths[2]);
        await this.testBase.selectDropdownBox(this.ddlMonth, dateOfBirths[1]);
        const dayLocator: Locator = await this.testBase.getLocatorXpathByParams(this.lbDate, "1", dateOfBirths[0]);
        await this.testBase.clickElement(dayLocator);
    }

    getLocatorXpathByParams(xpath: string, param1: string, param2: string): Locator {
        const dynamicXpath: string = xpath.replace('@param1', param1).replace('@param2', param2);
        const locator: Locator = this.page.locator(`xpath=${dynamicXpath}`);
        return locator;
    }

}