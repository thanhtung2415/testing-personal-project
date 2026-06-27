# Local Verification Results

Verified on 25 June 2026.

## WhiteBox Testing

Command:

```bash
npm run test:whitebox
```

Result:

- 10 tests passed
- 0 tests failed
- Statement coverage: 100%
- Function coverage: 100%
- Line coverage: 100%
- Branch coverage: 94.73%

## SwagStore CI/CD

Command:

```bash
npm run test:swagstore
```

Result:

- 7 tests passed
- 0 tests failed

## Restful-Booker API Testing

Command:

```bash
npm run test:api
```

Result:

- 7 requests executed
- 13 assertions executed
- 0 assertions failed
- Average response time during local run: 383ms

## OrangeHRM UI Automation

Command:

```bash
npm run test:ui
```

Result:

- 3 tests passed
- 0 tests failed

## JMeter Performance Testing

Command:

```bash
jmeter -n -t 06-performance-jmeter/jmeter/restful-booker-load-test.jmx -l 06-performance-jmeter/results/results.jtl -e -o 06-performance-jmeter/results/html-report
```

Result:

- 30 samples executed
- 0 errors
- Average response time during local run: 396ms
- HTML report generated locally under `06-performance-jmeter/results/html-report`

