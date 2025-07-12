describe('Web Pet Haven', () => {
   it('login valido', () => {
        cy.visit('https://adopcion-react-typescript-ia-semana.vercel.app/');
        cy.get('#link_login').click();
        cy.get('#email').type('user1@example.com');
        cy.get('#password').type('password123');
        cy.get('#login_btn').click();
        cy.get('#myprofile_link').should('exist')



    })
})


/* https://adopcion-react-typescript-ia-semana.vercel.app/
Validar Login de usuario y acceso al detalle de la mascota.
Email: user1@example.com
Clave: password123    */