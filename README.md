# Software Testing Final Projects

This repository contains the six individual testing assignments required for submission on 28 June 2026.

## Assignment Map

| No. | Assignment | Folder | Main output |
| --- | --- | --- | --- |
| 1 | BlackBox Testing | `01-blackbox-testing` | Test plan, test cases, and bug report |
| 2 | WhiteBox Testing | `02-whitebox-testing` | Source code, Jest unit tests, and coverage |
| 3 | Sauce Demo / SwagStore CI/CD | `03-swagstore-cicd` | Node.js ecommerce app, Jest API tests, CI/CD workflow |
| 4 | API Testing | `04-api-testing-restful-booker` | Restful-Booker Postman collection and Newman workflow |
| 5 | UI Automation Testing | `05-ui-automation-orangehrm` | Playwright tests for OrangeHRM |
| 6 | Performance Testing | `06-performance-jmeter` | Apache JMeter test plan and GitHub Actions report |

## Local Setup

```bash
npm install
```

Run each assignment test:

```bash
npm run test:whitebox
npm run test:swagstore
npm run test:api
npm run test:ui
```

Run the SwagStore demo app locally:

```bash
npm run start:swagstore
```

Then open `http://localhost:3000`.

## GitHub Actions Evidence

Submission evidence and local verification summary:

- `docs/submission-evidence.md`
- `docs/verification-results.md`

## Project Links

- GitHub repository: https://github.com/thanhtung2415/testing-personal-project
- GitHub Actions: https://github.com/thanhtung2415/testing-personal-project/actions
- Render deployment: https://swagstore-testing-demo.onrender.com
- Render health check: https://swagstore-testing-demo.onrender.com/api/health

## Deployment Evidence

SwagStore live site:

![SwagStore deployed website](docs/images/swagstore-live.png)

Health check endpoint:

![SwagStore health check endpoint](docs/images/swagstore-health-check-clean.png)

## Verified GitHub Actions Runs

| Workflow | Status | Run |
| --- | --- | --- |
| BlackBox Docs Check | Success | https://github.com/thanhtung2415/testing-personal-project/actions/runs/28297173344 |
| WhiteBox Jest Tests | Success | https://github.com/thanhtung2415/testing-personal-project/actions/runs/28297190892 |
| SwagStore CI/CD | Success | https://github.com/thanhtung2415/testing-personal-project/actions/runs/28297206056 |
| Restful-Booker API Tests | Success | https://github.com/thanhtung2415/testing-personal-project/actions/runs/28297221621 |
| OrangeHRM UI Automation | Success | https://github.com/thanhtung2415/testing-personal-project/actions/runs/28297236205 |
| JMeter Performance Tests | Success | https://github.com/thanhtung2415/testing-personal-project/actions/runs/28298996720 |
