const fs = require("fs");

const bicicletas = JSON.parse(fs.readFileSync("./datos/bicicletas.json", "utf8"));

module.exports = bicicletas
