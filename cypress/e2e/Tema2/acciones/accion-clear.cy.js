describe('Verificando el contenido', () => {
    it('Limpiando la caja de email', () => {
        cy.visit('https://ljcl79.github.io/primera-pagina-ia-taller-adl/');
        cy.get('#email').clear();
        cy.get('#email').should('have.value', '');
    });
});