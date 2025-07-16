describe('Visit te URL to login', () => {
    beforeEach(() => {
        cy.visit('https://adopcion-react-typescript-ia-semana.vercel.app/')
    })

    it('should not long in with invalid params', () => {
        cy.get('#link_login').click()
        cy.get('input[type="email"]').clean()
        //cy.get('input[type="email"]').type('user1@example.com')
        cy.get('input[type="password"]').clean()
        //cy.get('input[type="password"]').type('password123')
        //cy.get('#login_btn').click()
        //cy.get('#pet_4').click()

    })

    it('shoullog in with valid parems', () => {
        cy.get('#link_login').click()
        cy.get('input[type="email"]').type('user1@example.com')
        cy.get('input[type="password"]').type('password123')
        cy.get('#login_btn').click()
        cy.get('#pet_4').click()

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