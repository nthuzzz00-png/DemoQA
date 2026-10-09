import { test, expect } from '@playwright/test';
import { PracticeFormPage } from '../pages/PracticeFormPage';
import { TestBase } from '../common/TestBase';
import { ThankForSubmittingPage } from '../pages/ThankForSubmittingPage';
import { readDataFromCSV } from '../common/Utils';
const data = readDataFromCSV('testdata/PracticeFormData.csv'); // Đọc dữ liệu từ file CSV
const data1 = readDataFromCSV('testdata/PracticeFormDataInvalid.csv'); // Đọc dữ liệu từ file CSV
test ('Submit data successfully', async({ page }) => {
    const firstName: string = data[1].firstName;
    const lastName: string = data[1].lastName;
    const email: string = data[1].email;
    const gender: string = data[1].gender;
    const mobile: string = data[1].mobile;
    const dateOfBirth: string = data[1].dateOfBirth;
    const subjects: string[] = data[1].subjects.split(',').map(subject => subject.trim());
    const hobbies: string[] = data[1].hobbies.split(',').map(hobby => hobby.trim());
    const pictureName: string = data[1].pictureName;
    const picturePath: string = `./testdata/${pictureName}`;
    const currentAddress: string = data[1].currentAddress;
    const state: string = data[1].state;
    const city: string = data[1].city;
    const practiceFormPage = new PracticeFormPage(page);
    const testBase = new TestBase(page);
    await testBase.goto('automation-practice-form');
    await practiceFormPage.inputData(firstName, lastName, email, gender, mobile, dateOfBirth, subjects, hobbies, picturePath, currentAddress, state, city);

    const thankForSubmittingPage = new ThankForSubmittingPage(page);
    expect (await thankForSubmittingPage.getValueByLocator('Student Name')).toBe(`${firstName} ${lastName}`);
    expect (await thankForSubmittingPage.getValueByLocator('Student Email')).toBe(email);
    expect (await thankForSubmittingPage.getValueByLocator('Gender')).toBe(gender);
    expect (await thankForSubmittingPage.getValueByLocator('Mobile')).toBe(mobile);
    const dateOfBirths: string[] = dateOfBirth.split(' ');
    const expectedDateOfBirth: string = `${dateOfBirths[0].padStart(2, '0')} ${dateOfBirths[1]},${dateOfBirths[2]}`;
    expect (await thankForSubmittingPage.getValueByLocator('Date of Birth')).toBe(expectedDateOfBirth);
    expect (await thankForSubmittingPage.getValueByLocator('Subjects')).toBe(subjects.join(', '));
    expect (await thankForSubmittingPage.getValueByLocator('Hobbies')).toBe(hobbies.join(', '));
    expect (await thankForSubmittingPage.getValueByLocator('Picture')).toBe(pictureName);
    expect (await thankForSubmittingPage.getValueByLocator('Address')).toBe(currentAddress);
    expect (await thankForSubmittingPage.getValueByLocator('State and City')).toBe(`${state} ${city}`);
})

test ('Submit data invalid', async({ page }) => {
    const firstName: string = data1[1].firstName;
    const lastName: string = data1[1].lastName;
    const email: string = data1[1].email;
    const gender: string = data1[1].gender;
    const mobile: string = data1[1].mobile;
    const dateOfBirth: string = data1[1].dateOfBirth;
    const subjects: string[] = data1[1].subjects.split(',').map(subject => subject.trim());
    const hobbies: string[] = data1[1].hobbies.split(',').map(hobby => hobby.trim());
    const pictureName: string = data1[1].pictureName;
    const picturePath: string = `./testdata/${pictureName}`;
    const currentAddress: string = data1[1].currentAddress;
    const state: string = data1[1].state;
    const city: string = data1[1].city;
    const practiceFormPage = new PracticeFormPage(page);
    const testBase = new TestBase(page);
    await testBase.goto('automation-practice-form');
    await practiceFormPage.inputData(firstName, lastName, email, gender, mobile, dateOfBirth, subjects, hobbies, picturePath, currentAddress, state, city);

    expect (await practiceFormPage.getRedBorderColor(practiceFormPage.txtFirstName)).toBe('rgb(220, 53, 69)');
    expect (await practiceFormPage.getRedBorderColor(practiceFormPage.txtLastName)).toBe('rgb(220, 53, 69)');
    expect (await practiceFormPage.getRedBorderColor(practiceFormPage.txtEmail)).toBe('rgb(220, 53, 69)');
    expect (await practiceFormPage.getRedBorderColor(practiceFormPage.txtMobile)).toBe('rgb(220, 53, 69)');
})
