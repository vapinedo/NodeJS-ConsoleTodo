require("colors");

const mostrarMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log("============================".green);
    console.log("       Menu de tareas   ".green);
    console.log("============================\n".green);

    console.log(`${"1".green}. Crear`);
    console.log(`${"2".green}. Listar`);
    console.log(`${"3".green}. Listar completadas`);
    console.log(`${"4".green}. Listar pendientes`);
    console.log(`${"5".green}. Completar`);
    console.log(`${"6".green}. Eliminar`);
    console.log(`${"0".green}. Salir \n`);

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Seleccione una opción: ", (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

const pausa = () => {
  return new Promise((resolve) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(
      `\n Presione ${"ENTER".green} para continuar \n`,
      (opt) => {
        readline.close();
        resolve(opt);
      }
    );
  });
};

module.exports = {
  mostrarMenu,
  pausa,
};
