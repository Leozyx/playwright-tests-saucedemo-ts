import { test } from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { HomePage } from '../Pages/HomePage'
import { YourCartPage } from '../Pages/YourCartPage'
import { CheckoutInformationPage } from '../Pages/CheckoutInformationPage'
import { CheckoutOverviewPage } from '../Pages/CheckoutOverviewPage'

const user = process.env.LOGIN_USER!
const password = process.env.LOGIN_PASSWORD!

const produtos = ['Sauce Labs Backpack', 'Sauce Labs Bike Light']

test('successfully complete purchase', async ({ page }) => {
  const loginPage = new LoginPage(page)
  const homePage = new HomePage(page)
  const cartPage = new YourCartPage(page)
  const infoPage = new CheckoutInformationPage(page)
  const overviewPage = new CheckoutOverviewPage(page)

  await loginPage.goto()
  await loginPage.fillLogin(user, password)

  await homePage.addProductsToCart(produtos)
  await homePage.goToCart()

  await cartPage.checkPage()
  await cartPage.verifyCartItems(produtos)
  await cartPage.clickCheckout()

  await infoPage.fillCheckoutForm('Test', 'Checkout', '12345')
  await infoPage.continueToOverview()

  await overviewPage.checkPage()
  await overviewPage.verifyProducts(produtos)
  await overviewPage.clickFinish()
})
