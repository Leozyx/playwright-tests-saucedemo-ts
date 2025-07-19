import { test } from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { HomePage } from '../Pages/HomePage'

test('Falid login of page - password', async ({ page }) => {
  const loginPage = new LoginPage(page)

  await loginPage.goto()
  await loginPage.fillLogin('standard_user', 'anything')
})

test('Falid login of page - user', async ({ page }) => {
  const loginPage = new LoginPage(page)

  await loginPage.goto()
  await loginPage.fillLogin('anything', 'secret_sauce')
})

test('Corect login and verification of page', async ({ page }) => {
  const loginPage = new LoginPage(page)
  const homePage = new HomePage(page)

  await loginPage.goto()
  await loginPage.fillLogin('standard_user', 'secret_sauce')
  await homePage.checkPage()
})