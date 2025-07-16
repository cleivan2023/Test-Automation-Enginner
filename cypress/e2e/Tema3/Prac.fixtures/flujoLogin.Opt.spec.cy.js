let usuarioLogin = {};

describe('Visit te URL to login', () => {
    before(() => {
        cy.fixture('usuarios.json').then((usuarios) => {
            usuarioLogin = usuarios.usuarioExistente;
        });
    });



    beforeEach(() => {
        cy.visit('https://adopcion-react-typescript-ia-semana.vercel.app')
        cy.get('#link_login').click()
    })

    it('should not long in with invalid params', () => {
        cy.get('input[type="email"]').clear()
        cy.get('input[type="password"]').clear()
        cy.get('#login_btn').click()
        cy.url().should(
            'eq',
            'https://adopcion-react-typescript-ia-semana.vercel.app/login'
        )

    })

    it('shoullog in with valid parems', () => {

        cy.get('input[type="email"]').type(usuarioLogin.email);
        cy.get('input[type="password"]').type(usuarioLogin.password);
        cy.get('#login_btn').click()
        cy.get('#myprofile_link').should('exist')

        });

    after(() =>{
        cy.wait(3000)
        cy.get('#btn_logout').click()
        cy.clearLocalStorage()
        cy.clearCookies()
    })

})
