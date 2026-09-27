import { test, expect } from '@playwright/test';
import { ButtonPage } from '../pages/ButtonPage';
import { TestBase } from '../common/TestBase';
test ('Verify Double Click action on button', async({ page }) => {
    const expectDoubleClick: string = 'You have done a double click';
    const buttonPage = new ButtonPage(page);
    const testBase = new TestBase(page);
    await testBase.goto('buttons');
    await buttonPage.btnDoubleClickMe.dblclick();
    //Lấy text của locator btnDoubleClickMe
    const actualText: string = await buttonPage.getTextResult(buttonPage.lbDoubleClickMessage);
    expect(actualText).toBe(expectDoubleClick);
});

test ('Verify Right Click action on button', async({ page }) => {
    const expectRightClick: string = 'You have done a right click';
    const buttonPage = new ButtonPage(page);
    const testBase = new TestBase(page);
    await testBase.goto('buttons');
    await buttonPage.btnRightClickMe.click({button: 'right'});
    //Lấy text của locator btnRightClickMe
    const actualText: string = await buttonPage.getTextResult(buttonPage.lbRightClickMessage);
    expect(actualText).toBe(expectRightClick);
})

