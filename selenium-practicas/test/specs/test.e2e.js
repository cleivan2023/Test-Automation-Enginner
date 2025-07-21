//falta revisar las primeras lineas


const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flasAlert).toBeExisting()
        await expect(SecurePage.flasAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
    })
})