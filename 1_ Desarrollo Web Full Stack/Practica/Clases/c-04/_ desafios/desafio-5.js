let velocidadAvion = 270;
let alturaAvion = 150;

if (
  velocidadAvion >= 268 &&
  velocidadAvion <= 278 &&
  alturaAvion >= 150 &&
  alturaAvion <= 300
) {
  console.log(`El avión está listo para aterrizar ya que:
Su velocidad es de ${velocidadAvion} km/hr, por lo tanto está entre los párametros de la velocidad de 268 km/hr y 278 km/hr permitidos para aterrizar.
Y su altura es de ${alturaAvion} m, lo cual está entre 150 m y 300 m que debe estar el avión de altura para no tener problemas al aterrizar.`);
} else {
  console.log(
    `El avión no está listo para aterrizar ya que no cumple con los párametros permitidos en velocidad o altura para aterrizar correctamente.`
  );
}
