const inquirer = require("inquirer");
const fs = require("fs");
let tareas = fs.readFileSync("tareas.json");
let listaTareas = JSON.parse(tareas);
const prompt = require("prompt");
let json = require("./tareas.json");
let menu = require("./prueba.js");
let datos = []
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
async function crear()  {
  
  crearTarea(await preguntas());
};

const crearTarea = (file) => {
  datos.push(file)
  fs.writeFileSync('tareas.json', JSON.stringify(datos,null,2), { flag: "a" })
  
}

const listarTareas = () => {
  listaTareas.forEach(function (tareas) {
    //fs.writeFileSync('tareas.json', JSON.stringify(datos,null,2), { flag: "w+" })
    
  });
 
};

const listarById = (id) => {
  listaTareas.forEach(function (tarea) {
    if (tarea.idTarea == id) console.log(tarea);
  });
};

const eliminar = (id) => {
  listaTareas.forEach(function (tarea) {
    if (tarea.idTarea == id) listaTareas.splice(tarea, 1);
  });
  console.log(`La tarea con id: ${id} ha sido eliminada`);
};

// const CrudTareas = (function () {
//   return {

//     listarTareas: () => {
//       listaTareas.forEach(function (tarea) {
//         console.log(tarea);
//       });
//     },

//     listarById: (id) => {
//       listaTareas.forEach(function (tarea) {
//         if (tarea.idTarea == id) console.log(tarea);
//       });
//     },
//     eliminar: (id) => {
//       listaTareas.forEach(function (tarea) {
//         if (tarea.idTarea == id) listaTareas.splice(tarea, 1);
//       });
//       console.log(`La tarea con id: ${id} ha sido eliminada`);
//     },

//   };
// })();

//module.exports.CrudTareas =  CrudTareas ;
module.exports.preguntas = preguntas;
module.exports.listarTareas = listarTareas;
module.exports.crear = crear;