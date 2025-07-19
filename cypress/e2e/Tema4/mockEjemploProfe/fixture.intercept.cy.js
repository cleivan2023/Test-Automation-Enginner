// cypress/e2e/productsApiMock.cy.js
//Este archivo contiene dos pruebas que simulan respuestas de la API /products, 
// usando datos ficticios (mock).

describe('Testing la lista de productos con API mockeada', () => {

//Simula que la API responde con 2 productos, y verifica que se muestren en la interfaz.
    it('Debería mostrar productos mockeados correctamente en la UI', () => {
        cy.intercept('GET', '**/products', { fixture: 'products.mock.json' }).as('getProducts');

        cy.visit('https://ecommerce-js-test.vercel.app/');// <-- ¡Ajusta esta URL a tu aplicación de prueba!

        cy.wait('@getProducts').its('response.body').should('have.length', 2);

        cy.contains('Laptop Pro').should('be.visible');
        cy.contains('1200').should('be.visible'); // Asumiendo que el precio también es visible

        cy.contains('Smartphone X').should('be.visible');
        cy.contains('800').should('be.visible'); // Asumiendo que el precio también es visible

        cy.get('.product-card').should('have.length', 2);
    });

    //Simula que la API devuelve un arreglo vacío, y comprueba que la UI 
    // lo maneje bien (sin mostrar productos, pero sí un mensaje).
    it('Debería manejar el caso de una lista de productos vacía', () => {
        // Intercepta con un array vacío para simular que no hay productos
        cy.intercept('GET', '**/products', { body: [] }).as('getEmptyProducts');

        cy.visit('https://ecommerce-js-test.vercel.app/')

        cy.wait('@getEmptyProducts');

        cy.contains('No products git found matching your criteria.').should('be.visible');
        cy.get('.product-card').should('not.exist'); // Asegura que no hay productos renderizados
    });

});

//¿Qué aprendes con esto?
//Cómo mockear respuestas de API en Cypress (con fixture o con body directo).
//Cómo testear la interfaz con datos reales o vacíos.
//Cómo verificar el DOM con cy.contains, cy.get, etc.
//Cómo usar .as() para dar nombres a las interceptaciones.