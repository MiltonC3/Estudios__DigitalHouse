const fs = require("fs");

const bicicletas = JSON.parse(
  fs.readFileSync("./dhBicicletas/datos/bicicletas.json")
);

// *1 desafio
function aumentoBici(porcen) {
  bicicletas.map((aumento) => {
    aumento.precio += aumento.precio * (porcen / 100);
  });

  return bicicletas;
}
// console.log(aumentoBici(30));

// *2 desafio
function biciPorRodado(numR) {
  return bicicletas.filter((num) => num.rodado === numR);
}

// console.log(biciPorRodado(29));

// *3 desafio
function listarTodasLasBici() {
  bicicletas.forEach((value) => {
    console.log(`${value.id}) 
marca: ${value.marca}
modelo: ${value.modelo}
rodado: ${value.rodado}
anio: ${value.anio}
color: ${value.color}
pesoKg: ${value.pesoKg}
tipo: ${value.tipo}
precio: ${value.precio}
vendida: ${value.vendida}
==============================`);
  });
}

listarTodasLasBici();
