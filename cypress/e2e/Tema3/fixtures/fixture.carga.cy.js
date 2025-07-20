describe('Validando el registro', () => {
    before(() => {
        cy.visit('https://adopcion-react-typescript-ia-semana.vercel.app')
    })


    it('Registro de usuario', () => {
        // El usuario ya está logueado
        cy.get('#link_register').click()
        cy.fixture('users.json').then((usuarios) => {
            cy.get('#username').type(usuarios.newUser.username)
            cy.get('#email').type(usuarios.newUser.email)
            cy.get('#password').type(usuarios.user1.password)
        })
        cy.get('#register_btn').click()
        cy.get('#myprofile_link').should('be.visible')
        cy.contains("pepito")
    })


})