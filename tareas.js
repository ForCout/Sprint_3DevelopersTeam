const inquirer = require("inquirer");
const fs = require("fs");
const tareas = fs.readFileSync("tareas.json");
const listaTareas = JSON.parse(tareas);
//const prompt = require("prompt");

const preguntas = () => {
  const p = [
    {
      type: "input",
      name: "idTarea",
      message: "Introduzca id de la tarea",
    },
    {
      name: "Tarea",
      type: "input",
      message: "Introduzca el nombre de la tarea",
    },
    {
      name: "Estado",
      type: "input",
      message: "Introduzca estado de la tarea",
    },
    {
      name: "Hora_inicio",
     default: Date(),
    },
    {
      name: "Hora_finalizacion",
      type: "input",
      message: "Introduzca hora finalizacion",
    },
    {
      name: "Usuario",
      type: "input",
      message: "Introduzca usuario",
    },
  ];

  return inquirer.prompt(p);
};
async function crear() {
  crearTarea(await preguntas());
}

const crearTarea = (file) => {
  listaTareas.push(file);
  fs.writeFileSync("tareas.json", JSON.stringify(listaTareas, null, 2), {
    flag: "w+",
  });
};

const listarTareas = () => {
  listaTareas.forEach(function (tarea) {
    console.log(tarea);
  });
};

const listarById = (id) => {
  let file = false;
  listaTareas.forEach(function (tarea) {
    if (tarea.idTarea == id) {
      console.log(tarea);
      let file = true;
    }
  });
  if (file == false) console.log("Este archivo no existe");
};

const eliminar = (id) => {
  let file = false;
  listaTareas.forEach(function (tarea) {
    if (tarea.idTarea === id) {
      listaTareas.splice(tarea, 1);
      fs.writeFileSync("tareas.json", JSON.stringify(listaTareas, null, 2));
      console.log(`La tarea con id: ${id} ha sido eliminada`);
      file = true;
    }
  });
  if (file == false) console.log("Este archivo no se encuentra");
};
const actualizar = (id) => {
  if (tarea.idTarea === id) {
    lystarById(id);
    eliminar(id);
    crear();
  }
  
}

module.exports = { preguntas, listarById, eliminar, crear, listarTareas,actualizar };
