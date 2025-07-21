const { $ } = require('@wdio/globals')
const { BasePage } = require("./base.page"); //toma lo que se exporta del archivo base, que voy a usar

class RegistroPage extends BasePage {
    get inputName() {
        return $('#name');

    }

    get inputConfirmPassword() {
        return $('#confirmPassword');

    }

     async registro(name, email, password, confirmPassword) {

        await this.inputName.setValue(name);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.inputConfirmPassword.setValue(confirmPassword);

        await this.btnSubmit.click();

    }
}

module.exports = { RegistroPage }
//o puede ser : module.exports = new RegistroPage();
