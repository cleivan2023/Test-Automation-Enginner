describe("Hola Mundo Test", () => {
   //Aca va cada una de las pruebas
   it("Visitando una galeria de imagenes", () => {
    //Cuerpo o instrucciones o acciones de la prueba
    cy.visit('https://ljcl79.github.io/primera-pagina-ia-taller-adl/');
    cy.contains('Santiago');
    cy.contains('Buenas Aires').should('not.exist'); //este test va a fallar porque este elemento no esta
    //cy.contains('Los Roques'); //aca no va a seguir porque la prueba ya fallo en la linea anterior 
    
   });
});


