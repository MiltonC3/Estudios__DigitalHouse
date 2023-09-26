let operacionesBancarias = [10000, 5000, -1900, -3000, 6000, -9000];

function calculoSaldoCliente(nombre, apellido, param) {
  let saldoDepositos = 0;

  let saldoRetiros = 0;

  for (let i = 0; i < param.length; i++) {
    if (param[i] > 0) {
      saldoDepositos += param[i];
    } else if (param[i] < 0) {
      saldoRetiros += -(param[i]);
    }
  }

  let saldoActual = saldoDepositos - saldoRetiros;

  return `Estimado ${nombre} ${apellido}:
El monto total de los depósitos es de: $${saldoDepositos}.
El monto total de los retiros es de: $${saldoRetiros}.
Por lo tanto, su saldo actual en la cuenta es de: $${saldoActual}.`;
}

console.log(calculoSaldoCliente("Milton", "Coria", operacionesBancarias));


