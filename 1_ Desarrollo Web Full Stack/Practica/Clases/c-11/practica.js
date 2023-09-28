let persona = {
  nombre: "Esteban",
  dni: 34964578,
  edad: 31,
  direccion: {
    calle: "Alberdi",
    numero: 344,
  },
  presentarse: function () {
    return `Hola mi nombre es ${persona.nombre}`;
  },
};

let {
  dni,
  direccion: { calle },
  presentarse,
} = persona;

// console.log(presentarse());

let saludo = "Hola";

let { length: cantidadDeLetras } = saludo;

// console.log(cantidadDeLetras)

const premios = [100, 50, 25, 10, 5, 0, 20, 14];

let [primero, segundo, tercero, ...resto] = premios;

// console.log(resto)

let bigmac = {
  pan: 3,
  salsa: "Mc",
  precio: 2500,
};

let turboBacon = {
  pan: 2,
  salsa: "Tasty",
  precio: 3200,
};

let pedidoNico = {
  ...turboBacon,
  carne: 3,
  gaseosa: "Mediana",
};

// console.log(pedidoNico);

function suma(...numeros) {
  return numeros.reduce((acc, num) => acc + num);
}

// console.log(suma(10, 5, 6, 7, 8, 9, 10));


