describe('Verificando los checks', () => {
    it('Activando las notificaciones', () => {
        cy.visit('https://ljcl79.github.io/primera-pagina-ia-taller-adl/');
        cy.get('#formulario input[type="checkbox"]').check();
        cy.get('#formulario input[type="checkbox"]').should('be.checked');
    });
});