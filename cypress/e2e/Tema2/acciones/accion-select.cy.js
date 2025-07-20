describe('Seleccionando un valor', () => {
    it('Verificando la selección de un picklist', () => {
        cy.visit('https://ljcl79.github.io/primera-pagina-ia-taller-adl/');
        cy.get('#fotos').select('Punta del Este');
        cy.get('select').should('have.value', 'Punta del Este')
    });
});