//con esta prueba va a pasar por acada una de las mascotas, con back

describe("Pruebas de acceso a las mascotas", () => {
    beforeEach(() => {
        cy.visit('https://adopcion-react-typescript-ia-semana.vercel.app/');
    });

    it("Acceder a cada mascota", () => {
        cy.fixture('pets.json').then((pets) => {
            pets.forEach((pet) => {
                cy.get('#pet_' + pet ['id']).click();
                cy.wait(5000);
                cy.go('back');
            })
        });

    });
});