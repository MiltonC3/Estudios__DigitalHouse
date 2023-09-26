let nombre = "Alberto";

let apellido = "Rodriguez";

let sueldoActual = 125000;

let porcentajeAumento = 25;

let calculoAumento = (sueldoActual * porcentajeAumento) / 100;

let sueldoNuevo = sueldoActual + calculoAumento;

console.log(`Hola ${nombre} ${apellido}, 
Tu sueldo actual es de: 
$${sueldoActual} 
Lo cuál recibes un aumento del 25% de: 
$${calculoAumento} 
Así que tu nuevo sueldo es de: 
$${sueldoNuevo}
`);
