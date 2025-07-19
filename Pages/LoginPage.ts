import { Page } from '@playwright/test'

export class LoginPage {
  page: Page

  constructor(page: Page) {
    this.page = page
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/')
  }

  async fillLogin(user: string, password: string) {
    await this.page.locator('//input[@data-test="username"]').fill(user)
    await this.page.locator('//input[@data-test="password"]').fill(password)
    await this.page.locator('//input[@data-test="login-button"]').click()
  }
}