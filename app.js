require("colors");
const { guardarDB, leerDB } = require("./helpers/guardarArchivo");
const {
  inquirerMenu,
  pausa,
  leerInput,
  listarTareasBorrar,
} = require("./helpers/inquirer");
const Tareas = require("./models/tareas");

const main = async () => {
  let opt = null;
  const tareas = new Tareas();
  const tareasDB = leerDB();

  if (tareasDB) {
    // cargar tareas
    tareas.cargarTareasFromArray(tareasDB);
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case 1:
        const desc = await leerInput("Describe tu tarea:");
        tareas.crearTarea(desc);
        break;

      case 2:
        tareas.listarTodas();
        break;

      case 3:
        tareas.listarCompletadas();
        break;

      case 4:
        tareas.listarPendientes();
        break;

      case 6:
        const id = await listarTareasBorrar(tareas.listadoArr);
        console.log(id);
        break;
    }
    guardarDB(tareas.listadoArr);

    await pausa();
  } while (opt !== 0);
};

main();
