/* Esta prueba está enfocada en validar cómo la aplicación responde cuando la API devuelve errores HTTP,
 específicamente los códigos:

* 404 Not Found (No se encontraron productos)
* 500 Internal Server Error (Error en el servidor)
 ¿Qué se prueba?
Cómo se comporta la interfaz cuando:

1- La API responde con 404 (productos no encontrados).
2- La API responde con 500 (fallo del servidor). */

describe('Testing basado estado de la respuesta', () => {

    it('should display "No products found" message on 404', () => {
        cy.intercept('GET', '**/products', { statusCode: 404, body: { message: 'No products found' } }).as('productsNotFound')

        cy.visit('https://ecommerce-js-test.vercel.app/')
        cy.wait('@productsNotFound')
        cy.contains('Error: Without products')
    })

    it('should display "No products found" message on 500', () => {
        cy.intercept('GET', '**/products', { statusCode: 500, body: { message: 'No products found' } }).as('productsNotFound')

        cy.visit('https://ecommerce-js-test.vercel.app/')
        cy.wait('@productsNotFound')
        cy.contains('Error: Failed to fetch products')
    })

});

/* ¿Qué aprendes con esta prueba?
Cómo simular respuestas de error con códigos HTTP específicos (404, 500, etc.)

Cómo validar que tu aplicación tenga mensajes de error personalizados según el tipo de fallo.

Buenas prácticas de UX ante errores: no dejar la pantalla en blanco ni mensajes técnicos.

🚨 Consejo importante
Asegúrate de que los textos como "Error: Without products" y "Error: Failed to fetch products":

Sean realmente los que muestra tu app.

Sean lo suficientemente específicos para diferenciarlos en las pruebas. */