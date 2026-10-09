import { test, expect } from '@playwright/test';
import { BrowserWindows } from '../pages/BrowerWindowsPage';
import { TestBase } from '../common/TestBase';
import { NewTabPage } from '../pages/NewTabPage';
import { NewWindowPage } from '../pages/NewWindowPage';
import { NewWindowMessage } from '../pages/NewWindowMessage';
/*test ('Test browser windows', async ({ page }) => {
    const browserWindows = new BrowserWindows(page, page.context());
    const testBase = new TestBase(page);
    await testBase.goto('browser-windows');
    const newPage = await browserWindows.clickNewTab(page, page.context(), browserWindows.btnNewTab);
    const newTabPage = new NewTabPage(newPage);
    const content = await newTabPage.lbContent.textContent();
    expect(content).toBe('This is a sample page');
});

test ('Test new window', async ({ page }) => {
    const browserWindowsPage = new BrowserWindows(page, page.context());
    const testBase = new TestBase(page);
    await testBase.goto('browser-windows');
    const newPage = await browserWindowsPage.clickNewTab(page, page.context(), browserWindowsPage.btnNewWindow);
    const newWindowPage = new NewWindowPage(newPage);
    const content = await newWindowPage.lbContent.textContent();
    expect(content).toBe('This is a sample page');
});*/

test ('Test new window message', async ({ page }) => {
    const browserWindowsMessage = new BrowserWindows(page, page.context());
    const testBase = new TestBase(page);
    await testBase.goto('browser-windows');
    const newPage = await browserWindowsMessage.clickNewTab(page, page.context(), browserWindowsMessage.btnNewWindowMessage);
    const newWindowMessage = new NewWindowMessage(newPage);
    const content = await newWindowMessage.content.textContent();
    expect(content).toBe('Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.');
})