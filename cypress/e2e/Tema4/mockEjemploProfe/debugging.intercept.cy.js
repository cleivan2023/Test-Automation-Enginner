// cypress/e2e/productsApiMock.cy.js
//Este test simula (mockea) la respuesta de una API (/products) con un archivo local (products.mock.json) 
// y verifica que los productos ficticios se muestren correctamente en la interfaz web.

describe('Testing con depuración la lista de productos con API mockeada', () => {


    it('Debería mostrar productos mockeados correctamente en la UI', () => {
        cy.intercept('GET', '**/products', (req) => {
            Cypress.log({ name: 'Intercept', message: 'Interceptando consulta' });
            req.reply({ fixture: 'products.mock.json' });
        }).as('getProducts');

        cy.visit('https://ecommerce-js-test.vercel.app/');// <-- ¡Ajusta esta URL a tu aplicación de prueba!

        cy.wait('@getProducts').then((interception) => {
            cy.log(`Petición interceptada. URL: ${interception.request.url}`);
            cy.log(`Respuesta mockeada recibida. Status: ${interception.response.statusCode}, Body Length: ${interception.response.body.length}`);
            // No necesitas un return aquí, la cadena continúa con .its()
            expect(interception.response.body).to.have.length(2);
        });

        cy.contains('Laptop Pro').should('be.visible');
        cy.contains('1200').should('be.visible'); // Asumiendo que el precio también es visible

        cy.contains('Smartphone X').should('be.visible');
        cy.contains('800').should('be.visible'); // Asumiendo que el precio también es visible

        cy.get('.product-card').should('have.length', 2);
    });
});

//¿Para qué sirve este test?
//Este tipo de prueba es ideal para:
//Validar que la app se comporte correctamente sin depender de una API real
//Probar diferentes escenarios: sin productos, con error 500, con datos incorrectos, etc.
//Mejorar velocidad y estabilidad del testing