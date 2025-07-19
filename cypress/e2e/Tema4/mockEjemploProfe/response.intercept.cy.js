/*Este ejercicio te enseña cómo usar Cypress para 
simular distintos comportamientos de la API según el ID del producto solicitado. 
La prueba simula qué ocurre en la app cuando:
Se solicita un producto inválido (ID 1) y la API responde con error 404.
Se solicita un producto válido (ID 2) y la app debe mostrar su detalle correctamente. */

describe('Testing de acuerdo a la respuesta', () => {

    it('should show error for invalid product ID', () => {
        cy.intercept('GET', '/products/*', (req) => {
            const productId = req.url.split('/').pop(); // Extraer el ID de la URL
            if (productId === '1') {
                req.reply({ statusCode: 404, body: { error: 'ID de producto inválido' } });
            } else {
                req.continue(); // Dejar pasar la solicitud real si el ID es válido
            }
        }).as('dynamicProductCheck');

        cy.visit('https://ecommerce-js-test.vercel.app/')
        cy.get('#product_1').click();
        cy.wait('@dynamicProductCheck');
        cy.contains('Product not found');
    });

    it('should show error for invalid product ID', () => {
        cy.intercept('GET', '/products/*', (req) => {
            const productId = req.url.split('/').pop(); // Extraer el ID de la URL
            if (productId === '1') {
                req.reply({ statusCode: 404, body: { error: 'ID de producto inválido' } });
            } else {
                req.continue(); // Dejar pasar la solicitud real si el ID es válido
            }
        }).as('dynamicProductCheck');

        cy.visit('https://ecommerce-js-test.vercel.app/')
        cy.get('#product_2').click();
        cy.wait('@dynamicProductCheck');
        cy.contains('Casual Premium');
    });
});

/* ¿Qué aprendes con esta prueba?
Cómo hacer interceptaciones condicionales con Cypress.
Cómo probar el comportamiento del frontend según distintos valores en la URL.
Cómo testear el manejo de errores (404).
Cómo permitir solicitudes reales con req.continue() si no estás simulando nada. */