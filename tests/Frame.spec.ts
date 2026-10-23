import { test } from "@playwright/test";
import { FramePage } from "../pages/FramePage";
import { TestBase } from "../common/TestBase";
test("Kiểm tra nội dung hiển thị bên trong iframe lớn ở phía trên", async ({ page }) => {
    const framePage = new FramePage(page);
    const testBase = new TestBase(page);
    await page.goto('frames');
    const expectedSampleHeading = 'This is a sample page';
    const actualSampleHeading = await testBase.getIframeText(page, '#frame1', '#sampleHeading');
    test.expect(actualSampleHeading).toBe(expectedSampleHeading);
});