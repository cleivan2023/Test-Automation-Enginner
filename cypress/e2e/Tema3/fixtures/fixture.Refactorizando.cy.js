// describe('Verificando el formulario de registro', () => {
//     it('Verificando el registro de un usuario', () => {
//         cy.visit('https://adopcion-react-typescript-ia-semana.vercel.app')
//         cy.get('#link_register').click();
//         cy.get('#username').type('Leonardo José')
//         cy.get('#email').type('leonardo@gmail.com')
//         cy.get('#password').type('123123')
//         cy.get('#register_btn').click()
//         cy.get('#profile').click()
//         cy.contains("solo logueados");
//     });

//     it('Verificando su login', () => {
//         cy.visit('https://adopcion-react-typescript-ia-semana.vercel.app')
//         cy.get('#link_login').click()
//         cy.get('#email').type('user1@example.com')
//         cy.get('#password').type('password123')
//         cy.get('#login_btn').click()
//         cy.get('#profile').click()
//         cy.contains("solo logueados");
//     });
// });

describe('Verificando el formulario de registro', () => {
    let userData = [];
    before(() => {
        cy.visit('https://adopcion-react-typescript-ia-semana.vercel.app');
        cy.fixture('users.json').then((usuarios) => {
            userData = usuarios;
        });
    })

    beforeEach(() => {
        cy.visit('https://adopcion-react-typescript-ia-semana.vercel.app')
    })

    it('Verificando el registro de un usuario', () => {
        cy.get('#link_register').click();
        cy.get('#username').type(userData.newUser.username)
        cy.get('#email').type(userData.newUser.email)
        cy.get('#password').type((userData.newUser.password));
        cy.get('#register_btn').click()
        cy.get('#profile').click()
        cy.contains("solo logueados");
    });

    it('Verificando su login', () => {
        cy.get('#link_register').click();
        cy.get('#username').type(userData.user1.username)
        cy.get('#email').type(userData.user1.email)
        cy.get('#password').type((userData.user1.password));
        cy.get('#register_btn').click()
        cy.get('#profile').click()
        cy.contains("solo logueados");
    });
});