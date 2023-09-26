let fs = require('fs')

let mensaje = fs.readFileSync('./mensaje.txt','utf-8');

console.log(mensaje);