# 02 - WhiteBox Testing

Target unit: `calculateOrder` in `src/cartCalculator.js`

## Objective

Validate internal logic using whitebox testing techniques:

- Statement coverage
- Branch coverage
- Condition coverage
- Exception path testing

## How to Run

From repository root:

```bash
npm install
npm run test:whitebox
```

Coverage report:

```text
coverage/lcov-report/index.html
```

## Main Branches Tested

| Logic Area | Covered By |
| --- | --- |
| Empty cart | `returns zero total for empty cart` |
| Invalid input | `rejects invalid item quantity` |
| Normal subtotal | `calculates a normal domestic standard order` |
| Coupon discount | `applies SAVE10 coupon` |
| Free shipping coupon | `applies FREESHIP coupon` |
| VIP discount | `applies VIP tier discount` |
| Shipping branch | `adds express and international shipping fees` |

