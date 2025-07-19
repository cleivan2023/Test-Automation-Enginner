//Objetivo: Mostrar "Servicio no disponible" si el código es 503.

describe('Ejercicio 4 - Mock servicio no disponible', () => {
  it('Debe mostrar mensaje "Servicio no disponible"', () => {
    cy.intercept('GET', '**/products', {
      statusCode: 503,
      body: { error: 'Service Unavailable' }
    }).as('serviceUnavailable');

    cy.visit('https://ecommerce-js-test.vercel.app/');
    cy.wait('@serviceUnavailable');

    cy.contains('Servicio no disponible').should('be.visible');
  });
});
