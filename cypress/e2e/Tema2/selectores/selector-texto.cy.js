describe('Seleccionando por texto', () => {
    it('Verificando un texto dentro del site', () => {
        cy.visit('https://ljcl79.github.io/primera-pagina-ia-taller-adl/');
        cy.contains('En nuestro sitio web');
    });
});