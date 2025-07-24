import { test } from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { HomePage } from '../Pages/HomePage'
import { YourCartPage } from '../Pages/YourCartPage'

const user = process.env.LOGIN_USER!
const password = process.env.LOGIN_PASSWORD!

const produtos = ['Sauce Labs Bike Light', 'Sauce Labs Backpack']

test('verify items in cart', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const homePage = new HomePage(page)
    const cartPage = new YourCartPage(page)

    await loginPage.goto()
    await loginPage.fillLogin(user, password)

    await homePage.addProductsToCart(produtos)
    await homePage.goToCart()

    await cartPage.checkPage()
    await cartPage.verifyCartItems(produtos)
})
