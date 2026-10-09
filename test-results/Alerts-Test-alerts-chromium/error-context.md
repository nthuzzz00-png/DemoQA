# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Alerts.spec.ts >> Test alerts
- Location: tests/Alerts.spec.ts:4:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "You clicked a button"
Received: ""
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link:
      - /url: https://demoqa.com
  - generic [ref=e6]:
    - generic [ref=e9]:
      - generic [ref=e10]: Elements
      - generic [ref=e22]: Forms
      - generic [ref=e35]:
        - generic [ref=e36] [cursor=pointer]: Alerts, Frame & Windows
        - list [ref=e48]:
          - listitem [ref=e49] [cursor=pointer]:
            - link "Browser Windows" [ref=e50]:
              - /url: /browser-windows
          - listitem [ref=e53] [cursor=pointer]:
            - link "Alerts" [ref=e54]:
              - /url: /alerts
          - listitem [ref=e57] [cursor=pointer]:
            - link "Frames" [ref=e58]:
              - /url: /frames
          - listitem [ref=e61] [cursor=pointer]:
            - link "Nested Frames" [ref=e62]:
              - /url: /nestedframes
          - listitem [ref=e65] [cursor=pointer]:
            - link "Modal Dialogs" [ref=e66]:
              - /url: /modal-dialogs
      - generic [ref=e69]: Widgets
      - generic [ref=e82]: Interactions
      - generic [ref=e94]: Book Store Application
    - generic [ref=e107]:
      - heading "Alerts" [level=1] [ref=e108]
      - generic [ref=e109]:
        - generic [ref=e110]: Click Button to see alert
        - button "Click me" [active] [ref=e112] [cursor=pointer]
      - generic [ref=e113]:
        - generic [ref=e114]: On button click, alert will appear after 5 seconds
        - button "Click me" [ref=e116] [cursor=pointer]
      - generic [ref=e117]:
        - generic [ref=e118]: On button click, confirm box will appear
        - button "Click me" [ref=e120] [cursor=pointer]
      - generic [ref=e121]:
        - generic [ref=e122]: On button click, prompt box will appear
        - button "Click me" [ref=e124] [cursor=pointer]
  - contentinfo [ref=e131]:
    - generic [ref=e132]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import {AlertsPage} from "../pages/AlertsPage";
  3  | import {TestBase} from "../common/TestBase";
  4  | test ('Test alerts', async ({ page }) => {
  5  |     const alertsPage = new AlertsPage(page);
  6  |     const testBase = new TestBase(page);
  7  |     await testBase.goto('alerts');
  8  |     
  9  |     const alertMessage = await alertsPage.clickAlertsButton(page, 'accept');
> 10 |     expect(alertMessage).toBe('You clicked a button');
     |                          ^ Error: expect(received).toBe(expected) // Object.is equality
  11 | })
```