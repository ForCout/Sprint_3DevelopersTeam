const inquirer = require("inquirer");
const fs = require("fs");
let tareas = fs.readFileSync("tareas.json");
let listaTareas = JSON.parse(tareas);
const prompt = require("prompt");
let json = require("./tareas.json");
let menu = require("./app.js");
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
  console.log(file)
  fs.writeFileSync('tareas.json', JSON.stringify(datos,null,2), { flag: "w+" })
  
}

const listarTareas = () => {
  listaTareas.forEach(function (tarea) {
    console.log(tarea)
    
  });
 
};

const listarById = (id) => {
  listaTareas.forEach(function (tarea) {
    if (tarea.idTarea == id) console.log(tarea);
  });
};

const eliminar = (id) => {
  listaTareas.forEach(function (tarea, index, arr) {
    if (tarea.idTarea[index] == id) listaTareas.splice(index, index);
  });
  console.log(`La tarea con id: ${id} ha sido eliminada`);
};



module.exports ={preguntas,listarById,eliminar,crear,listarTareas}
