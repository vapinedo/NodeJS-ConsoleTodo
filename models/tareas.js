const Tarea = require("./tarea");

class Tareas {
  constructor() {
    this._listado = {};
  }

  get listadoArr() {
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      listado.push(this._listado[key]);
    });
    return listado;
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  cargarTareasFromArray(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  listarTodas() {
    console.log();
    this.listadoArr.forEach((tarea, index) => {
      const idx = `${index + 1}`.green;
      const { desc, completadoEn } = tarea;
      const estado = completadoEn ? "Completada".green : "Pendiente".red;
      console.log(`${idx} ${desc} :: ${estado}`);
    });
  }

  listarCompletadas() {
    console.log();
    const list = this.listadoArr.filter((tarea) => tarea.completadoEn);
    list.forEach((item, index) => {
      const idx = `${index + 1}`;
      console.log(`${idx}. ${item.desc} :: ${item.completadoEn.green}`);
    });
  }

  listarPendientes() {
    console.log();
    const list = this.listadoArr.filter((tarea) => !tarea.completadoEn);
    list.forEach((item, index) => {
      const idx = `${index + 1}`;
      console.log(`${idx}. ${item.desc} :: ${"Pendiente".red}`);
    });
  }

  borrarTarea(id = "") {
    if (this._listado[id]) {
      delete this._listado[id];
    }
  }
}

module.exports = Tareas;
