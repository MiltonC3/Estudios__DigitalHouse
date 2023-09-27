let notas = [10, 4, 5, 8, 9, 2, 7];

// * map => para recorrer un array y crear uno nuevo con las condiciones de la funcion
let notasHastaEl100 = notas.map((num) => num * 10);
console.log(notasHastaEl100);
console.log("=======================");

// * filter => para filtrar un array con las condiciones de la funcion
let notasAprobadas = notas.filter((num) => num >= 7);
console.log(notasAprobadas);
console.log("=======================");

// * reduce => para recorrer un array y recibir solo un valor del array respecto a la condiciones de la funcion
let sumaNotas = notas.reduce((sum, num) => sum + num);
console.log(sumaNotas);
console.log("=======================");

// * forEach => itera en cada elemento de mi array y realiza una determinada operacion
notas.forEach((valor, indice) => {
  console.log(`En la posicion ${indice} tengo el valor ${valor}`);
});
