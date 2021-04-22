const inquirer = require("inquirer");
let t = require("./tareas.js");

inquirer
    .prompt({
      type: "rawlist",
      name: "opcion",
      message: "Opcion elegida :",
      choices: [
        "crear",
        "actualizar",
        "Borrar",
        "Listar todas",
        "Lista por Id",
        "salir",
      ],
    })

  .then(({ opcion }) => {
    if (opcion === "crear") {
      t.crear();
      
    } else if (opcion === "Borrar") {
      t.eliminar();
    } else if (opcion === "Listar todas") {
      t.listarTareas();
    } else if (opcion === "Lista por Id") {
      inquirer.prompt(
        {
          name: "id",
          message: "Entra el id?",
          type: "input"
        })
        .then(({ id }) => {
        console.log(id)
        t.listarById(id);
      })
        
      }
  
})

