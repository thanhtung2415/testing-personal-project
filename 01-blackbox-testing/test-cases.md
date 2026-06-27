# BlackBox Test Cases - SauceDemo

## Equivalence Partitioning

| TC ID | Module | Scenario | Test Data | Steps | Expected Result | Priority |
| --- | --- | --- | --- | --- | --- | --- |
| BB-LOGIN-001 | Login | Login with valid account | `standard_user` / `secret_sauce` | Open site, enter username, enter password, click Login | User is redirected to Products page | High |
| BB-LOGIN-002 | Login | Login with invalid username | `wrong_user` / `secret_sauce` | Open site, enter data, click Login | Error message is displayed | High |
| BB-LOGIN-003 | Login | Login with invalid password | `standard_user` / `wrong_password` | Open site, enter data, click Login | Error message is displayed | High |
| BB-LOGIN-004 | Login | Login with locked account | `locked_out_user` / `secret_sauce` | Open site, enter data, click Login | Locked account error is displayed | High |
| BB-LOGIN-005 | Login | Login with blank username and password | blank / blank | Open site, leave fields empty, click Login | Username required error is displayed | Medium |
| BB-PROD-001 | Product list | View product list after login | valid account | Login successfully | Product list is visible with product name, image, price, and Add to cart button | High |
| BB-CART-001 | Cart | Add one item to cart | Backpack | Login, click Add to cart on Backpack, open cart | Cart shows Backpack with quantity 1 | High |
| BB-CART-002 | Cart | Remove item from cart | Backpack | Add Backpack, open cart, click Remove | Item is removed and cart badge is updated | High |
| BB-CHECKOUT-001 | Checkout | Complete checkout with valid information | First name: An, Last name: Nguyen, ZIP: 700000 | Add item, checkout, fill information, finish order | Order complete page is displayed | High |
| BB-CHECKOUT-002 | Checkout | Checkout with missing first name | First name blank | Add item, checkout, leave first name blank, continue | First name required error is displayed | High |

## Boundary Value Analysis

| TC ID | Field | Boundary | Test Data | Expected Result |
| --- | --- | --- | --- | --- |
| BB-BVA-001 | First name | Minimum invalid | empty | Required field error |
| BB-BVA-002 | First name | Minimum valid | `A` | User can continue if other fields are valid |
| BB-BVA-003 | Last name | Minimum invalid | empty | Required field error |
| BB-BVA-004 | Last name | Minimum valid | `B` | User can continue if other fields are valid |
| BB-BVA-005 | ZIP code | Minimum invalid | empty | Required field error |
| BB-BVA-006 | ZIP code | Minimum valid | `1` | User can continue to overview page |

## Decision Table - Login

| Rule | Username valid | Password valid | Account locked | Expected Result |
| --- | --- | --- | --- | --- |
| DT-001 | Yes | Yes | No | Login successfully |
| DT-002 | Yes | Yes | Yes | Locked account error |
| DT-003 | Yes | No | No | Invalid credentials error |
| DT-004 | No | Yes | No | Invalid credentials error |
| DT-005 | No | No | No | Invalid credentials error |

## State Transition - Cart and Checkout

| TC ID | Current State | Action | Next State | Expected Result |
| --- | --- | --- | --- | --- |
| BB-ST-001 | Product page, empty cart | Add product | Product page, cart has 1 item | Cart badge shows 1 |
| BB-ST-002 | Cart has 1 item | Remove product | Empty cart | Cart badge disappears |
| BB-ST-003 | Cart has 1 item | Checkout | Checkout information page | Form is displayed |
| BB-ST-004 | Checkout information page | Continue with valid data | Checkout overview page | Product and total are displayed |
| BB-ST-005 | Checkout overview page | Finish | Checkout complete page | Thank-you message is displayed |
| BB-ST-006 | Checkout information page | Cancel | Cart page | User returns to cart |

## Exit Criteria

- All high-priority login, cart, and checkout test cases are executed.
- Defects are documented with actual result, expected result, severity, and reproduction steps.
- Screenshots are attached for failed test cases.

