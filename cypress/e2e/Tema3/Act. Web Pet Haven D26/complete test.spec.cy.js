describe('Pet Haven', () => {
    it('Login + Acceso al detalle de las mascota llamada "Bella"', () => {
        cy.visit('https://adopcion-react-typescript-ia-semana.vercel.app/');
        cy.get('#link_login').should('be.visible');
        cy.get('#link_login').click();
        cy.get('#email').type('user1@example.com');
        cy.get('#password').type('password123');
        cy.get('#login_btn').click();
        cy.get('#root > nav > div > div.flex.items-center.space-x-4 > div > span').should('contain', "Hola, user1!")
        cy.get('#pet_4').click();
        cy.get('#root > div > div > div > div:nth-child(2) > h1').should('contain', "Bella");

    })

    it ('Login Invalido', () => {
        cy.visit('https://adopcion-react-typescript-ia-semana.vercel.app/');
        cy.get('#link_login').should('be.visible');
        cy.get('#link_login').click();
        cy.get('#email').type('fail@example.com');
        cy.get('#password').type('passwordFail');
        cy.get('#login_btn').click();
        cy.get('#root > div > div > form > p.text-red-500.text-xs.italic.mb-4.text-center').should('contain', "Credenciales inválidas. Inténtalo de nuevo.")
        
    })
    it('Registror un usuario y acceder al detalle de la mascota llamada "Bella"', () => {
        cy.visit('https://adopcion-react-typescript-ia-semana.vercel.app/');
        cy.get('#link_register').click();
        cy.get('#username').type('JhonDoe');
        cy.get('#email').type('pjohndoe@example.com');
        cy.get('#password').type('JhonDoe');
        cy.get('#register_btn').click();
        cy.get('#pet_4').click();
        cy.get('#root > div > div > div > div:nth-child(2) > h1').should('contain', "Bella");

    })
    
    it('Registro con datos incompletos', () => {
        cy.visit('https://adopcion-react-typescript-ia-semana.vercel.app/');
        cy.get('#link_register').click();
        cy.get('#email').type('user1@example.com');
        cy.get('#register_btn').click();
        //cy.get('.error-message').should('contain.text', 'completa')
        cy.get('#register_btn').should('not.be.disabled').click();

    })

})

