// * 1 desafio
console.log("===========================");
let estudiantes = [
  { nombre: "John", promedio: 8.5, aprobado: true },
  { nombre: "Jane", promedio: 7, aprobado: true },
  { nombre: "June", promedio: 3, aprobado: false },
];

let aprobado = estudiantes.filter(function (e) {
  return e.aprobado === true;
});

let desaprobado = estudiantes.filter(function (e) {
  return e.aprobado === false;
});

console.log(aprobado);
console.log(desaprobado);

// * 2 desafio
console.log("===========================");
let horariosPartida = [12, 14, 18, 21];

let horariosAtrasados = horariosPartida.map(function (num) {
    return num - 1
});

console.log(horariosAtrasados)

// * 3 desafio
console.log("===========================");
let vueltas = [5, 8, 12, 3, 22]

let totalVueltas = vueltas.reduce(function (sum, num) {
    return sum + num
})

console.log(totalVueltas)

// * 4 desafio
console.log("===========================");
let listaDeSuperMercado = [
  "Bife de chorizo",
  "Coca Cola",
  "Bananas",
  "Lechuga",
  "Chimichurri",
  "Lata de tomates",
  "Arvejas",
  "Cereales",
  "Pechuga de pollo",
  "Leche",
];

listaDeSuperMercado.forEach(function (item) {
    console.log(item)
})
