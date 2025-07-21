//4- Login con datos incorrectos
//revisar el codigo

//variables del sitio
const baseURL = 'https://ecommerce-js-test.vercel.app/';
const user = 'Admin User';
const email = 'admin@example.com';
const password = 'admin123';

describe('Login con datos incorrectos', () => {
  it('Debería mostrar error al loguearse con datos inválidos', async () => {
    await browser.url(baseURL);
    await $('a[href="/login"]').click();
    await $('#email').setValue('falso@correo.com');
    await $('#password').setValue('wrongpass');
    await $('form button[type="submit"]').click();

    const error = await $('.error-message');
    await expect(error).toBeDisplayed();
    await expect(error).toHaveTextContaining('Correo o contraseña inválidos');
  });
});
