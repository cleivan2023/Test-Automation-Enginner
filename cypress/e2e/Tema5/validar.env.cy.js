describe("Validar el ambiente", () => {

    it("Login de usuario", () => {
        cy.visit("/login"); //solo le paso el enlase que necesito revisar de la pagina
        cy.get("#username").type(Cypress.env("username"));//env dentro de tus archivos buscame lo que necesito en ""
        cy.get("#password").type(Cypress.env("password"));
        cy.get("#login > button").click();
        cy.get('#flash').contains('You logged into a secure area!');
    });
});