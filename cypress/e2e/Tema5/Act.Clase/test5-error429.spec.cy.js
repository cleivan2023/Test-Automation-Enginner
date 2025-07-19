//5- Mock para validar respuesta de cualquier otro error, debe aparecer: Código de error: (el código)

describe('Pruebas Ecommerce', () => {
    it('validar respuesta de cualquier otro error', () => {
        cy.visit('https://ecommerce-js-test.vercel.app/')
         cy.intercept('GET', '**/products', {
      statusCode: 429,
    }).as('rateLimit')

    cy.wait('@rateLimit')
    cy.get('.text-lg').should('have.text','Error: código de error: (429)')
});
})
