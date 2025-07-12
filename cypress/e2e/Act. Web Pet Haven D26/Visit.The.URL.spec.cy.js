 describe('Visit the URL to login', () => {
  beforeEach(() => {
    cy.visit('https://adopcion-react-typescript-ia-semana.vercel.app/');
    cy.get('#link_login').click()
  })
  it('Should not log in with invalid params', () => {
    cy.get('input[type="email"]').clear()
    cy.get('input[type="password"]').clear()
    cy.get('#login_btn').click()
    cy.url().should(
      'eq',
      'https://adopcion-react-typescript-ia-semana.vercel.app/login'
    )
  })
  it('Should log in and log out with valid params', () => {
    cy.get('input[type="email"]').type('user1@example.com')
    cy.get('input[type="password"]').type('password123')
    cy.get('#login_btn').click()
    cy.get('#myprofile_link').should('exist')
  })
  after(() => {
    cy.wait(3000)
    cy.get('#btn_logout').click()
    cy.clearLocalStorage()
    cy.clearCookies()
  })
})
