const fs = require("fs");
const datosBici = require("./bicijson");

const dhBici = {
  bicicletas: datosBici,
  buscarBici: function (id) {
    if (id < this.bicicletas.length) {
      return this.bicicletas[id];
    } else {
      return null;
    }
  },
  venderBici: function (idVenta) {
    if (idVenta < this.bicicletas.length) {
      this.bicicletas[idVenta].vendida = true;
      return this.buscarBici(idVenta);
    } else {
      return 'Bicicleta no encontrada';
    }
  },
};

console.log(dhBici.venderBici(8));
