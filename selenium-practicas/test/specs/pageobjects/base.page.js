const { $, browser } = require('@wdio/globals')

class BasePage {
        get inputEmail() {
            return $('#email');
        }

        get inputPassword() {
            return $('#password');
        }

        get btnSubmit() {
            return $('[type="submit"]')
        }

        get spanNombreUsuario() {
            return $('.space-x-2 > .text-sm');

        }

        get btnLogout() {
            return $('#root > div > nav > div > div > div > button');
        }

       clickbtnOperacion(operacion) {
            return $(`a[href="/${operacion}"]`).click()
        }

        open() {

            return browser.url(`https://ecommerce-js-test.vercel.app/`);
        }

}

module.exports = { BasePage } //exportamos los datos aca
