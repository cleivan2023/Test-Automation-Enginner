describe('Web Pet Haven', () => {
   it('login valido', () => {
        cy.visit('https://adopcion-react-typescript-ia-semana.vercel.app/');
        cy.get('#link_login').click();
        cy.get('#email').type('testinvalido@example.com');
        cy.get('#password').type('passwodFail');
        cy.get('#login_btn').click();



    })
})


/* https://adopcion-react-typescript-ia-semana.vercel.app/
Validar Login de usuario y acceso al detalle de la mascota.
Email: user1@example.com
Clave: password123    */