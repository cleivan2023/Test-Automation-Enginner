describe('Ingresar a Mercado Libre y buscar elementos', () => {
  beforeEach(() => {
    cy.visit('https://www.mercadolibre.cl/')
  })

  it('Debería buscar Iphone', () => {
    cy.get('#cb1-edit').type('Iphone')
    cy.get('.nav-search-btn').click()
    cy.get('.ui-search-layout__item').should('exist')
  })

  it('No debería buscar elementos con el campo vacío', () => {
    cy.url().should('eq', 'https://www.mercadolibre.cl/')
  })
})

/* la prueba va a fallar y es porque el url va a cambiar el origen, o sea  de cl, se cambio a otra url*/

