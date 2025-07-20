describe('validacion Login', () => {
    it('Formulario login - Ingresa correctamente', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    //ESpera de 3 segundos antes de interactuar
    cy.wait(3000);
    cy.get('#username').type('tomsmith');
    cy.wait(3000);
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click(); //se selecciona el boton login //se pone .radio por la clase
    cy.get('#flash').should('have.class','success'); //se corrobora que hace login, se pone # por que es ID
  });
})