# 06 - Performance Testing - Apache JMeter

Target API: Restful-Booker  
Base URL: `https://restful-booker.herokuapp.com`

## Objective

Measure basic response time and reliability for public API endpoints using Apache JMeter.

## Test Plan

File:

```text
jmeter/restful-booker-load-test.jmx
```

## Load Profile

| Setting | Value |
| --- | --- |
| Threads | 5 users |
| Ramp-up | 10 seconds |
| Loop count | 3 |
| Endpoints | `/ping`, `/booking` |

## How to Run Locally

If JMeter is installed:

```bash
jmeter -n -t 06-performance-jmeter/jmeter/restful-booker-load-test.jmx -l 06-performance-jmeter/results/results.jtl -e -o 06-performance-jmeter/results/html-report
```

## How to Run on GitHub Actions

Push changes to:

```text
06-performance-jmeter/**
.github/workflows/jmeter-performance.yml
```

The workflow downloads Apache JMeter, executes the test plan, and uploads the HTML report as an artifact.

## Evidence to Attach

- `.jmx` test plan
- GitHub Actions successful run
- HTML performance report artifact
- Summary screenshot from JMeter report

