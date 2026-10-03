import { test, expect } from '@playwright/test';
import { PracticeFormPage } from '../pages/PracticeFormPage';
test ('Submit data successfully', async({ page }) => {
    const firstName: string = 'John';
    const lastName: string = 'Doe';
    const email: string = 'a@gmail.com';
    const gender: string = 'Male';
    const mobile: string = '1234567890';
    const dateOfBirth: string = '1 January 1990';
    const subjects: string[] = ['Maths', 'Physics'];
    const hobbies: string[] = ['Sports', 'Reading'];
    const picturePath: string = 'path/to/picture.jpg';
    const currentAddress: string = '123 Main St, City, Country';
    const state: string = 'NCR';
    const city: string = 'Delhi';
    const practiceFormPage = new PracticeFormPage(page);
    await page.goto('automation-practice-form');
})