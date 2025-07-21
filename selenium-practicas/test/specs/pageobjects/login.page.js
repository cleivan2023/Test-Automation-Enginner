const { $ } = require('@wdio/globals')
const { BasePage } = require("./base.page");

class LoginPage  extends BasePage { //me traego los datos de basepagepara no hacer otra (como clase base animales)
    
    get mensajeError() {
        return $('#root > div > div > div > div > div.bg-red-50.border.border-red-200.rounded-lg.p-4.mb-6').getText() 
    }

    async login(email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);

        await this.btnSubmit.click();

    }
    
}

module.exports = { LoginPage }