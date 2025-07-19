//Objetivo: Mostrar "Código de error: (código)" para cualquier otro código no manejado.

describe('Ejercicio 5 - Mock error genérico', () => {
  it('Debe mostrar "Código de error: 418"', () => {
    cy.intercept('GET', '**/products', {
      statusCode: 418, // Código de ejemplo no manejado
      body: { error: "I'm a teapot" }
    }).as('unknownError');

    cy.visit('https://ecommerce-js-test.vercel.app/');
    cy.wait('@unknownError');

    cy.contains('Código de error: 418').should('be.visible');
  });
});
