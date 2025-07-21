//2- Registro con datos incompletos

const baseURL = 'https://ecommerce-js-test.vercel.app/';
const user = 'Admin User';
const email = 'admin@example.com';
const password = 'admin123';


describe('Registro con datos incompletos', () => {
  it('No debería permitir registrar sin completar campos', async () => {
    await browser.url(baseURL);
    await $('a[href="/register"]').click();
    await $('#name').setValue('');
    await $('#email').setValue('correo@falso.com');
    await $('#password').setValue('');
    await $('form button[type="submit"]').click();

    const error = await $('.error-message');
    await expect(error).toBeDisplayed();
  });
});

