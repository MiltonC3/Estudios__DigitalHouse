const fs = require("fs");

const importar = (marca) => {
  switch (marca) {
    case "Hot Toys":
      const figuras1 = JSON.parse(
        fs.readFileSync("./datos/figuras1.json", "utf8")
      );
      return figuras1;
      break;
    case "Bandai":
      const figuras2 = JSON.parse(
        fs.readFileSync("./datos/figuras2.json", "utf8")
      );
      return figuras2;
      break;
    case "Star Wars":
      const figuras3 = JSON.parse(
        fs.readFileSync("./datos/figuras3.json", "utf8")
      );
      return figuras3;
      break;
    default:
      return 'No existe'
  }
};

module.exports = importar;
