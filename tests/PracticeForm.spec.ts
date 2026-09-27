import { test, expect } from '@playwright/test';
import { PracticeFormPage } from '../pages/PracticeFormPage';
test ('Submit data successfully', async({ page }) => {
    const practiceFormPage = new PracticeFormPage(page);
    await page.goto('automation-practice-form');
})