
const baseUrl = 'https://ecommerce-js-test.vercel.app/';
const email = 'admin@example.com';
const password = 'admin123';
describe("E-commerce Test Suite", () => {
    before(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
    });
    beforeEach(() => {
        cy.visit(baseUrl);
    });
    it('Búsqueda de WD 2TB, detalle, quantity 5, Login para comprar. Validar compra', () => {
        cy.get('input[type="text"]').type('WD 2TB');
        cy.get('#product_9').click();
        Cypress._.times(4, () => { //para procesos repetitibos 
            cy.get('.lucide.lucide-plus').click();
        });
        //cy.get('.lucide.lucide-plus').click();
        cy.get('button.justify-center:nth-child(1)').click();
        cy.get('#email').type(email);
        cy.get('#password').type(password);
        cy.get('button[type="submit"]').click();
        cy.contains('Logout').should('be.visible');
    });
});


/* 1)Registro e compra de mens Cotton Jacket. Validar comprar
2)Login y compra de mens casual Slim fit. Validar comprar
3)Búsqueda de SanDisk, detalle, Login para comprar. Validar comprar
--- 4)Búsqueda de WD 2TB, detalle, quantity 5, Login para comprar. Validar comprar
5)Búsqueda mens, ordenar por el menor precio, clicar en el primer elemento, login para comprar. Validar comprar
Email: admin@example.com
Password: admin123 */