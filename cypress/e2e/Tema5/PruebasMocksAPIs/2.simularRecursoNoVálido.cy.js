//Objetivo: Mostrar "Solicitud de consulta no válida" si se pide un recurso con error tipo 400. 

describe('Ejercicio 2 - Mock recurso no válido', () => {
  it('Debe mostrar mensaje "Solicitud de consulta no válida"', () => {
    cy.intercept('GET', '**/products', {
      statusCode: 400,
      body: { error: 'Bad Request' }
    }).as('invalidRequest');

    cy.visit('https://ecommerce-js-test.vercel.app/');
    cy.wait('@invalidRequest');

    cy.contains('Solicitud de consulta no válida').should('be.visible');
  });
});
