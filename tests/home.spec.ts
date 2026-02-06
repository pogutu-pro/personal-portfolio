import { test, expect } from "@playwright/test"

test.describe("Home Page", () => {
  test("should load and display content", async ({ page }) => {
    await page.goto("/")

    await expect(page).toHaveTitle(/Paul Ogutu/)
    await expect(page.locator("h1")).toContainText("Hi, I'm")
  })

  test("should have working navigation", async ({ page }) => {
    await page.goto("/")

    await page.click('a[href="/work"]')
    await expect(page).toHaveURL(/\/work/)
  })

  test("should have accessible skip link", async ({ page }) => {
    await page.goto("/")

    const skipLink = page.locator('a[href="#main-content"]')
    await expect(skipLink).toBeVisible({ visible: false })

    await page.keyboard.press("Tab")
    await expect(skipLink).toBeVisible()
  })
})
