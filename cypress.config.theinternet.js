const { defineConfig } = require("cypress");

//la base de nuestra URL, de las pruebas que vamos a realizar, es esta:  

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://the-internet.herokuapp.com/", //mi variable y la puedo ocupar en cualquiera de mis test 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    /*env: {
      username: "tomsmith",
      password: "SuperSecretPassword!",  
    },  */


//aca  se le pide a cypress que tome videos o grabar lo que esta haciendo 
// como prueba de los que se esta haciendo 

    video: true, 

    videoCompression: 32, 

    //genera una carpeta de videos 
    //de esta forma no se toca ni el codigo ni la variable de ambiente 
  },
});
