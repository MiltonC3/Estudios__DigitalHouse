const fs = require("fs");

module.exports = JSON.parse(fs.readFileSync("./bicicletas.json", "utf8"));
