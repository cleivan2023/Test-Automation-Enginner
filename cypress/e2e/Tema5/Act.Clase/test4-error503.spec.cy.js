//4- Mock para simular servicio no disponible.
//  Validar mensaje: Servicio no disponible
// status 503 - servicio no disponible 

const email = 'admin@example.com';
const password = 'admin123';
const baseUrl = 'https://ecommerce-js-test.vercel.app/';
describe('Mock para simular servicio no disponible API', () => {
    beforeEach(() => {
        cy.visit(baseUrl);
    });
    it('Validar mensaje: Servicio no dispoble', () => {
        cy.intercept('GET', 'https://fakestoreapi.com/products',{
            statusCode: 503
        }).as('serviceNotFound');
        
        cy.visit(baseUrl);
        cy.wait('@serviceNotFound');
        cy.contains('Error: Servicio no disponible').should('be.visible');
    });

    });

