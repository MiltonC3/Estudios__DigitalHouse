let cursosDH = [
  ["html5", 4000],
  ["css3", 5000],
  ["javascript", 10000],
  ["react", 7000],
  ["nodejs", 15000],
];

let cursosElegidos = ["HTML5", "REACT", "JAVASCRIPT"];

let calcularMonto = (array1, array2) => {
  let precioCursosElegidos = [];
  let montoTotal = 0;

  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i][0].toUpperCase() == array2[j]) {
        precioCursosElegidos.push(array1[i][1]);
      }
    }
  }

  for (let i = 0; i < precioCursosElegidos.length; i++) {
    montoTotal = montoTotal += precioCursosElegidos[i];
  }

  return montoTotal;
};

let cursosGeneral = (nombre, apellido, arrayCursos, arrayElegidos) => {
  let stringCursos = "";

  for (let i = 0; i < arrayElegidos.length; i++) {
    stringCursos += `${i + 1}) ${arrayElegidos[i]}
`;
  }

  return `
Estimado ${nombre} ${apellido}, en función de los cursos seleccionados: 

${stringCursos}
El monto total a pagar es de: $${calcularMonto(arrayCursos, arrayElegidos)}.
Bienvenido a la gran aventura Digital House.
`;
};

console.log(cursosGeneral("Milton", "Coria", cursosDH, cursosElegidos));

console.log("========================================================");

console.log(
  cursosGeneral(
    "Milton",
    "Coria",
    [
      ["php", 5000],
      ["python", 6000],
      ["sql", 10000],
    ],
    ["PHP", "PYTHON"]
  )
);
