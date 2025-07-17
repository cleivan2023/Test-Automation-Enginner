const baseUrl = 'https://ecommerce-js-test.vercel.app/';
describe("Carga de productos", () => {

    it("Carga de Fixtures", () => {
        cy.intercept("Get", "https://fakestoreapi.com/products", {
        fixtures: 'products.mock.jason'
    }).as('getProducts');

    cy.visit(baseUrl);
    cy.wait('@getProducts').its('response.body').should('have.lenght', 50);

    //Validacion de la historia de usuario, 20 elementos.
    cy.get('.product-card').should('have.length',20);
    })
});