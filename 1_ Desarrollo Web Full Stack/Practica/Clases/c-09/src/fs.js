const fs = require("fs");
const readLine = require("readline-sync");

let codigo = readLine.question(`Cual es el codigo que quieres agregar hoy:
`)

if (fs.existsSync("../info/info.txt")) {
//   fs.writeFileSync("../info/info.js", codigo);
  fs.appendFileSync("../info/info.js", `
${codigo}`);
  console.log("El archivo se actualizo correctamente");
} else {
  console.log("El archivo que buscas no existe");
}

// let mensaje = fs.readFileSync("../info/info.txt", "utf8");

// console.log(mensaje)

// fs.unlinkSync("../info/prueba.jpg");
