import { Page, expect } from '@playwright/test'

export class CheckoutOverviewPage {
  page: Page

  constructor(page: Page) {
    this.page = page
  }

  async checkPage() {
    const title = this.page.locator('[data-test="title"]')
    await expect(title).toHaveText('Checkout: Overview')
  }

  async verifyProducts(expectedProducts: string[]) {
    for (const name of expectedProducts) {
      const item = this.page.locator('.cart_item').filter({ hasText: name })
      const itemName = item.locator('.inventory_item_name')
      await expect(itemName).toHaveText(name)
    }
  }

  async clickFinish() {
    const finishButton = this.page.locator('[data-test="finish"]')
    await finishButton.click()
  }
}
