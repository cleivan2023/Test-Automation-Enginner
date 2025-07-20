describe('Verificando el foco', () => {
    it('Enfocando la caja de email', () => {
        cy.visit('https://ljcl79.github.io/primera-pagina-ia-taller-adl/');
        cy.get('#email').focus();
        cy.get('#email').should('be.focused');
    });
});