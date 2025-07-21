describe('Navegación em MercadoLibre', () => {
    it('Validar búsqueda de artículos', async () => {
        //Accedemos a la aplicación

        await browser.url('https://www.mercadolibre.cl/');

        //Seleccionamos y Tipiamos en la caja

        await $('#cb1-edit').setValue('iphone');
        
        //Clicamos en la lupa
       await $('body > header > div > div.nav-area.nav-top-area.nav-center-area > form > button').click();

        //Seleccionamos el título del resultado de búsqueda
        
        const criterioBusqueda = await $('.ui-search-breadcrumb__title');
        criterioBusqueda.waitForDisplayed({ timeout: 20000 });

        const textoTitulo = await criterioBusqueda.getText();

        //Validar que el texto del título se igual a lo buscado
        await expect(await criterioBusqueda.getText()).toMatch(/iphone/i);

    });

});