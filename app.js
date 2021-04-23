const inquirer = require("inquirer");
let t = require("./tareas.js");

function loopMenu() {
  const menu = () => {
    inquirer
      .prompt({
        type: "rawlist",
        name: "opcion",
        message: "Opcion elegida :",
        choices: [
          "Crear",
          "Actualizar",
          "Borrar",
          "Listar todas",
          "Lista por Id",
          "Salir",
        ],
      })

      .then(({ opcion }) => {
        if (opcion === "Crear") {
          t.crear().then(menu);
        } else if (opcion === "Borrar") {
          inquirer
            .prompt({
              name: "id",
              message: "Entra el id?",
              type: "input",
            })
            .then(({ id }) => {
              t.eliminar(id);
              menu();
            });
        } else if (opcion === "Listar todas") {
          t.listarTareas();
          menu();
        } else if (opcion === "Lista por Id") {
          inquirer
            .prompt({
              name: "id",
              message: "Entra el id?",
              type: "input",
            })
            .then(({ id }) => {
              console.log(id);
              t.listarById(id);
              menu();
            });
        } else if (opcion === "Actualizar") {
          inquirer
            .prompt({
              name: "id",
              message: "Entra el id?",
              type: "input",
            })
            .then(({ id }) => {
              console.log(id);
              t.listarById(id);
              menu();
            });
        }
      });
  };
  menu();
}

loopMenu();
