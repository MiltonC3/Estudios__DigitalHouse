let multidimensional = [
  ["html5", 4000],
  ["css3", 5000],
  ["javascript", 10000],
  ["react", 7000],
  ["nodejs", 15000],
];

let cursos = ["HTML5", "REACT", "JAVASCRIPT"];

let calcularMonto = (multidimensional, cursos) => {
  let montoTotal = 0;
  
  for (let i = 0; i < multidimensional.length; i++) {
    for (let j = 0; j < cursos.length; j++) {
      if (multidimensional[i][0].toUpperCase() == cursos[j]) {
        montoTotal += multidimensional[i][1];
      }
    }
  }
  
  return montoTotal
};



console.log(calcularMonto(cursos, multidimensional));
