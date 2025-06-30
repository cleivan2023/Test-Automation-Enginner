describe("Acceso al site y envio de formulario", () => {
    it("Llenar ek formulario", () => {
        //Acceder al site
        cy.visit('https://ljcl79.github.io/primera-pagina-ia-taller-adl/');
        cy.get('[name="name"]');
        cy.get('[name="email"]');
        cy.get('#message');
        

    });
})