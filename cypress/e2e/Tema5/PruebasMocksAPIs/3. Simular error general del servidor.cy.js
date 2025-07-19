//Objetivo: Mostrar "Error general de la API" para código 500.

describe('Ejercicio 3 - Mock error general del servidor', () => {
  it('Debe mostrar mensaje "Error general de la API"', () => {
    cy.intercept('GET', '**/products', {
      statusCode: 500,
      body: { error: 'Internal Server Error' }
    }).as('serverError');

    cy.visit('https://ecommerce-js-test.vercel.app/');
    cy.wait('@serverError');

    cy.contains('Error general de la API').should('be.visible');
  });
});
