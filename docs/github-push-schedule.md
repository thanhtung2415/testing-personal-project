# Suggested GitHub Push Schedule

The teacher expects GitHub Actions activity over time, not one final upload. Use this schedule to create natural evidence of work.

## 25 June 2026

```bash
git add README.md 01-blackbox-testing .gitignore package.json
git commit -m "Initialize testing assignment repository"
git push
```

```bash
git add 02-whitebox-testing
git commit -m "Add whitebox testing source and unit tests"
git push
```

## 26 June 2026

```bash
git add 03-swagstore-cicd .github/workflows/swagstore-ci-cd.yml
git commit -m "Add SwagStore CI/CD assignment"
git push
```

```bash
git add 04-api-testing-restful-booker .github/workflows/api-newman.yml
git commit -m "Add Restful-Booker API tests with Newman"
git push
```

## 27 June 2026

```bash
git add 05-ui-automation-orangehrm .github/workflows/orangehrm-ui.yml
git commit -m "Add OrangeHRM UI automation tests"
git push
```

```bash
git add 06-performance-jmeter .github/workflows/jmeter-performance.yml
git commit -m "Add JMeter performance testing workflow"
git push
```

## 28 June 2026

```bash
git add README.md docs
git commit -m "Finalize submission documentation"
git push
```

After each push, open the GitHub repository's Actions tab and wait for the workflow run to finish.

