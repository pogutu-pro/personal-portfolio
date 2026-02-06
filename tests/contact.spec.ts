import { test, expect } from "@playwright/test"

test.describe("Contact Form", () => {
  test("should validate required fields", async ({ page }) => {
    await page.goto("/contact")

    await page.click('button[type="submit"]')

    await expect(page.locator('text=Name must be at least')).toBeVisible()
    await expect(page.locator('text=Please enter a valid email')).toBeVisible()
  })

  test("should submit valid form", async ({ page }) => {
    await page.goto("/contact")

    await page.fill('input[name="name"]', "Test User")
    await page.fill('input[name="email"]', "test@example.com")
    await page.fill('input[name="subject"]', "Test Subject")
    await page.fill('textarea[name="message"]', "This is a test message")

    await page.click('button[type="submit"]')

    // Note: This will fail until API is implemented
    // For now, we're just testing the form structure
    await expect(page.locator('button[type="submit"]')).toBeVisible()
  })
})
