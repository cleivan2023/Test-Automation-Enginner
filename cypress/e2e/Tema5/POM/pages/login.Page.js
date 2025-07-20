//The Page Object Model (POM)
class Login {

    //pripiedades o elementos
    elements = {
        inputUsuario: () => cy.get('#user-name'),
        inputPassword: () => cy.get('#password'),
        botonLogin: () => cy.get('#login-button'),
        mensajeError: () => cy.get('#login_button_container > div > form > div.error-message-container.error > h3'),
        
    };

    //Metodos o comportamientos (Funciones)
    typeUsername(userName) {
        this.elements.inputUsuario().type(userName)
    };

    typePassword(password) {
        this.elements.inputPassword().type(password)

    };

    clickLogin(){
        this.elements.botonLogin().click();

    };

    login(userName, password) {
        this.typeUsername(userName);
        this.typePassword(password);
        this.clickLogin();
    }
}

export const loginPage = new Login();