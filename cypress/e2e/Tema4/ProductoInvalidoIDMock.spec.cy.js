const baseUrl = "https://ecommerce-js-test.vercel.app/";
const apiURL = "https://fakestoreapi.com/products";

describe("Carga de productos", () => {

    it ("should show error for invalid product ID", () => {

        cy.intercept('GET', '/products/*', (req) => {
            const productId = req.url.split('/').pop();
            if (productId === '1') {
                req.reply({ statusCode: 404, body: { error: 'ID de producto inválido' } });
            } else {
                req.continue();
            }
        }).as('dynamicProductCheck');

        cy.visit(baseUrl);
        cy.get('#product_1').click();
        cy.wait('dynamicProductCheck');
        cy.contains('Product not found');

    });

});

//se intersacta los tipos product con algo mas,que click en el prducto que le 
// indique y falle si busca otro pruducto 