// * 1 Consigna

let encontrarNumero = (arrayNum, numero) => {
  if (arrayNum.includes(numero) == true) {
    return `El número ${numero} sí existe en el array.`;
  } else {
    return "El valor solicitado no existe.";
  }
};

console.log(encontrarNumero([10, 9, 2, 6, 5, 7, 8], 20));

// * 2 Consigna

let juegoDeTrompito;

// * 3 Consigna

let sumaParesImpares = (arrayNumeros) => {
  let sumaPares = 0;
  let sumaImpares = 0;

  for (let i = 0; i < arrayNumeros.length; i++) {
    if (arrayNumeros[i] % 2 === 0) {
      sumaPares += arrayNumeros[i];
    } else {
      sumaImpares += arrayNumeros[i];
    }
  }

  return `La suma de los números:
Pares: ${sumaPares}
Imapares: ${sumaImpares}`;
};

console.log(sumaParesImpares([10, 5, 6, 7, 8, 9, 4, 1, 2, 3]));
