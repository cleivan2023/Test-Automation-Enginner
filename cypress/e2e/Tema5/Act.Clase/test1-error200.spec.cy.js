//1- Mock para simular retorno vacío, debe aparecer el mensaje. Ningún producto disponible.

describe('Lista vacia de productos', () => {
    
    it('muestra mensaje cuando no hay producto desponible', () => {
        cy.intercept('GET', '**/products', {
            statusCode: 200, 
            body: [],
        }).as('getProducts');

        cy.visit('https://ecommerce-js-test.vercel.app/');

        cy.wait('@getProducts');

        cy.contains('Ningún producto disponible.').should('be.visible');
        
    });
});