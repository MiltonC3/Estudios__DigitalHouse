let fs = require('fs')

let rutaTxt = './mensaje.txt';
let contenido = fs.readFileSync(rutaTxt,'utf-8');

console.log(contenido);