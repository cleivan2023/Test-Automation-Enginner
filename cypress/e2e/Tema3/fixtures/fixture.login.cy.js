describe('Validando el login', () => {
    before(() => {
        cy.visit('https://adopcion-react-typescript-ia-semana.vercel.app')
    })


    it('Login de usuario', () => {
        // El usuario ya está logueado
        cy.get('#link_login').click()
        cy.fixture('users.json').then((usuarios) => {
            cy.get('#email').type(usuarios.user1.email)
            cy.get('#password').type(usuarios.user1.password)
        })
        cy.get('#login_btn').click()
        cy.get('#myprofile_link').should('be.visible')
    })


})