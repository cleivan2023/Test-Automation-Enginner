class LoginPage {
  // Selectores
  elements = {
    usernameInput: () => cy.get("#username"),
    passwordInput: () => cy.get("#password"),
    loginBtn: () => cy.get('button[type="submit"]'),
    errorMessage: () => cy.get(".error"),
  };

  // Métodos de acción
  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  // Método combinado
  login(username, password) {
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLogin();
  }
}

export const loginPage = new LoginPage();