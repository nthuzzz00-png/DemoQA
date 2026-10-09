import {test , expect} from '@playwright/test';
import { WebTablePage } from '../pages/WebTablePage';
import { TestBase } from '../common/TestBase';
import { readDataFromCSV } from '../common/Utils';
const data = readDataFromCSV('testdata/WebTableData.csv'); // Đọc dữ liệu từ file CSV
test ('Search successfully', async({ page }) => {

    const webTablePage = new WebTablePage(page);
    const testBase = new TestBase(page);
    await testBase.goto('webtables');
    
    await webTablePage.searchForText(webTablePage.searchText, data[1].firstName);
    const isSuccessful = await testBase.getLocatorByXpath(webTablePage.searchResults, data[1].firstName);
    expect(isSuccessful).toBe(true);

    await webTablePage.searchForText(webTablePage.searchText, data[1].lastName);
    const isSuccessful1 = await testBase.getLocatorByXpath(webTablePage.searchResults, data[1].lastName);
    expect(isSuccessful1).toBe(true);

    await webTablePage.searchForText(webTablePage.searchText, data[1].age);
    const isSuccessful2 = await testBase.getLocatorByXpath(webTablePage.searchResults, data[1].age);
    expect(isSuccessful2).toBe(true);

    await webTablePage.searchForText(webTablePage.searchText, data[1].email);
    const isSuccessful3 = await testBase.getLocatorByXpath(webTablePage.searchResults, data[1].email);
    expect(isSuccessful3).toBe(true);

    await webTablePage.searchForText(webTablePage.searchText, data[1].salary);
    const isSuccessful4 = await testBase.getLocatorByXpath(webTablePage.searchResults, data[1].salary);
    expect(isSuccessful4).toBe(true);

    await webTablePage.searchForText(webTablePage.searchText, data[1].department);
    const isSuccessful5 = await testBase.getLocatorByXpath(webTablePage.searchResults, data[1].department);
    expect(isSuccessful5).toBe(true);
})