let estructuraPeliculas = [
  "Turno de día",
  "30 noches con mi ex",
  "Bestia",
  "El monte",
  "Top gun maverick",
  "Elvis",
  "Thor: amor y trueno",
];

console.log("============================");

console.log('Lista de películas:');

let peliculaMasVendida = (peli) => {
  let peliBuscar = estructuraPeliculas.indexOf(peli);

  let peliTendencia = estructuraPeliculas
    .splice(peliBuscar, 1)
    .join("")
    .toUpperCase();

  estructuraPeliculas.unshift(peliTendencia);
};

peliculaMasVendida();

console.log(estructuraPeliculas);

console.log("============================");

console.log('Películas a estrenar:');

let peliculasAEstrenar = "Counter Strike, NOP, Vértigo, Nick, Avatar";

let estructuraPeliculasNuevas = peliculasAEstrenar.split(", ");

estructuraPeliculasNuevas.shift();

console.log(estructuraPeliculasNuevas);

console.log("============================");

console.log('Todas las películas:');

function unirEstructuras(est1, est2) {
  return est1.concat(est2);
}

let estructuraGeneral = unirEstructuras(
  estructuraPeliculas,
  estructuraPeliculasNuevas
);

console.log(estructuraGeneral);
