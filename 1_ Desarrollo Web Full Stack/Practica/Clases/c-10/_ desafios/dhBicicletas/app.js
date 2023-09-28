const datosBici = require("./datosBici");

const dhBici = {
  bicicletas: datosBici,
  buscarBici(id) {
    return this.bicicletas.filter((item) => item.id === id);
  },
  venderBici(idVenta) {
    if (idVenta < this.bicicletas.length) {
      this.bicicletas[idVenta].vendida = "si";
      return this.buscarBici(idVenta);
    } else {
      return "Bicicleta no encontrada";
    }
  },
  biciParaLaVenta() {
    return this.bicicletas.filter((item) => item.vendida === "no");
  },
  totalDeVentas() {
    let sumatoria = this.bicicletas
      .filter((item) => item.vendida === "si")
      .reduce((acc, item) => acc + item.precio, 0);
    return sumatoria;
  },
};

console.log("=============================");
console.log(dhBici.venderBici(7));
console.log(dhBici.venderBici(6));
console.log(dhBici.venderBici(5));
console.log("=============================");
console.log(dhBici.buscarBici(1));
console.log("=============================");
console.log(dhBici.totalDeVentas());
