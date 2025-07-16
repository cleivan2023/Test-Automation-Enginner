describe('Sistema de adopcion', () => {
    before(() => {
        cy.visit('https://adopcion-react-typescript-ia-semana.vercel.app/');
        cy.get('#link_login').click();
        cy.get('#email').type('user1@example.com');
        cy.get('#password').type('password123');
        cy.get('#login_btn').click();

    })

    it('Debe mostrar el link de profile', () => {
        //El usuario ya esta loqueado
        cy.get('#myprofile_link').should('be.visible') 
  
    })
})
