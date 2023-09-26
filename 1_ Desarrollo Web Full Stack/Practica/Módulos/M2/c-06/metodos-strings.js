// ------------- Metodos de strings ------------------

// *Metodo length: Ver el largo de nuestra cadena
let mensaje = "Gran dia para practicar JS";
console.log(mensaje);
console.log(mensaje.length);

// *Metodo de indexOf(): buscar la ubicacion de la palabra
console.log(mensaje.indexOf("dia"));

// *Metodo slice(): elmina desde la posicion que le indicamos
console.log(mensaje.slice(0, 32));

// *Metodo strim(): elimina los espacios innecesarios
console.log(mensaje.trim());

// *Metodo split(): convierte la cadena de string en un array
console.log(mensaje.split(" "));

// *Metodo replace(): para remlazar una porcion de texto
console.log(mensaje.replace("practicar JS", "todo"));

function texto(param1, param2, param3) {
    return param1.replace(param2, param3);
}