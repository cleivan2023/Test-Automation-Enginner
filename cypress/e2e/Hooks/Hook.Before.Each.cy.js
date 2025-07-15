describe('Acceso a las mascotas', () => {
    beforeEach(() => { //para cada prueba
        cy.visit('https://adopcion-react-typescript-ia-semana.vercel.app/')
    })

    it('Debe mostrar a Buddy', () => {
        //El usuario ya esta loqueado
        cy.get('#pet_1').click();
        cy.contains('Buddy');
    })

    it('Debe mostrar a Luna', () => {
        //El usuario ya esta loqueado
        cy.get('#pet_2').click();
        cy.contains('Luna');
    })

    it('Debe mostrar a Luna', () => {
        //El usuario ya esta loqueado
        cy.get('#pet_3').click();
        cy.contains('Max');
    })
})