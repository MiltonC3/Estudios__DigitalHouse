// ------------- if ternario --------------------

let fruta = "Manzana";

let resultado =
  fruta == "Manzana"
    ? "Buenisimo me gustan las manzanas"
    : "Ufa, queria manzana";

console.log(resultado);

// ------------------ switch --------------------

let semaforo = "Verde";

switch (semaforo) {
  case "Verde":
    console.log("Puedo cruzar");
    break;
  case "Amarillo":
    console.log("Precaución");
    break;
  case "Rojo":
    console.log("No cruces, hay que esperar");
    break;
  default:
    console.log("No anda el semaforo");
}
