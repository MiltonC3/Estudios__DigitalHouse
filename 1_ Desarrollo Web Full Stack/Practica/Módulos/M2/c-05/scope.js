// ---------- Ejemplo de scope ----------

let mensaje = "Hola";

function saludar() {
  let mensaje = "Chau";
  return mensaje;
}

console.log(mensaje);
console.log(saludar());
