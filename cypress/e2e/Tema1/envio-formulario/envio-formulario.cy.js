describe('Formulario de Contacto - Envío de datos', () => {
    it('Debe completar y enviar el formulario de contacto correctamente', () => {
        // Visitar la página
        cy.visit('https://ljcl79.github.io/primera-pagina-ia-taller-adl/');

        // Navegar a la sección de contacto usando el enlace de navegación
        cy.contains('Contacto').click()

        // Verificar que estamos en la sección correcta
        cy.contains('Contáctanos').should('be.visible')

        // Completar el campo Nombre usando selector por ID
        cy.get('#name').type('Juan Pérez')
        cy.get('#name').should('have.value', 'Juan Pérez')

        // Completar el campo Email usando selector por ID
        cy.get('#email').type('juan.perez@email.com')
        cy.get('#email').should('have.value', 'juan.perez@email.com')

        // Completar el campo Mensaje usando selector por ID
        cy.get('#message').type('Me encanta este sitio web sobre Latinoamérica. Las fotografías son increíbles y capturan perfectamente la belleza de la región.')
        cy.get('#message').should('contain.value', 'Me encanta este sitio web')

        // Seleccionar una foto favorita del dropdown
        cy.get('#fotos').select('Salar de Uyuni')
        cy.get('#fotos').should('have.value', 'Salar de Uyuni')

        // Marcar el checkbox de notificaciones
        cy.get('#notificaciones').check()
        cy.get('#notificaciones').should('be.checked')

        // Enviar el formulario usando el atributo data-cy (buena práctica)
        cy.get('[data-cy="boton_enviar"]').click()

        // Validación adicional: verificar que el formulario se procesó
        // (esto dependería de la implementación del JavaScript)
        // Por ejemplo, podríamos verificar un mensaje de éxito o redirección
    })
})