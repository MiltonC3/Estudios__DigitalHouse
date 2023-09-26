let arrayImportes = [100, 900, 300, 1100, 1000, -300, -200];

let sumatoriaBajoImporte = (param) => {
  let sumaGanancias = 0;
  for (let i = 0; i < param.length; i++) {
    if (param[i] <= 1000 && param[i] > 0) {
      sumaGanancias += param[i];
    }
  }

  return sumaGanancias;
};

// console.log(sumatoriaBajoImporte(arrayImportes))

// ****************************************************

function asientosDisponibles(disponible, buscar) {
  let respuesta = disponible.includes(buscar);
  if (respuesta == true) {
    return "Felicitaciones, el asiento número " + buscar + " está disponible";
  } else {
    return (
      "Lo sentimos, el asiento número " +
      buscar +
      " está ocupado, pero aún quedan" +
      disponible.length +
      " asientos disponibles"
    );
  }
}

// console.log(asientosDisponibles([10, 50, 60, 35], 15));

// ****************************************************

function reporteDePasajeros(num) {
  let pasajerosArriba = 200;

  let arrayRetorno = [];

  for (let i = 0; i <= num; i++) {
    if (i == 5) {
      pasajerosArriba -= 80;
      pasajerosArriba += 120;
    } else if (i > 0) {
      pasajerosArriba += 50;
      pasajerosArriba -= 30;
    }

    arrayRetorno.push("En la estación " + i + " hay " + pasajerosArriba + " pasajeros arriba del tren"
    );
  }

  return arrayRetorno;
}

// ****************************************************

function laClaveSecreta(texto) {
  let arrayClave = [];

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] != "*") {
      arrayClave.unshift(texto[i]);
    }
  }

  return arrayClave.join("");
}

console.log(laClaveSecreta(["a","*","d","a","r","f","*","i","c","*","s","e","d"," ","e","*","v","a","l","C"]));
