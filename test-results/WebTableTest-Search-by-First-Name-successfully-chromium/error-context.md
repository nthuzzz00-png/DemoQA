# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: WebTableTest.spec.ts >> Search by First Name successfully
- Location: tests/WebTableTest.spec.ts:6:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://demoqa.com/webtables", waiting until "load"

```

# Test source

```ts
  1  | import { Page, Locator } from "@playwright/test";
  2  | export class TestBase{
  3  |     readonly page: Page;
  4  |     constructor(page: Page) {
  5  |         this.page = page;
  6  |     }
  7  |     async goto(uri: string) {
> 8  |         await this.page.goto(uri);
     |                         ^ Error: page.goto: Test timeout of 30000ms exceeded.
  9  |     }
  10 | 
  11 |    async getLocatorByXpath (label: string, xpath: string): Promise<Locator> {
  12 |         const dynamicXpath: string = xpath.replace('@param', label);
  13 |         const locator: Locator = this.page.locator(`xpath=${dynamicXpath}`);
  14 |         return locator;
  15 |     }
  16 | }
```