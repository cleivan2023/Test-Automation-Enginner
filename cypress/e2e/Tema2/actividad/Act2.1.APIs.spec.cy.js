describe('Visit the URL to simulate server general error', () => {
    beforeEach() => {
     cy.visit('https://ecommerce-js-test.vercel.app/') 
     cy.viewport(1280, 720)     
 })

it('Should return an empty body', () => {
    cy.intercept('GET', '**/products', { fixture: 'products.mock.json'}).as(
        'getEmptyProducts'
    )

    cy.wait('@ge,EmptyProducts').its('response.body').should('have.length', 0)
    cy.get('.py-8 > .text-center > .text-xl')
  }) 





