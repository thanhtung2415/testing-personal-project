# 01 - BlackBox Testing

Target application: SauceDemo  
URL: `https://www.saucedemo.com`

## Scope

Modules tested:

- Login
- Product listing
- Sort products
- Cart
- Checkout
- Logout

## BlackBox Techniques Used

- Equivalence Partitioning
- Boundary Value Analysis
- Decision Table Testing
- State Transition Testing
- Negative Testing

## Deliverables

- `test-cases.md`: detailed blackbox test cases
- `bug-report.md`: sample defect reports

## Test Accounts

| Username | Password | Purpose |
| --- | --- | --- |
| `standard_user` | `secret_sauce` | Valid happy path |
| `locked_out_user` | `secret_sauce` | Locked account validation |
| `problem_user` | `secret_sauce` | Intentional defect discovery |
| `performance_glitch_user` | `secret_sauce` | Performance behavior observation |

