function Keyboard(btn, idioma, marca) {
  this.btn = btn;
  this.idioma = idioma;
  this.marca = marca;
}

// let keyboard = {
//   btn: 168,
//   idioma: "esp",
//   marca: "redragon",
//   info: function () {
//     return this.btn;
//   },
// };

let redragon = new Keyboard(120, "esp", "redragon");

let logitech = new Keyboard(144, "en", "logitech");



console.table([redragon, logitech]);
