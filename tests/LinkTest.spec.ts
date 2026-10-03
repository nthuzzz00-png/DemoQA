import { test, expect } from '@playwright/test';
import { TestBase } from '../common/TestBase';
import { LinkPage } from '../pages/LinkPage';
test ('Verify Home link opens main page in new tab', async({ page }) => {
    const linkPage = new LinkPage(page);
    const testBase = new TestBase(page);
    await testBase.goto('links');
    const newPage = await linkPage.clickLinkGetNewPage(linkPage.linkHome);
    const actualUrl: string = newPage.url();
    expect(actualUrl).toBe('https://demoqa.com/');
})

test ('Verify Home link opens main page in new tab with dynamic link', async({ page }) => {
    const linkPage = new LinkPage(page);
    const testBase = new TestBase(page);
    await testBase.goto('links');
    const newPage = await linkPage.clickLinkGetNewPage(linkPage.linkHomeEeNAr);
    const actualUrl: string = newPage.url();
    expect(actualUrl).toBe('https://demoqa.com/');
})

