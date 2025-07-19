import { Page, expect } from '@playwright/test'

export class HomePage {
  page: Page

  constructor(page: Page) {
    this.page = page
  }

  async checkPage() {
    const logo = this.page.locator('.app_logo')
    await expect(logo).toHaveText('Swag Labs')
  }

  async nameProducts(names: string[]) {
    for (const name of names) {
      const product = this.page.locator(`//div[contains(@class, "inventory_item_name") and text()="${name}"]`)
      await product.click()

      const detailTitle = this.page.locator('.inventory_details_name.large_size')
      await expect(detailTitle).toHaveText(name)

      const backButton = this.page.locator('[data-test="back-to-products"]')
      await backButton.click()
      await expect(this.page.locator('.inventory_list')).toBeVisible()
    }
  }

  async addProductsToCart(names: string[]) {
    for (const name of names) {
      const product = this.page.locator('.inventory_item').filter({
        hasText: name,
      })

      const addButton = product.locator('button:has-text("Add to cart")')
      await addButton.click()
    }
  }

  async goToCart() {
    const cartIcon = this.page.locator('.shopping_cart_link')
    await cartIcon.click()
  }

}