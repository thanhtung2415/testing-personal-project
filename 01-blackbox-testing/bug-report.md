# Bug Report - SauceDemo

## Defect Classification Summary

| Bug ID | Defect Type | Testing Technique | Severity | Priority | Main Risk |
| --- | --- | --- | --- | --- | --- |
| BUG-001 | Access control / authentication validation | Negative testing, equivalence partitioning | Medium | High | User cannot access the system |
| BUG-002 | UI / visual content defect | Exploratory testing, user interface testing | Low | Medium | Product information may be misunderstood |
| BUG-003 | Performance defect | Performance observation, response time validation | Medium | Medium | Slow loading may reduce user satisfaction |

## BUG-001 - Locked account cannot log in

| Field | Value |
| --- | --- |
| Module | Login |
| Test account | `locked_out_user` / `secret_sauce` |
| Defect type | Access control / authentication validation |
| Testing technique | Negative testing, equivalence partitioning |
| Severity | Medium |
| Priority | High |
| Status | Known behavior |

### Steps to Reproduce

1. Open `https://www.saucedemo.com`.
2. Enter username `locked_out_user`.
3. Enter password `secret_sauce`.
4. Click Login.

### Expected Result

The system displays a clear message explaining that the account is locked.

### Actual Result

The system displays: `Epic sadface: Sorry, this user has been locked out.`

### Note

This is expected behavior for the demo account, but it is still recorded as a negative login validation case.

### Root Cause and Context

The account is intentionally configured as locked in the test environment. The defect context is an authentication flow where a valid username and valid password are not enough because the account state is blocked. This is a state-based validation case, not a simple invalid credential case.

### Impact Analysis

- System impact: the authentication module correctly blocks restricted accounts, but the flow must be verified so locked users cannot bypass access control.
- User impact: the user cannot access the ecommerce system and needs a clear reason to understand what happened.
- Development impact: developers must maintain separate handling for invalid credentials, missing fields, and locked account states.

### Testing Terms Used

Negative testing, access control validation, authentication state, expected result, actual result, severity, priority.

## BUG-002 - Problem user product images are inconsistent

| Field | Value |
| --- | --- |
| Module | Product List |
| Test account | `problem_user` / `secret_sauce` |
| Defect type | UI / visual content defect |
| Testing technique | Exploratory testing, user interface testing |
| Severity | Low |
| Priority | Medium |
| Status | Open |

### Steps to Reproduce

1. Log in using `problem_user` / `secret_sauce`.
2. Observe product images on the Products page.

### Expected Result

Each product should display the correct product image.

### Actual Result

Product images may appear incorrect or inconsistent for the `problem_user` account.

### Impact

Users may not be able to identify products visually, reducing trust in the product catalog.

### Root Cause and Context

The issue appears when using a special demo account that intentionally exposes UI problems. A likely root cause is incorrect image mapping or broken product image rendering for this user profile. The context is the product listing page, where visual information supports product recognition and purchase decisions.

### Impact Analysis

- System impact: product data and product media are not presented consistently.
- User impact: users may select the wrong product or lose confidence in the catalog.
- Development impact: developers need to check UI rendering, asset mapping, and user-specific data handling.

### Testing Terms Used

UI defect, visual regression, actual result, expected result, product catalog validation, exploratory testing.

## BUG-003 - Performance glitch user loads slowly

| Field | Value |
| --- | --- |
| Module | Login / Product List |
| Test account | `performance_glitch_user` / `secret_sauce` |
| Defect type | Performance defect |
| Testing technique | Performance observation, response time validation |
| Severity | Medium |
| Priority | Medium |
| Status | Open |

### Steps to Reproduce

1. Open `https://www.saucedemo.com`.
2. Log in using `performance_glitch_user` / `secret_sauce`.
3. Measure the loading time until the Products page appears.

### Expected Result

The Products page should load within an acceptable response time, for example under 3 seconds.

### Actual Result

The Products page loads noticeably slower than the standard user flow.

### Impact

Slow loading affects user experience and may cause users to abandon the shopping flow.

### Root Cause and Context

The issue occurs only for the performance glitch account, which suggests a user-specific delay or intentionally injected slow response in the demo system. The context is the transition from login to the Products page, a critical point in the shopping journey.

### Impact Analysis

- System impact: response time is inconsistent across user profiles.
- User impact: slow loading may cause frustration, repeated clicks, or abandonment.
- Development impact: the team should investigate bottlenecks, profile-specific logic, backend latency, and frontend loading behavior.

### Testing Terms Used

Performance defect, response time, latency, user experience impact, severity, priority, risk-based testing.
