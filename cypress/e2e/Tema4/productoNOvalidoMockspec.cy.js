const baseUrl = "https://ecommerce-js-test.vercel.app/";
const apiURL = "https://fakestoreapi.com/products";

describe("Carga de productos", () => {

    it ("Producto no válido", () => {

        cy.intercept('GET', apiURL + '/**', {
            statusCode: 200
        }).as('getInvalidProduct');

        cy.visit(baseUrl);
        cy.get('#product_1').click();
        cy.wait('@getInvalidProduct');
        cy.contains('Product not found');

    });

});


    //en este prueba se quiere capturar cualquier ruta que tenga product y algo mas, 