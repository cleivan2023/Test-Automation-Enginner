describe('Seleccionando por ID', () => {
    it('Enviando un mensaje', () => {
        cy.visit('https://ljcl79.github.io/primera-pagina-ia-taller-adl/');
        cy.get('#message').type('Este es un mensaje de prueba');
    });
});