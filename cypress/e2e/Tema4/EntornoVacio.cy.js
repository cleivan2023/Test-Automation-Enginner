const baseUrl = "https://ecommerce-js-test.vercel.app/";
const apiURL = "https://fakestoreapi.com/products";

describe("Carga de productos", () => {

    it('Emty array', () => {

         cy.intercept('GET', '/products', {
             fixture: 'empty.products.json'
        }).as('emptyProducts');

        cy.visit(baseUrl);
       
        cy.wait('@emptyProducts').its('response.body').should('have.length', 0);

        // Pausar para inspección
        cy.wait(2000);

        cy.contains('Ningún producto disponible.');
     //toddo va a depender de lo que se pide en la historia de usuario y no lo que el desarrollador pide 
    
    })

});