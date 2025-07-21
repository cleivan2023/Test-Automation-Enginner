const baseURL = 'https://the-internet.herokuapp.com'
const userName = 'tomsmith'
const password = 'SuperSecretPassword!'

describe("Validandoel login", () => {

    it("Login con datos válidos", async () => {

        //Visitar la página
        await browser.url(`${baseURL}/login`);

        //Tipiar el username
        await $('#username').setValue(userName);

        //Tipiar el paswword
         await $('#password').setValue(password);

        //Hacer click en login 
         await $('#login > button').click();

         //validar mensaje de respuesta
         await $('#flash').waitForDisplayed();

        await expect($('.flash.success')).toBeDisplayed();
        

    });

    it('No deberia loguearse con valores invalidos', async () => {
        await browser.url(`${baseURL}/login`)
        await $('#username').setValue('test')
        await $('#password').setValue('superclave')
        await $('#login > button').click()
        await $('#flash').waitForDisplayed()
        await expect($('.flash.error')).toBeDisplayed()

    });

});