const baseUrl = "https://ecommerce-js-test.vercel.app/";
const apiURL = "https://fakestoreapi.com/products";

describe("Carga de productos", () => {

    it ("Showd show loading spinner for slow product load", () => {

         cy.intercept('GET', '/products/*', (req) => {
            req.reply({ fixture: 'products.mock.json', delay: 2000 }); //Retraso por 2 segundos 
        }).as('slowProducts');

        cy.visit('https://ecommerce-js-test.vercel.app/');
        cy.get('.animate-spin').should('be.visible'); //validar spinner
        cy.wait('@slowProducts');
        cy.get('.animate-spin').should('not.exist');
        cy.get('.product-card').should('have.length.greaterThan', 0);
      

    });

});

//esta prueba el producto tarda mas tiempo de lo esperado, 
// con esto nos muetra la carga de la pagina para ver como se ve esa fase 
//se simula el estado de la red