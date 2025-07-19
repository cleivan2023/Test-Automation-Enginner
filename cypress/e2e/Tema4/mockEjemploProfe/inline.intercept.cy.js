//Simula (mockea) la respuesta de un producto específico (id: 3) y verifica que al hacer clic en ese producto, 
// se muestre correctamente el detalle en la interfaz.

describe('Testing la lista de productos con API mockeada', () => {
    //Define un conjunto de pruebas relacionadas con productos usando datos mockeados.
    it('should display a single mocked product detail', () => {
        cy.intercept('GET', '**/products/3', {
            statusCode: 200,
            body: {
                id: "3",
                "title": "Auriculares Bluetooth",
                "price": 150,
                "image": "https://m.media-amazon.com/images/I/61lX+a+vOFL.jpg",
                "description": "Sonido inmersivo y cancelación de ruido."
            }
        }).as('getProductDetail')

    //Simula que cuando la app pide /products/3, 
    // la API devuelve un producto mockeado con título, precio, imagen y descripción.

        cy.visit('https://ecommerce-js-test.vercel.app/'); //Abre la app de prueba.
        cy.get('#product_3').click(); //Hace clic sobre el producto específico (usando su ID en el selector).

        cy.wait('@getProductDetail')//Espera a que la llamada interceptada con el producto 3 se dispare.

        cy.get('[data-cy="product-name"]').should('contain', 'Auriculares Bluetooth')
        cy.get('[data-cy="product-price"]').should('contain', '150')
        //Verifica que el nombre y el precio del producto estén visibles en la interfaz.
    });
});

//¿Qué aprendes aquí?
//Cómo mockear una respuesta individual para un endpoint específico (/products/3)
//Cómo simular interacción de usuario (clic)
//Cómo validar que los datos mostrados vienen del mock, no de la API real
//Uso de data-cy como buenos selectores para pruebas