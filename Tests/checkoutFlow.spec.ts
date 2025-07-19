import { test } from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { HomePage } from '../Pages/HomePage'
import { YourCartPage } from '../Pages/YourCartPage'
import { CheckoutInformationPage } from '../Pages/CheckoutInformationPage'
import { CheckoutOverviewPage } from '../Pages/CheckoutOverviewPage'
import { CheckoutCompletePage } from '../Pages/CheckoutCompletePage'

const produtos = ['Sauce Labs Backpack', 'Sauce Labs Bike Light']

test('You must successfully make a purchase on SauceDemo', async ({ page }) => {
  const loginPage = new LoginPage(page)
  const homePage = new HomePage(page)
  const cartPage = new YourCartPage(page)
  const infoPage = new CheckoutInformationPage(page)
  const overviewPage = new CheckoutOverviewPage(page)
  const completePage = new CheckoutCompletePage(page)

  // Login
  await loginPage.goto()
  await loginPage.fillLogin('standard_user', 'secret_sauce')

  // Add products and go to cart
  await homePage.addProductsToCart(produtos)
  await homePage.goToCart()

  // Check cart and start checkout
  await cartPage.checkPage()
  await cartPage.verifyCartItems(produtos)
  await cartPage.clickCheckout()

  // Fill in customer data
  await infoPage.fillCheckoutForm('Test', 'Checkout', '12345')
  await infoPage.continueToOverview()

  // Check purchase summary and finalize
  await overviewPage.checkPage()
  await overviewPage.verifyProducts(produtos)
  await overviewPage.clickFinish()

  // Check checkout page
  await completePage.checkPage()
})
