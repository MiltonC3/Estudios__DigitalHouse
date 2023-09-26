const pelisImport = require("./peliculas");

//console.log(pelisImport);

for (let i = 0; i < pelisImport.length; i++) {
  console.log(`La película ${pelisImport[i].nombre} del género ${
    pelisImport[i].genero
  } con un rating de ${pelisImport[i].rating}
Ha ganado premios como ${pelisImport[i].premios.join(
    ", "
  )} con una duración de ${pelisImport[i].duracion}
Verla en el cine solamente cuesta $${pelisImport[i].precio}
--------------------------------------------------------`);
}
