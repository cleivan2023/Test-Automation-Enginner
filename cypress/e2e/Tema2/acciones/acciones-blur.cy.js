describe('Verificando que la caja no esté con foco', () => {
    it('Validando que la caja de email no este enfocada', () => {
        cy.visit('https://ljcl79.github.io/primera-pagina-ia-taller-adl/');
        cy.get('#email').blur();
        cy.get('#email').should('not.be.focused');
    });
});