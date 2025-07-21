//utilizando moka

describe("Página de webDriverIO", () => {
    it("Validar el título de la página", async () => { //el async debe de ir 

        //visitar el sitio web o la aplicación
       await browser.url('https://webdriver.io/');
        //obtener el título y comparar el esperado 
        await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO');

    });
});