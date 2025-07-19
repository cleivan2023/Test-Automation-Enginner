//2- Mock para simular petición de un recurso no valido. 
// Debe validarse que aparezca: Solicitud de consulta no válida

describe('validando estados de errore y casos especiales del API de productos', () => {

    const baseUrl = "https://ecommerce-js-test.vercel.app/";

    beforeEach(() => {

    cy.visit(baseUrl);
});

it("Mock recurso no valido - 404 - mensaje: solicitud de consulta no valida", () => {
    cy.intercept('GET', '**/products', {
            statusCode: 404, 
            body: { message: 'Solicitud de consulta no válida'}
        }).as('getProducts404');

        cy.visit(baseUrl);

        cy.wait('@getProducts404');

        cy.contains('Solicitud de consulta no válida').should('be.visible');
    });

 })

