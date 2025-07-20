 describe('Ingresar a Mercado Libre y buscar elementos', () => {
  beforeEach(() => {
    cy.visit('https://www.mercadolibre.cl/')
  })

  it('Debería buscar Iphone', () => {
    cy.get('#cb1-edit').type('Iphone')
    cy.get('.nav-search-btn').click()

    cy.origin('https://listado.mercadolibre.cl', () => {
      cy.get('.ui-search-layout__item').should('exist')
    })
  })

  it('No deberia buscar elementos con el campo vacio', () => {
    cy.url().should('eq', 'https://www.mercadolibre.cl/')
  })
})

