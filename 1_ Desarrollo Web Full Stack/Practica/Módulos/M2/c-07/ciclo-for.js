for (let i = 0; i <= 10; i++) {
  console.log(`El valor de i es igual a: ${i}`);
}

function noParesDeContarImparesHasta(numero) {
  let numerosImpares = [];

  for (let i = 1; i <= numero; i += 2) {
    numerosImpares.push(i);
  }

  return console.log(numerosImpares.length);
}

noParesDeContarImparesHasta(80);
