import { loginPage } from "../pages/login.Page.js";

describe("Verificando el login - POM", () => {
    beforeEach(() => {
        cy.visit("/");
    }); 

    it("Vereficando el usuario standard", () => {
        const baseUrl = Cypress.config("baseUrl");
        loginPage.login("standard_user", Cypress.env("saucePassword"));
        cy.url().should("eq", `${baseUrl}/inventory.html`);
    });

    it("Verificando el usuario con problemas", () => {
        loginPage.login("locked_out_user", Cypress.env("saucePassword"));
        loginPage.elements.mensajeError().should("be.visible");
    });
});
 //la dirferencia con los customCommand
 //lo que se gana con esto es lineas, organizacion, codigo
 
describe("verificando el usuario con problema", () => {

    it("Vereficando el usuario standard", () => {
        const baseUrl = Cypress.config("baseUrl");
        cy.login("standard_user", Cypress.env("saucePassword"));
        cy.url().should("eq", `${baseUrl}/inventory.html`);
    });

    it("Verificando el usuario con problemas", () => {
        cy.login("locked_out_user", Cypress.env("saucePassword"));
        cy.get('#login_button_container > div > form > div.error-message-container.error > h3').should("be.visible");
    });
});