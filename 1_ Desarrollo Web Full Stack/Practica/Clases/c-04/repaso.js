if(!("20" === 20 || 5 >= 6)){
  console.log("Es verdadero")
} else {
  console.log("Es falso")
}

console.log("================")

if ("17t" / 5) {
  console.log("Es verdadero")
} else {
  console.log("Es falso")
}

console.log("17t" / 5)

console.log("================")

console.log("Gato" || "Perro" || "Gallina")

console.log("================")

let edad = 20

if (edad < 18){
  console.log("Eres menor de edad")
} else{
  console.log("Era mayor de edad")
}

// If ternario

edad < 18 ? "Eres menor de edad" : "Eres mayor de edad";

console.log(edad)

// switch
let fruta = "naranja";

switch(fruta){
  case "naranja":
    console.log("Escogiste la naranja")
    break;
  case "frutilla":
    console.log("Escogiste la frutilla")
    break;
  case "pera":
    console.log("Escogiste pera o banana")
    break;
  default:
    console.log("Debes elegir una fruta")
}