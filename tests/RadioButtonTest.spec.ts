import {test, expect} from '@playwright/test';
import { RadioPage } from '../pages/RadioButtonPage';
test ('Radio ticked correctly', async({ page }) => {
    const expectedYes: string = 'You have selected Yes';
    const expectedImpressive: string = 'You have selected Impressive';
    const radioPage = new RadioPage(page);
    await page.goto('radio-button');
    expect (await radioPage.rdYes.isChecked()).toBeFalsy();
    expect (await radioPage.rdImpressive.isChecked()).toBeFalsy();
    expect (await radioPage.rdNo.isChecked()).toBeFalsy();
    expect (await radioPage.rdNo.isDisabled()).toBeTruthy();
    // Click vào radio button "Yes"
    await radioPage.clickRadioButton(radioPage.rdYes);
    expect (await radioPage.rdYes.isChecked()).toBeTruthy();
    expect (await radioPage.rdImpressive.isChecked()).toBeFalsy();
    expect (await radioPage.rdNo.isChecked()).toBeFalsy();
    expect (await radioPage.rdNo.isDisabled()).toBeTruthy();
    const actualText: string = await radioPage.getTextResult(radioPage.lbYouSeclected) + await radioPage.getTextResult(radioPage.lbYesNo);
    expect (actualText).toBe(expectedYes);
    // Click vào radio button "Impressive"
    await radioPage.clickRadioButton(radioPage.rdImpressive);
    expect (await radioPage.rdYes.isChecked()).toBeFalsy();
    expect (await radioPage.rdImpressive.isChecked()).toBeTruthy();
    expect (await radioPage.rdNo.isChecked()).toBeFalsy();
    expect (await radioPage.rdNo.isDisabled()).toBeTruthy();
    const actualText2: string = await radioPage.getTextResult(radioPage.lbYouSeclected) + await radioPage.getTextResult(radioPage.lbYesNo);
    expect (actualText2).toBe(expectedImpressive);
})