let numeros = [10, 25, 14, 16, 18, 1, 9, 12, 3, 5];

let [numero1, , numero2, , numero3, ...restoValores] = numeros;

let restoNumeros = [...restoValores];

// console.log(restoNumeros);

let mascota = {
  nombre: "Mona",
  tipoDeMascota: "Gato",
  color: "Gris",
  raza: "Atigrado",
};

let { nombre, tipoDeMascota, color, raza } = mascota;

// console.log(`Hola les presento a mi mascota su nombre es: ${nombre}, es un hermoso ${tipoDeMascota}, de
// color: ${color} y su raza es: ${raza}`)
