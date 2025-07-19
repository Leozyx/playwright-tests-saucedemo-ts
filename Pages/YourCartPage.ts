import { Page, expect } from '@playwright/test'

export class YourCartPage {
    page: Page

    constructor(page: Page) {
        this.page = page
    }

    async checkPage() {
        const cartTitle = this.page.locator('[data-test="title"]')
        await expect(cartTitle).toHaveText('Your Cart')
    }

    async verifyCartItems(expectedItems: string[]) {
        for (const name of expectedItems) {
            const itemLocator = this.page.locator('.cart_item').filter({
                hasText: name
            })

            const itemName = itemLocator.locator('.inventory_item_name')
            await expect(itemName).toHaveText(name)
        }
    }

    async clickCheckout() {
        const checkoutButton = this.page.locator('[data-test="checkout"]')
        await checkoutButton.click()
    }

}
