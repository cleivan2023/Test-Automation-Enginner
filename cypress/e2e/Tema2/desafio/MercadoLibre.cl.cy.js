// cypress/e2e/mercadoLibreHtmlSnippet.cy.js

describe('Pruebas de selección de elementos en HTML de MercadoLibre.cl', () => {

    // Prueba 1: Selección por Atributo 'lang' en el tag <html>
    it('Debe seleccionar el tag html por su atributo lang="es-CL"', () => {
        // Nota: cy.visit() cargará la página completa de MercadoLibre.cl.
        // Esta prueba verifica un atributo en el HTML de la página cargada, no solo el snippet.
        cy.visit('https://www.mercadolibre.cl/');
        cy.get('html[lang="es-CL"]').should('exist');
        cy.get('html[lang="es-CL"]').should('have.attr', 'lang', 'es-CL');
    });

    // Prueba 2: Selección por Clase (ejemplo genérico, ya que no hay clases claras en tu snippet de <head>)
    // Asumiendo que existe alguna clase CSS común en la página cargada, aunque no esté en el snippet.
    // Para este ejemplo, usaremos una clase hipotética 'header-logo' que es común en muchos sitios.
    it('Debe seleccionar un elemento por su clase (ejemplo genotípico, no del snippet directo)', () => {
        cy.visit('https://www.mercadolibre.cl/');
        // *Necesitarías reemplazar '.header-logo' con una clase real de un elemento visible en ML.cl*
        cy.get('.nav-logo').should('exist'); // Asumiendo que el logo tiene esta clase
        cy.get('.nav-logo').should('be.visible');
    });

    // Prueba 3: Selección por Atributo Exacto [attr="value"] (usando 'rel' en link)
    it('Debe seleccionar un tag <link> por su atributo rel="preconnect"', () => {
        cy.visit('https://www.mercadolibre.cl/');
        cy.get('link[rel="preconnect"]').should('exist');
        cy.get('link[rel="preconnect"]').its('length').should('be.gt', 1); // Debe haber más de un link rel="preconnect"
    });

    // Prueba 4: Selección por Atributo que Empieza con [attr^="value"] (usando 'href' en link)
    it('Debe seleccionar un tag <link> cuyo href empieza con "https://www.google"', () => {
        cy.visit('https://www.mercadolibre.cl/');
        cy.get('link[href^="https://www.google"]').should('exist');
        cy.get('link[href^="https://www.google"]').its('length').should('be.gte', 1); // Al menos un link que empiece con eso
    });

    // Prueba 5: Selección por Atributo que Contiene [attr*="value"] (usando 'href' en link)
    it('Debe seleccionar un tag <link> cuyo href contiene "mercadolibre.com"', () => {
        cy.visit('https://www.mercadolibre.cl/');
        cy.get('link[href*="mercadolibre.com"]').should('exist');
        cy.get('link[href*="mercadolibre.com"]').its('length').should('be.gte', 1); // Al menos un link que contenga eso
    });

});