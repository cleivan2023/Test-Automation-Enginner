const baseUrl = "https://ecommerce-js-test.vercel.app/";

describe("Testing ShopHub - Incluye login", () => {
    before(() => {
        cy.viewport(1920, 1080);
        cy.visit(baseUrl);
        cy.get('a[href="/login"]').click(); // Botón de login

        cy.fixture('usuarios.json').then((usuarios) => {
            const usuarioExistente = usuarios.usuarioExistente;
            cy.get("#email").type(usuarioExistente.email);
            cy.get("#password").type(usuarioExistente.password);
            cy.get('form button[type="submit"]').click();

            // ✅ Esperar y validar login exitoso DENTRO del .then()
            cy.contains("Hello, Admin User", { timeout: 10000 });
        });
    });

    it("Login y compra de mens casual Slim fit. Validar comprar", () => {
        // tu test de compra aquí
    });
});
