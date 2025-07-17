describe('Visit the Url to register an user', () => {
    before(() => {
        cy.visit('https://ecommerce-js-test.vercel.app/')
    })

    it('should register an user with valid params', () => {
    cy.get('a[href="/register"]').click()
    cy.fixture('usuarios.json').then((usuarios) => {
      cy.get('#name').type(usuarios.usuarioExistente.name)
      cy.get('#email').type(usuarios.usuarioExistente.email)
      cy.get('#password').type(usuarios.usuarioExistente.password)
      cy.get('#confirmPassword').type(usuarios.usuarioExistente.password)
      cy.get('button[type="submit"]').click()
      //posible error del span
      cy.get('span').contains('Hello').should('be.visible')
      cy.get('#product_3 > div > div.p-4 > div.flex.items-center.justify-between > button').click()
      cy.get('a[href="/cart"]').click()
      cy.wait(3000)
      cy.contains('button', 'Proceed to Checkout').click()
      cy.on('window:alert', (text) => {
        expect(text).include('Thank you for your purchase!')
      })
      cy.contains('button', 'Logout').click()
      })
    })
})




/* https://ecommerce-js-test.vercel.app/

ACTIVIDAD:
1. Registro e compra de mens Cotton Jacket. Validar comprar
2. Login y compra de mens casual Slim fit. Validar comprar
3. Búsqueda de SanDisk, detalle, Login para comprar. Validar comprar
4. Búsqueda de WD 2TB, detalle, quantity 5, Login para comprar. Validar comprar
5. Búsqueda mens, ordenar por el menor precio, clicar en el primer elemento, login para comprar. Validar comprar

Email: admin@example.com
Password: admin123      */


