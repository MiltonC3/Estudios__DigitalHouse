let sumar = (num1, num2) => num1 + num2;
let restar = (num1, num2) => num1 - num2;
let multiplicare = (num1, num2) => num1 * num2;
let dividir = (num1, num2) => num1 / num2;

let calculadora = (num1, num2, operacion) => operacion(num1, num2);

console.log(calculadora(18, 3, dividir));