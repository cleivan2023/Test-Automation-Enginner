//Simula dos escenarios de red:
// Una carga lenta de productos.
//X Un error en la red (como si no hubiera conexión).
//Ambos ayudan a asegurarse de que tu aplicación maneje bien estos casos.

describe('Testing basado en el estado de la red', () => {
//primera prueba: Simula que la API /products se demora 2 segundos en responder, y verifica que:
//Se muestra el spinner de carga mientras tanto.
//Cuando termina la carga, el spinner desaparece y se muestran los productos.

    it('should show loading spinner for slow product load', () => {
        cy.intercept('GET', '/products', (req) => {
            req.reply({ fixture: 'products.mock.json', delay: 2000 }); // Retraso de 2 segundos
        }).as('slowProducts');

        cy.visit('https://ecommerce-js-test.vercel.app/')
        cy.get('.animate-spin').should('be.visible'); // Validar spinner
        cy.wait('@slowProducts');
        cy.get('.animate-spin').should('not.exist');
        cy.get('.product-card').should('have.length.greaterThan', 0);
    });

    //segunda prueba: Simula que la API falla completamente (como si no hubiera conexión) y verifica que:
    //Se muestra el spinner al comienzo
    //Luego, se muestra un mensaje de error como "Error: Failed to fetch"

    it('should show loading spinner for slow network', () => {
        cy.intercept('GET', '/products', (req) => {
            req.reply({ fixture: 'products.mock.json', forceNetworkError: true }); // Retraso de 2 segundos
        }).as('slowProducts');

        cy.visit('https://ecommerce-js-test.vercel.app/')
        cy.get('.animate-spin').should('be.visible'); // Validar spinner
        cy.wait('@slowProducts');
        cy.get('.animate-spin').should('not.exist');
        cy.contains('Error: Failed to fetch');
    });

});

/*¿Qué aprendes?
A simular delays (retrasos) de red
A probar que el loading spinner aparece y desaparece correctamente
A probar cómo responde la app ante fallas reales de red
Cómo usar Cypress para testear UX y manejo de errores, no solo datos */