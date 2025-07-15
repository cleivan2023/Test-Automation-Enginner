describe('Sistema de adopción', {TestIsolation: false }, () => {
    before(() => {
        cy.visit('https://adopcion-react-typescript-ia-semana.vercel.app/')
        cy.get('#link_login').click()
    })

    afterEach(() => {
        cy.get('input').clear() //selector por etiqueta, de los input
    })

    it('Registro solo con email', () => {
        //El usuario ya está loqueado
        cy.get('#email').type('user1"example.com')
        cy.get('#login_btn').click()
        cy.get('#password').should('have.focus');

    })
    it('Registro solo con paswword', () => {
        //El usuario ya está loqueado
        cy.get('#password').type('22112121')
        cy.get('#login_btn').click()
        cy.get('#email').should('have.focus');

    })
     it('Email no válido', () => {
        //El usuario ya está loqueado
        cy.get('#email').type('user1')
        cy.get('#login_btn').click()
        cy.get('#email').should('have.focus');

    })


})