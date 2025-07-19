import { test } from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { HomePage } from '../Pages/HomePage'
import { YourCartPage } from '../Pages/YourCartPage'
import { CheckoutInformationPage } from '../Pages/CheckoutInformationPage'

const produtos = ['Sauce Labs Backpack']

test('checkout with information', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const homePage = new HomePage(page)
    const cartPage = new YourCartPage(page)
    const infoPage = new CheckoutInformationPage(page)

    await loginPage.goto()
    await loginPage.fillLogin('standard_user', 'secret_sauce')

    await homePage.addProductsToCart(produtos)
    await homePage.goToCart()

    await cartPage.checkPage()
    await cartPage.verifyCartItems(produtos)
    await cartPage.clickCheckout()

    await infoPage.fillCheckoutForm('Test', 'Checkout', '12345')
    await infoPage.continueToOverview()
})
