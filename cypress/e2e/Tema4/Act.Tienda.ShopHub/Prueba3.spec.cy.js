const url = 'https://ecommerce-js-test.vercel.app/';

describe('Búsqueda de producto en página ecommerce', () => {
    let userName;
    let password;

    before(() => {
        cy.fixture('usuarios.json').then((usuarios) => {
            userName = usuarios.usuarioExistente.email;
            password = usuarios.usuarioExistente.password;
        });
        cy.visit(url);
    });

    it('Búsqueda producto ScanDisk', () => {
        cy.get('div > input').type('sand');
        cy.wait(3000);
        cy.get('#product_10').click();
        cy.wait(3000);
        cy.get('button.bg-blue-600').click();
        cy.wait(3000);
        cy.get('#email').type(userName);
        cy.wait(3000);
        cy.get('#password').type(password);
        cy.wait(3000);
        cy.get('form > button').click();
    });
});
