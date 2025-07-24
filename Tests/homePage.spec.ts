import { test } from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { HomePage } from '../Pages/HomePage'

const user = process.env.LOGIN_USER!
const password = process.env.LOGIN_PASSWORD!

const produtos = ['Sauce Labs Bike Light', 'Sauce Labs Backpack']

test('clicking on products', async ({ page }) => {
  const loginPage = new LoginPage(page)
  const homePage = new HomePage(page)

  await loginPage.goto()
  await loginPage.fillLogin(user, password)
  await homePage.nameProducts(produtos)
})

test('click Add to cart', async ({ page }) => {
  const loginPage = new LoginPage(page)
  const homePage = new HomePage(page)

  await loginPage.goto()
  await loginPage.fillLogin(user, password)
  await homePage.addProductsToCart(produtos)
})