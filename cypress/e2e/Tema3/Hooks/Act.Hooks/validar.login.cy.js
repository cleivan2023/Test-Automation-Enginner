describe('Visit te URL to login', () => {
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
        cy.get('input[type="email"]').type('user1@example.com')
        cy.get('input[type="password"]').type('password123')
        cy.get('#login_btn').click()
        cy.get('#myprofile_link').should('exist')
        //cy.get('#pet_4').click()

    })
    after(() =>{
        cy.wait(3000)
        cy.get('#btn_logout').click()
        cy.clearLocalStorage()
        cy.clearCookies()
    })

})














/*https://adopcion-react-typescript-ia-semana.vercel.app/
Validar Login de usuario y acceso al detalle de la mascota.
Email: user1@example.com
Clave: password123

1. validar login (LISTO)

2. Login invalido. (FALTA COMPLETAR)

3. Registrar un usuario y acceder al detalle de la mascota
Llamada Bella. (FALTA)

4. Registro con datos incompletos. (FALTA)  */