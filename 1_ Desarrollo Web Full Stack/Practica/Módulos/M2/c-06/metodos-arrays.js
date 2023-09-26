// ------------ Metodos Array -------------

let notas = [3, 5, 10, 9, 7, 8, 12, 14];

// *Metodo push(): Agrega un elemento al final del array
notas.push(1);
notas.push(2);
notas.push(3);
notas.push(4);

// *Metodo pop(): Elimina el ultimo elemento del array
notas.pop();
// se lo puede almacenar en una variable el ultimo elemento eliminado
let elUltimo = notas.pop();

// *Metodo shift(): Elimina el primer elemento del array
notas.shift();
// tambien se pued alacenar en una variable
let elPrimero = notas.shift();

// *Metodo unshift(): Agrega un elemento al principio del array
notas.unshift(6);
// se posicona primero el 2, y despues el 1, ya que siempre el unshift se posición 0
notas.unshift(15);

// *Metodo indexOf(): Busca el elemento adentro del array dependiendo el parametro que le indiquemos
console.log("===============================");
let posicionDelQuince = notas.indexOf(15);
console.log(posicionDelQuince);
if (posicionDelQuince != -1) {
  console.log("Lo encontré");
}

// *Metodo includes(): Similar al indexOf con la diferencia que retorna un booleano
console.log("===============================");
let posicionDelNueve = notas.includes(9);
console.log(posicionDelNueve);
if (posicionDelNueve == true) {
  console.log("Lo encontré al ser true");
}

// *Metodo join(): Separa como string con una coma en cada elemento
console.log("===============================");
let resultadoJoin = notas.join();
console.log(resultadoJoin);
// incluso se puede separar con lo que se quiera indicando el parametro en el join
console.log(notas.join(" - "));

console.log("===============================");
console.log(notas);
