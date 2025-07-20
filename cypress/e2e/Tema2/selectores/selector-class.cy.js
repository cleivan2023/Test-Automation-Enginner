describe('Seleccionando por clase', () => {
    it('Verificando el encabezado de la página', () => {
        cy.visit('https://ljcl79.github.io/primera-pagina-ia-taller-adl/');
        cy.get('.texto-encabezado').should('have.text', 'Mi primer sitio web usando IA');
    });
});