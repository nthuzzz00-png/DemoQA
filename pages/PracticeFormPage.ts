import { Page , Locator} from "@playwright/test";
export class PracticeFormPage {
    readonly page: Page;
    readonly txtFirstName: Locator;
    readonly txtLastName: Locator;
    readonly txtEmail: Locator;
    readonly rdGenderXpath: string = '//input[@value="@param"]';
    readonly txtMobile: Locator;
    readonly dateOfBirth: Locator;
    readonly cbSubjects: Locator;
    readonly cbxHobbiesXpath: string ='//input[@value="@param"]';
    readonly txtPicture: Locator;
    readonly txtCurrentAddress: Locator;
    readonly ddlState: Locator;
    readonly ddlCity: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.txtFirstName = page.locator('#firstName');
        this.txtLastName = page.locator('#lastName');
        this.txtEmail = page.locator('#userEmail');
        this.txtMobile = page.locator('#userNumber');
        this.dateOfBirth = page.locator('#dateOfBirthInput');
        this.cbSubjects = page.locator('#subjectsInput');
        this.txtPicture = page.locator('#uploadPicture');
        this.txtCurrentAddress = page.locator('#currentAddress');
        this.ddlState = page.locator('#react-select-3-input');
        this.ddlCity = page.locator('#react-select-4-placeholder');
        this.submitButton = page.locator('#submit');
    }
}