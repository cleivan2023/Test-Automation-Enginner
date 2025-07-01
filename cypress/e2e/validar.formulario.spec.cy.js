describe("Acceso al site y envio de formulario", () => {
    it("Llenar el formulario / Fill out the form", () => {
        //Acceder al site
        cy.visit('https://ljcl79.github.io/primera-pagina-ia-taller-adl/');
        cy.get('[name="name"]').type('Carol');
        cy.get('[name="email"]').type('test@pruebas.cl');
        cy.get('#message').type('Mensaje'); //si tiene #, es porque se elejio con selector web
        //cy.get('#formulario input[type="email"]')
        cy.get('#enviar_formulario').click();
        cy.get('.contactenos').contains('Formulario enviado!');
        //cy.get('#enviar_formulario').should('be.visible');

    });

    it("Llenar el formulario con email no valido / Fill out the form with an invalid email address", () => {
        //Acceder al site
        cy.visit('https://ljcl79.github.io/primera-pagina-ia-taller-adl/');
        cy.get('[name="name"]').type('Carol');
        cy.get('[name="email"]').type('test');
        cy.get('#message').type('Mensaje'); 
        cy.get('#fotos').type('Santiago');
        cy.get('#enviar_formulario').click();
        //cy.get('.contactenos').contains('Formulario enviado!');
        cy.get('#enviar_formulario').should('be.visible');

    });

    it("Enviar formulario vacio / Submit empty form ", () => {
        cy.visit('https://ljcl79.github.io/primera-pagina-ia-taller-adl/');
        cy.get('[name="name"]').clear();
        cy.get('[name="email"]').clear();
        cy.get('#message').clear(); 
        cy.get('.texto-principal').click();
        cy.get('#enviar_formulario').click();
        //cy.get('#enviar_formulario').should('be.visible');
    })
})