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