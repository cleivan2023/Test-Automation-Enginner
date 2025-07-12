describe('Sistema de adopcion', () => {
    before(() => {
        cy.visit('https://adopcion-react-typescript-ia-semana.vercel.app/');
        cy.get('#link_login').click();
        cy.get('#email').type('user1@example.com');
        cy.get('#password').type('password123');
        cy.get('#login_btn').click();

    })

    it('Verificar que el boton cerrar sesion esta disponible', () => {
        //El usuario ya esta loqueado
        cy.get('#btn_logout').should('be.visible')
    })
})