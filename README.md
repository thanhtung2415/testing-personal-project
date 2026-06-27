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

Use separate commits and pushes so the Actions tab shows progress over time.

Vietnamese step-by-step guide:

- `docs/huong-dan-nop-bai.md`
- `docs/github-push-schedule.md`
- `docs/verification-results.md`
- `docs/rubric-alignment-r-clo1.md`
- `docs/submission-evidence.md`

Recommended order:

1. Push repository structure and BlackBox files.
2. Push WhiteBox code and tests.
3. Push SwagStore code, Jest tests, and CI/CD workflow.
4. Push Restful-Booker API testing collection.
5. Push OrangeHRM UI automation tests.
6. Push JMeter performance test plan and report workflow.

## Deployment Notes

For the SwagStore assignment, connect this repository to Render or Railway.

Render option:

1. Create a new Web Service from the GitHub repository.
2. Set build command: `npm install`.
3. Set start command: `npm run start:swagstore`.
4. Enable auto deploy from the `main` branch.
5. Optionally add a GitHub secret named `RENDER_DEPLOY_HOOK_URL` so the workflow can trigger deployment after tests pass.

Railway option:

1. Create a new Railway project from the GitHub repository.
2. Set start command: `npm run start:swagstore`.
3. Enable automatic deployments from GitHub.

Fill in these links after deployment:

- GitHub repository: https://github.com/thanhtung2415/testing-personal-project
- GitHub Actions: https://github.com/thanhtung2415/testing-personal-project/actions
- Render/Railway deployment: pending setup in Render or Railway

## Verified GitHub Actions Runs

| Workflow | Status | Run |
| --- | --- | --- |
| BlackBox Docs Check | Success | https://github.com/thanhtung2415/testing-personal-project/actions/runs/28297173344 |
| WhiteBox Jest Tests | Success | https://github.com/thanhtung2415/testing-personal-project/actions/runs/28297190892 |
| SwagStore CI/CD | Success | https://github.com/thanhtung2415/testing-personal-project/actions/runs/28297206056 |
| Restful-Booker API Tests | Success | https://github.com/thanhtung2415/testing-personal-project/actions/runs/28297221621 |
| OrangeHRM UI Automation | Success | https://github.com/thanhtung2415/testing-personal-project/actions/runs/28297236205 |
| JMeter Performance Tests | Success | https://github.com/thanhtung2415/testing-personal-project/actions/runs/28298996720 |
