import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Kiểm tra tiêu đề trang "có chứa" chuỗi con tương ứng.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Nhấp vào liên kết Get started.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Kiểm tra trang có hiển thị thẻ tiêu đề (heading) tên là Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
