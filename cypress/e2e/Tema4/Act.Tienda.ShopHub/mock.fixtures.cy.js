const baseUrl = "https://ecommerce-js-test.vercel.app/";
const apiURL = "https://fakestoreapi.com/products";

describe("Carga de productos", () => {

    it("Carga de Fixtures", () => { 
        cy.intercept("Get", apiURL, {
        fixtures: 'products.mock.jason'
    }).as('getProducts');

    cy.visit(baseUrl);

    cy.wait('@getProducts').its('response.body').should('have.lenght', 50);

    //Validacion de la historia de usuario, 20 elementos.
    cy.get('.product-card').should('have.length',20);
    
});

    it("Carga con objeto literal y  no presenta datos", () => { //prueba con datos quemados
        cy.intercept("GET", apiURL, {
        
            body:[{ //en el body insertamos un registro
                     "id": 3,
                    "title": "Laptop Pro",
                    "price": 1200,
                    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                    "category": "men's clothing",
                    "image": "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111972_SP748-mbp13touch-silver.jpeg",
                    "rating": {
                        "rate": 3.9,
                        "count": 120
                    }
            }]
        }).as('getObjectProduct'); //para similar otros comportamientos

        cy.visit(baseUrl);

        cy.wait("@getObjectProduct");

        //cy.get(".text-lg").contains('Loading Products').should('be.visible');
    });

        it("Error al cargar datos de la API", () => { //
        cy.intercept("GET", apiURL, {
            statusCode: 500   //es el codigo de respuesta de la norma (los gatitos de error)
        
        }).as('getAPIError'); //

        cy.visit(baseUrl);

        cy.wait('getAPIError');

        cy.contains('Error: Faild to fetch');

    });

    it("Retorno OK, sin Datos", () => { //
        cy.intercept("GET", apiURL, {
            statusCode: 200   //es el codigo de respuesta de la norma (los gatitos de error)
        
        }).as('getAPIError'); //

        cy.visit(baseUrl);

        cy.wait('getAPIError');

        cy.contains('Error: Faild to fetch');

    });
});