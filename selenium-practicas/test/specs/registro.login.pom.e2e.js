//const registroPage = require('../pageobjects/registro.page.js');
const { LoginPage } = require('../pageobjects/login.page.js');
const { RegistroPage } = require('../pageobjects/registro.page.js');

const emailUsuarioNuevo = 'correo@example7.com'; // 'admin@example.com'
const passwordUsuarioNuevo = 'admin123';
const nameUsuarioNuevo = 'Equipo-grupo';
const emailUsuarioExistente = 'admin@example.com'
const passwordUsuarioExistente = 'admin123';
const nameUsuarioExistente = 'Admin user'



const registroPage = new RegistroPage(); 
const LoginPage = new LoginPage();

describe('Proceso de Registro - POM ', () => {

  it('Ejercicio 1: registro con datos correctos', async () => { 
    await registroPage.open();
    await registroPage.clickBtnOperacion("/register")
    await registroPage.registro(nameUsuarioNuevo, emailUsuarioNuevo, passwordUsuarioNuevo, passwordUsuarioNuevo);

    await browser.pause(5000);

    const nombreUsuario = await registroPage.spanNombreUsuario.getText();

    await expect(nombreUsuario).toContain(`Hello, ${nameUsuarioNuevo}`); //se coloca de sta forma por si cambia el mansaje lo pueda buscar sin necesidad de cambiar
    await registroPage.btnLogout.click();

    });

    it('Ejercicio 2: registro con datos incorrectos', async () => { 
    await registroPage.open();
    await registroPage.registro(nameUsuarioNuevo, emailUsuarioNuevo, passwordUsuarioNuevo, '');

    await expect(browser).toHaveUrl('https://ecommerce-js-test.vercel.app/register')

    });

    it('Ejercicio 3: Login con datos correctos', async () => { 
    await LoginPage.open();
    await LoginPage.login(emailUsuarioExistente, passwordUsuarioExistente);

    const nombreUsuario = await LoginPage.spanNombreUsuario.getText();
    await expect(nombreUsuario).toContain(`Hello, ${nameUsuarioExistente}`);
    

    });

     it('Ejercicio 4: Login con datos incorrectos', async () => { 
    await LoginPage.open();
    await LoginPage.login(emailUsuarioExistente, passwordUsuarioNuevo);

    const mensajeError = await LoginPage.mensajeError.getText();
    await expect(mensajeError).toContain('Invalid email or password');
    

    });


});
