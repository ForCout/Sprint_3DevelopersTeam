const inquirer = require("inquirer");
const fs = require("fs");
const tareas = fs.readFileSync("tareas.json");
const listaTareas = JSON.parse(tareas);





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
        file = true;
      }
    });
    if (file == false) console.log("Este archivo no existe");
};
  
const eliminar = (id) => {
    let file = false;
    listaTareas.forEach(function (tarea,index) {
      if (tarea.idTarea == id) {
        listaTareas.splice(index, 1);
        fs.writeFileSync("tareas.json", JSON.stringify(listaTareas, null, 2));
        console.log(`La tarea con id: ${id} ha sido eliminada`);
        file = true;
      }
    });
    if (file == false) console.log("Este archivo no se encuentra");
};
const actualizar = (id, callback) => {
      
    listaTareas.forEach(function (tarea,) {
        if (tarea.idTarea == id) {
           
            crear();
        }
    })
}
listarById(2)