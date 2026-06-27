# 05 - UI Automation Testing - OrangeHRM

Target application: `https://opensource-demo.orangehrmlive.com`

## Tool

Playwright

## Test Accounts

| Role | Username | Password |
| --- | --- | --- |
| Admin | `Admin` | `admin123` |

## Test Scenarios

| TC ID | Scenario | Expected Result |
| --- | --- | --- |
| UI-001 | Login with invalid credentials | Invalid credentials message is shown |
| UI-002 | Login with valid admin credentials | Dashboard page is displayed |
| UI-003 | Navigate to PIM module | PIM page is displayed |

## How to Run

From repository root:

```bash
npm install
npx playwright install chromium
npm run test:ui
```

HTML report:

```bash
npx playwright show-report
```

## Evidence to Attach

- Screenshot of passing GitHub Actions run
- Playwright HTML report artifact
- Screenshot/video if any failed test is investigated

