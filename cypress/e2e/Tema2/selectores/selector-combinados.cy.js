describe('Selector combinado', () => {
    it('Llenando el contenido de un input', () => {
        cy.visit('https://ljcl79.github.io/primera-pagina-ia-taller-adl/');
        cy.get('#formulario input[type="email"]').type('leonardo@gmail.com');
    });
});