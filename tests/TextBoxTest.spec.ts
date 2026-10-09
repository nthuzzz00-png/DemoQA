import { test, expect } from '@playwright/test';
import { TextBoxPage } from '../pages/TextBoxPage';
import { readDataFromCSV } from '../common/Utils';
const data = readDataFromCSV('testdata/TextBoxData.csv'); // Đọc dữ liệu từ file CSV
test ('Submit successfully', async({ page }) => {
    const textBoxPage: TextBoxPage= new TextBoxPage(page);
    /*const fullName:string = 'Thu';
    const email:string ='thu@example.com';
    const currentAddress:string = '123 Main St';
    const permanentAddress:string = '456 Elm St';*/
    await textBoxPage.goto();
    await textBoxPage.inputData(data[1].fullName, data[1].email, data[1].currentAddress, data[1].permanentAddress);
    const actualFullName:string = await textBoxPage.getActuralResult(textBoxPage.nameLocator); // Lấy actualFullName từ trang
    expect(actualFullName).toBe(data[1].fullName); // So sánh actualFullName với fullName
    const actualEmail:string = await textBoxPage.getActuralResult(textBoxPage.emailResultLocator);
    expect(actualEmail).toBe(data[1].email);
    const actualCurrentAddress:string = await textBoxPage.getActuralResult(textBoxPage.currentAddressResultLocator);
    expect(actualCurrentAddress).toBe(data[1].currentAddress);
    const actualPermanentAddress:string = await textBoxPage.getActuralResult(textBoxPage.permanentAddressResultLocator);
    expect(actualPermanentAddress).toBe(data[1].permanentAddress);
  });
/*test ('Email format is wrong (without "@")', async({ page }) => {
    const textBoxPage: TextBoxPage= new TextBoxPage(page);
    await textBoxPage.goto();
    await textBoxPage.inputData(data[2].fullName, data[2].email, data[2].currentAddress, data[2].permanentAddress);
    await expect(textBoxPage.emailLocator).toHaveClass(/field-error/);
    
});
test ('Email format is wrong (without domain name)', async({ page }) => {
    const textBoxPage: TextBoxPage= new TextBoxPage(page);
    await textBoxPage.goto();
    await textBoxPage.inputData(data[3].fullName, data[3].email, data[3].currentAddress, data[3].permanentAddress);
    await expect(textBoxPage.emailLocator).toHaveClass(/field-error/);
});*/
