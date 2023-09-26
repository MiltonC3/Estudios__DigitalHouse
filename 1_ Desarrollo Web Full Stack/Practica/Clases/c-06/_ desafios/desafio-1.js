let prodElectrodomestico = [
  "Heladera",
  "Aire acondicionado split",
  "Cocina",
  "Microondas",
  "Lavarropa",
  "Horno eléctrico",
];

console.log("====================================");

console.log(prodElectrodomestico[0]);
console.log(prodElectrodomestico[1]);
console.log(prodElectrodomestico[2]);
console.log(prodElectrodomestico[3]);
console.log(prodElectrodomestico[4]);
console.log(prodElectrodomestico[5]);

console.log("====================================");

let primerElemento = prodElectrodomestico.shift();

prodElectrodomestico.push(primerElemento);

console.log(prodElectrodomestico);

console.log("====================================");

prodElectrodomestico.push("Termotanque");

prodElectrodomestico.push("Pava eléctrica");

console.log(prodElectrodomestico);

console.log("====================================");

console.log(`El array cuenta con ${prodElectrodomestico.length} elementos`);

console.log("====================================");

let elementoBuscado = prodElectrodomestico.includes("pava eléctrica");

elementoBuscado == true
  ? console.log("Producto encontrado")
  : console.log("El producto buscado no existe");

console.log("====================================");

let unirArrayEnTexto = prodElectrodomestico.join(" - ");

console.log(unirArrayEnTexto);

console.log("====================================");

console.log(unirArrayEnTexto.length);

console.log("====================================");

let arrayRemplazado = unirArrayEnTexto.replace("Aire acondicionado split", "Aire acondicionado ventana")

console.log(arrayRemplazado)

console.log("====================================");

let nuevoArray = arrayRemplazado.split(" - ");

console.log(nuevoArray)