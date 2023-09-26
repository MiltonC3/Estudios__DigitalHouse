// * 1 consigna
let siguientesNum = num => {
  num++;
  for (let i = 0; i <= 10; i++) {
    console.log(num++);
  }
}
// siguientesNum(16);

// * 2 consigna
let conteoDeTres = num => {
  for (let i = 1; i <= num; i += 3) {
    console.log(i);
  }
}
// conteoDeTres(58);

// * 3 consigna
let sumatoriaNum = () => {
  let sumaTotal = 0;
  for (let i = 0; i <= 100; i++) {
    sumaTotal += i;
  }
  return console.log(sumaTotal);
}
// sumatoriaNum()

// * 4 consigna
let deletreoMayus = texto => {
  for (let i = 0; i < texto.length; i++) {
    console.log(texto[i].toUpperCase());
  }
}
// deletreoMayus("practicando el uso de los ciclos o bucles");

// * 5 consigna
let numeroPositivos = [10, 20, 30, 17, 18];

let retornoArrayNumPares = arrayP => {
  let numeroPares = [];

  for (let i = 0; i < arrayP.length; i++) {
    if (arrayP[i] % 2 == 0) {
      numeroPares.push(arrayP[i]);
    }
  }

  return console.log(numeroPares);
}

retornoArrayNumPares(numeroPositivos)

