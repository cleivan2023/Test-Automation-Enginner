//1- Mock para simular retorno vacío, debe aparecer el mensaje. Ningún producto disponible.
describe('visit the URL to simulate server general error', () => {
    beforeEach(() => {
        cy.visit('https://ecommerce-js-test.vercel.app/')
        cy.viewport(1280,720) //define para ver el ancho de pantalla de la prueba y queda como medida estandar del 100% de la pantalla

    })

    it('should return an empty body', () => {
        cy.intercept('GET', '**/products', { fixture: 'empty.products.json'   
        }).as('getEmptyProducts')

        cy.wait('@getEmptyProducts').its('response.body').should('have.length', 0)
        cy.get('.py-8 > .text-center > .text-xl')
    })
})