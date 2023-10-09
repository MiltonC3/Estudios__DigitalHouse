// * SpreadOperator con arrays

let peliculasAccion = ["End Game", "Iron Man 3", "Capitan America"];

let peliculasComedia = ["Mi pobre angelito", "¿Que paso ayer?"];

let peliculas = [...peliculasAccion, ...peliculasComedia];

// console.log(peliculas);

// * SpreadOperator con objetos literales

let generoComedia = {
  nombreGenero: "Comedia",
  popularidad: 3,
};

let miPobreAngelito = {
  nombre: "Mi pobre angelito",
  duracion: 120,
  ...generoComedia,
};

let quePasoAyer = {
  nombre: "Que paso ayer",
  duracion: 110,
  ...generoComedia,
};

// console.log(miPobreAngelito, quePasoAyer);

//* SpreadOperator con funciones

function peliculasVistas(...nombresDePeliculas){
    for (let i = 0; i < nombresDePeliculas.length; i++) {
        console.log(`La persona ya vio ${nombresDePeliculas[i]}`);
    }
}

peliculasVistas("Iron Man", "End Game", "Mi pobre angelito", "Que paso ayer")
