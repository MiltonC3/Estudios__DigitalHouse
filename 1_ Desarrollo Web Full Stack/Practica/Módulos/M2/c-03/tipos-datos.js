console.log("=======================================");
// -------------- TIPOS DE DATOS -------------------

// *number - representacion de un numero entero o decimal
// enteros
let edad = 33;
console.log(edad);
// decimales
let precio = 150.5;
console.log(precio);

// *string - cadena de texto alfanumerico
let nombre = "Juan";
console.log(nombre);

// *boolean - true or false
let verdadero = true;
console.log(verdadero);
let falso = false;
console.log(falso);

// *NaN, null, undefined
let notANumber = NaN;
console.log(notANumber);
let nulo = null;
console.log(nulo);
let sinValor = undefined;
console.log(sinValor);

console.log("=======================================");
// ---------------- OBJETOS -------------------

let persona = {
  nombre: "Nacho",
  edad: 33,
};
console.table(persona);

console.log("=======================================");
// ----------------- ARRAY --------------------

let paises = ["Argentina", "Venezuela", "Colombia"];
console.table(paises);
