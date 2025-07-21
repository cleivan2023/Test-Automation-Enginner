//1- Registro con datos completos
//rebisar el codigo


const baseURL = 'https://ecommerce-js-test.vercel.app/';
const email = 'correo@example7.com';
const password = 'admin123';
const user = 'Equipo-grupo';

describe('Validar Registro con datos completos', () => {
  it('Ejercicio 1: Registro con datos correctos', async () => {
    //Ir al login de la url base
    await browser.url(baseURL);
    await $('a[href="/register"]').click();
    //tipear el usuario
    await $('#name').setValue(admin);
    //tipiar el email
    await $('#email').setValue(email);
    // Tipiar el password
    await $('#password').setValue(password);
    await $('#confirmPassword').setValue(password);
    //click boton crear cuenta
    await $('[type="submit"]').click();
    await browser.pause(5000);
    const elem = await $('.space-x-2 > .text-sm').getText()
    //variante 1 : comprobar que el texto contiene 'Hello, Equipo-grupo'
    // await expect(elem).toMatch(/Hello, Equipo-grupo/i)
    // variente 2: comprobar que el texto es exactamente 'Hello, Equipo-grupo'
    await expect(elem).toContain('Hello, Equipo-grupo')
    await $('#root > div > nav > div > div > div > button').click()


 });   
}); 








/*con ayuda otro ejemplo  : 
const baseURL = 'https://ecommerce-js-test.vercel.app/';
const user = 'Admin User';
const email = 'admin@example.com';
const password = 'admin123';


describe('Registro con datos completos', () => {
  it('Debería registrar un nuevo usuario', async () => {
    await browser.url(baseURL);
    await $('a[href="/register"]').click();
    await $('#name').setValue('Nuevo Usuario');
    await $('#email').setValue('nuevo@example.com');
    await $('#password').setValue('nuevo123');
    await $('form button[type="submit"]').click();

    await expect(browser).toHaveUrlContaining('/login');
  });   
}); */
