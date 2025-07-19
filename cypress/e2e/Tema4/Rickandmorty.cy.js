
describe('Testing de personajes con API mockeada', () => {

    it('should display a single mocked character detail', () => {
        cy.intercept('POST', 'https://rickandmortyapi.com/graphql', {
            statusCode: 200,
            body: {
                "data": {
                    "charactersByIds": [
                        {
                            "id": "148",
                            "name": "Pedro Perez",
                            "status": "unknown",
                            "species": "Mythological Creature",
                            "image": "https://rickandmortyapi.com/api/character/avatar/148.jpeg",
                            "episode": [
                                {
                                    "name": "Big Trouble in Little Sanchez",
                                    "id": "18"
                                }
                            ],
                            "location": {
                                "name": "Nuptia 4",
                                "id": "13"
                            }
                        },
                    ]
                }
            }
        }).as('getCharts')

        cy.visit('https://rickandmortyapi.com/');

        cy.wait('@getCharts')
        cy.contains('Pedro Perez')
    });
});
//en esta prueba la ruta se quiere capturar el gran ql de la ruta, pero se logra ver en cypress 
//