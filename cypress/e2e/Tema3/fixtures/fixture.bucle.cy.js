describe('Acceso a mascotas desde fixture', () => {
    before(() => {
        cy.visit('https://adopcion-react-typescript-ia-semana.vercel.app');
    });

    // Cargamos los datos una vez y declaramos los tests dentro del callback
    it('Accede a todas las mascotas dinámicamente', () => {
        cy.fixture('pets.json').then((pets) => {
            pets.forEach((mascota) => {
                cy.log(`Validando mascota: ${mascota.name}`);
                cy.get(`#pet_${mascota.id}`).click();
                cy.get('h1').contains(mascota.name);
                cy.get('p').contains(mascota.species);
                cy.go('back');
            });
        });
    });
});