import { Page, expect } from '@playwright/test'

export class CheckoutCompletePage {
  page: Page

  constructor(page: Page) {
    this.page = page
  }

  async checkPage() {
    const title = this.page.locator('[data-test="title"]')
    await expect(title).toHaveText('Checkout: Complete!')

    const message = this.page.locator('.complete-header')
    await expect(message).toHaveText('Thank you for your order!')
  }

  async backToHome() {
    const backButton = this.page.locator('[data-test="back-to-products"]')
    await backButton.click()
  }
}
