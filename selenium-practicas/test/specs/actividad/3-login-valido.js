//3- Login con datos correctos
//pasa


const baseURL = 'https://ecommerce-js-test.vercel.app/';
const user = 'Admin User';
const email = 'admin@example.com';
const password = 'admin123';
const productID = 'product_14'

describe('Validate user log in process', () => {
  it('Should log in, purchase an item and log out successfuly', async () => {
    await browser.url(`${baseURL}`);
    await browser.pause(4000);

    //LOGIN
    await $('a[href="/login"]').click()
    await $('#email').setValue(email)
    await $('#password').setValue(password)
    await $('button[type="submit"]').click()

    //validar logueo de usuario
    const greetingUser = await $(`span=Hello, ${user}`)
    await greetingUser.waitForDisplayed()

    //Agregar producto y finalizar compra
    const productCard = await $(`#${productID}`)
    await productCard.waitForDisplayed({ timeout: 10000 })
    const addButton = await productCard.$('span=Add')
    await addButton.waitForClickable()
    await addButton.click()
    await $('a[href="/cart"]').click()
    await $('button=Proceed to Checkout').click()
    await expect(await browser.getAlertText()).toMatch(
        'Thank you for your purchase!'
    )

    //logout
    await $('button=Logout').click()
    await $('a[href="/login"]').waitForDisplayed({ timeout: 10000})
    await expect($('a[href="/login"]')).toBeDisplayed()


    });
});

/*con ayuda otro ejemplo  : 
const baseURL = 'https://ecommerce-js-test.vercel.app/';
const user = 'Admin User';
const email = 'admin@example.com';
const password = 'admin123';

describe('Validando login', () => {
  it('Debería loguearse con datos válidos', async () => {
    await browser.url(baseURL);
    await $('a[href="/login"]').click();
    await $('#email').setValue(email);
    await $('#password').setValue(password);
    await $('form button[type="submit"]').click();

    const saludo = await $('h1');
    await expect(saludo).toHaveTextContaining(`Hola ${user}`);
  });
}); */

