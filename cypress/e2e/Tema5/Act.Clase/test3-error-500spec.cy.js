//3- Mock para simular error general del servidor. Validar mensaje. Error general de la API

describe('visit the URL to simulate server general error', () => {
    beforeEach(() => {
        cy.visit('https://ecommerce-js-test.vercel.app/')
    })

    it('should return an 500 error code', () => {
        cy.intercept('GET', '**/products', {
            statusCode: 500, 
            body: {error: 'Error general de la API' },
        }).as('getProducts')
        cy.wait('@getProducts')
        cy.contains('Error general de la API')
    })
})