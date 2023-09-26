// * 1 consigna
let convertirAMayuscula = (texto) => texto.toUpperCase();
console.log(convertirAMayuscula("hola"));

// * 2 consigna
let tipoDeDato = (parametro) => typeof parametro;
console.log(tipoDeDato("Hola"));

// * 3 consigna
let edadPerros = (edad) => edad * 7;
console.log(edadPerros(3));

// * 4 consigna
let valorHora = (salario, cDias, cHoras) =>
  parseInt(salario / (cDias * cHoras));
console.log(valorHora(120_000, 25, 7));
