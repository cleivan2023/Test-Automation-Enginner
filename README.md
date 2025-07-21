# Test-Automation-Enginner
Curso intensivo de 84 horas enfocado en desarrollar competencias de automatización de pruebas mediante un aprendizaje práctico de  los fundamentos de automatización de pruebas web, API y móviles, utilizando herramientas modernas como Cypress, Playwright, Postman y Appium, aplicando buenas prácticas de testing, integración continua.

# Curso de Cypress 🧪✨

Este repositorio contiene el material y los ejemplos desarrollados durante el **Curso de Cypress**, organizado por módulos temáticos para facilitar el aprendizaje paso a paso.

## 📚 Contenido del Curso

Los temas cubiertos:

1. **Primeros Pasos**  
   - Instalación y configuración inicial de Cypress  
   - Estructura de archivos del proyecto  
   - Primer test automatizado

2. **Selectores y Acciones**  
   - Uso de selectores CSS, atributos y data-*  
   - Simulación de interacciones (clicks, tipeo, etc.)  
   - Buenas prácticas en la selección de elementos

3. **Hooks y Fixtures**  
   - Uso de `before`, `beforeEach`, `afterEach`, `after`  
   - Separación de datos con `fixtures`  
   - Reutilización de lógica entre tests

4. **API Mocks**  
   - Interceptación de llamadas con `cy.intercept`  
   - Simulación de respuestas del backend  
   - Validación de peticiones y respuestas

5. **Entornos**  
   - Manejo de múltiples entornos (`dev`, `staging`, `prod`)  
   - Uso de variables de entorno (`cypress.env.json`, `.env`)  
   - Separación de configuración por entorno


Cada carpeta contiene ejemplos con los temas vistos en clase.

## 🚀 Cómo Ejecutar los Tests

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/cypress-course.git
cd cypress-course
```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta Cypress en modo interactivo:

```bash
npx cypress open
```

O en modo headless:

```bash
npx cypress run
```

- Node.js (v14 o superior)
- npm o yarn
- Cypress (instalado como dependencia del proyecto)

---

**** 🎉
