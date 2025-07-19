//Objetivo: Mostrar mensaje "Ningún producto disponible" si el array está vacío.

describe('Ejercicio 1 - Mock retorno vacío', () => {
  it('Debe mostrar mensaje "Ningún producto disponible"', () => {
    cy.intercept('GET', '**/products', {
      statusCode: 200,
      body: []
    }).as('emptyProducts');

    cy.visit('https://ecommerce-js-test.vercel.app/');
    cy.wait('@emptyProducts');

    cy.contains('Ningún producto disponible').should('be.visible');
    cy.get('.product-card').should('not.exist');
  });
});
