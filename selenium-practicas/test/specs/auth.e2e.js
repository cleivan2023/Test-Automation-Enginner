//esta prueba FALLA 

const baseURL = 'https://ecommerce-js-test.vercel.app/';
const user = 'Admin User';
const email = 'admin@example.com';
const password = 'admin123';

describe('Flujos de Registro y Login', () => {

    beforeEach(async () => {
        await browser.url(baseURL);
    });

    it('1. Registro con datos completos', async () => {
        await $('=Register').click();
        await $('#name').setValue(user);
        await $('#email').setValue(email);
        await $('#password').setValue(password);
        await $('#register-button').click();
        await expect(browser).toHaveUrlContaining('products');
    });

    it('2. Registro con datos incompletos', async () => {
        await $('=Register').click();
        await $('#name').setValue('');
        await $('#email').setValue('correo@prueba.com');
        await $('#password').setValue('');
        await $('#register-button').click();
        await expect($('.error-message')).toBeDisplayed();
    });

    it('3. Login con datos correctos', async () => {
        await $('#email').setValue(email);
        await $('#password').setValue(password);
        await $('#login-button').click();
        await expect(browser).toHaveUrlContaining('products');
    });

    it('4. Login con datos incorrectos', async () => {
        await $('#email').setValue('usuario@incorrecto.com');
        await $('#password').setValue('clave123');
        await $('#login-button').click();
        await expect($('.error-message')).toBeDisplayed();
    });

});
