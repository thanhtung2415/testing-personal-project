const { test, expect } = require('@playwright/test');

async function openLoginPage(page) {
  await page.goto('/web/index.php/auth/login');
  await expect(page.locator('input[name="username"]')).toBeVisible({ timeout: 30000 });
}

async function login(page, username, password) {
  await page.locator('input[name="username"]').fill(username);
  await page.locator('input[name="password"]').fill(password);
  await page.locator('button[type="submit"]').click();
}

test.describe('OrangeHRM UI automation', () => {
  test('UI-001 shows error for invalid credentials', async ({ page }) => {
    await openLoginPage(page);
    await login(page, 'Admin', 'wrong-password');

    await expect(page.getByText('Invalid credentials')).toBeVisible();
  });

  test('UI-002 logs in with valid admin credentials', async ({ page }) => {
    await openLoginPage(page);
    await login(page, 'Admin', 'admin123');

    await expect(page).toHaveURL(/dashboard/);
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  });

  test('UI-003 navigates to PIM module after login', async ({ page }) => {
    await openLoginPage(page);
    await login(page, 'Admin', 'admin123');

    await expect(page).toHaveURL(/dashboard/);
    await page.getByRole('link', { name: /PIM/i }).click();

    await expect(page).toHaveURL(/pim/);
    await expect(page.getByRole('heading', { name: 'PIM' })).toBeVisible();
  });
});

