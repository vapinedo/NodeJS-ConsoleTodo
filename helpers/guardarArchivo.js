const fs = require("fs");

const guardarDB = (data) => {
  const archivo = "./db/data.json";
  fs.writeFileSync(archivo, JSON.stringify(data, null, 3));
};

module.exports = {
  guardarDB,
};
