describe('Seleccionando por atributo', () => {
    it('Verificando el envio del formulario', () => {
        cy.visit('https://ljcl79.github.io/primera-pagina-ia-taller-adl/');
        cy.get('[data-cy=boton_enviar]').click();
        cy.get('.contactenos').contains('Formulario enviado!');
    });
});