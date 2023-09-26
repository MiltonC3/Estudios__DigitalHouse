// ---------------- VARIABLES --------------------

// *let

let ensaladaLet = "lechuga y tomate";

{
  let ensaladaLet = "lechuga y cebolla";
}

// no se puede resignar ni remplazar el valor asi que el valor de ensalada sera el lechuga y tomate

// *var

var ensaladaVar = "lechuga y tomate";

{
  var ensaladaVar = "lechuga y cebolla";
}

// se puede reasignar y cambiar el valor asi que el valor de ensalada sera el lechuga y tomate

// *const

const ensaladaConst = "lechuga y tomate";

{
  // var ensaladaConst = 'lechuga y cebolla'
}

// da error

// ---------------- OBJETOS --------------------

let auto = {
  marca: "ford",
  modelo: "maverick",
  anio: 2022,
  bocina: function () {
    return "beep beep";
  },
};

console.log(auto);

// ------------------ ARRAY --------------------

let platos = ["Milanesa", "Fideos con salsa", "Pizza"];

console.log(platos[2]);
