let curso = {
  cantidadDeAlumnos: 32,
  docentes: ["Nacho", "Javier"],
  horario: "de 19 a 21 hs",
  notificaciones: function () {
    return `El horario de la cursada es ${this.horario}`;
  },
};

// console.log(curso.notificaciones());

// * Objetos constructora

function Curso(cantidadDeAlumnos, docente, horario) {
  this.cantidadDeAlumnos = cantidadDeAlumnos;
  this.docentes = docente;
  this.horarios = horario;
}

let cursoDeProgramacion = new Curso(50, ["Javier", "Gerardo"], "de 19 a 21 hs");
let cursoDeMarketing = new Curso(45, ["Diego", "Debbie"], "de 17 a 19 hs");

// console.log(cursoDeProgramacion);
// console.log(cursoDeMarketing);

let deportista = {
  energia: 100,
  experiencia: 10,
  nombre: "Aimar",
  entrenarHoras: function (horas) {
    this.energia -= horas * 5;
    this.experiencia += horas * 2;
  },
};

// console.log("==Antes de comenzar entrenamiento==");
// console.log("Deportista energia: "+deportista.energia);
// console.log("Deportista experiencia: "+deportista.experiencia);
// console.log("==ENTRENANDO==");
// deportista.entrenarHoras(5);
// console.log("==FIN ENTRENAMIENTO==");
// console.log("Deportista energia: "+deportista.energia);
// console.log("Deportista experiencia: "+deportista.experiencia);

function Auto(marca, modelo) {
  this.marca = marca;
  this.modelo = modelo;
}

let miAuto = new Auto("nissan", "versa");
let miOtroAuto = new Auto("nissan", "sentra");

console.log(miOtroAuto.modelo);
