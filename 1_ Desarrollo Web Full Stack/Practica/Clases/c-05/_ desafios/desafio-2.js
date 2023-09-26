let burger = (tipoBurger, jamon, queso, salsa, mayonesa, mostaza, tomate, lechuga, cebolla) => {
  let precioTotal = 0;

  switch (tipoBurger) {
    case "Carne a la parilla":
      precioTotal += 1800
      break;
    case "Pollo":
      precioTotal += 1500
      break;
    case "Vegetariana":
      precioTotal += 1200
      break;
  }

  jamon ? precioTotal += 30 : precioTotal;
  queso ? precioTotal += 25 : precioTotal;
  salsa ? precioTotal += 5 : precioTotal;
  mayonesa ? precioTotal += 5 : precioTotal;
  mostaza ? precioTotal += 5 : precioTotal;
  tomate ? precioTotal += 15 : precioTotal;
  lechuga ? precioTotal += 10 : precioTotal;
  cebolla ? precioTotal += 10 : precioTotal;

  return precioTotal;
};

let funcionMensajeBurger = (nombre, apellido, funcionBurger) => `Estimado ${nombre} ${apellido}, el monto total a pagar es de: $${funcionBurger}`;

// Aqui se carga los datos
console.log(funcionMensajeBurger("Alejandro","Díaz",burger("Carne a la parilla",true,false,true,true,false,true,true,false)));