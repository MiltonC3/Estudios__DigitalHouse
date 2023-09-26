let alquilerVehiculo = (tipo, dias, silla) => {
  let montoAlquiler = 0;

  switch (tipo) {
    case "compacto":
      montoAlquiler = 14000 * dias;
      break;
    case "mediano":
      montoAlquiler = 17000 * dias;
      break;
    case "camioneta":
      montoAlquiler = 28000 * dias;
      break;
  }

  silla == true ? montoAlquiler += 1200 : montoAlquiler;

  return `Estimado cliente: en base al tipo de vehículo ${tipo} alquilado, considerando los ${dias} días utilizados, el monto total a pagar es de: $${montoAlquiler}`;
};

console.log(alquilerVehiculo("camioneta", 4, true));
