import { Page } from '@playwright/test'

export class CheckoutInformationPage {
  page: Page

  constructor(page: Page) {
    this.page = page
  }

  async fillCheckoutForm(firstName: string, lastName: string, postalCode: string) {
    await this.page.fill('[data-test="firstName"]', firstName)
    await this.page.fill('[data-test="lastName"]', lastName)
    await this.page.fill('[data-test="postalCode"]', postalCode)
  }

  async continueToOverview() {
    await this.page.click('[data-test="continue"]')
  }
}
