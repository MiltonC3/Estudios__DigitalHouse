const fs = require("fs");

const bicicletas = JSON.parse(fs.readFileSync("./bicicletas.json", "utf8"))

module.exports = bicicletas
