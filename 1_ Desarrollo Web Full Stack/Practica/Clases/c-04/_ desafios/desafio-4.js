let primerNumero = 34;
let segundoNumero = 2;
let operacion = "-";

switch (operacion) {
  case "+":
    resultado = primerNumero + segundoNumero
    break;
  case "-":
    resultado = primerNumero - segundoNumero
    break;
  case "*":
    resultado = primerNumero * segundoNumero
    break;
  case "/":
    resultado = primerNumero / segundoNumero
    break;
  default:
    console.log(
      `Las operaciones aceptadas son: sumar - restar - multiplicar - dividir`
    );
    break;
}

console.log(`
Primer numero: ${primerNumero}
Segundo numero: ${segundoNumero}
Operación: ${operacion}
Resultado: ${resultado}
`)
