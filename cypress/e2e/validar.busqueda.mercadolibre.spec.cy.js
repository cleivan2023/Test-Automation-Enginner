 /*describe('Ingresar a Mercado Libre y buscar elementos', () => {
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
})*/

//codigo gerardo que si funciona: 
describe('Validacion mercado libre', () => {
    it('Validar busqueda de producto', () => {
        cy.visit('https://www.mercadolibre.cl/');
        cy.get('#cb1-edit').type('iphone');
        cy.get('.nav-search-btn').click();
        cy.origin('https://listado.mercadolibre.cl', () => {
            cy.get('#root-app > div > div.ui-search-main.ui-search-main--only-products.ui-search-main--with-topkeywords > aside > div.ui-search-breadcrumb > h1').contains('Iphone', { matchCase: false });
        });
    });
});