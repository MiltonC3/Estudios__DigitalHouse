const autosImportados = require("./autos");

const concesionaria = {
    autos: autosImportados,
    buscarAuto: function (patente) {
        const autoEncontrado = this.autos.find(
            (auto) => auto.patente === patente
        );

        if (autoEncontrado) {
            return autoEncontrado;
        } else {
            return null;
        }
    },
    venderAuto: function (patente) {
        const autoEncontrado = this.buscarAuto(patente);

        if (autoEncontrado) {
            autoEncontrado.vendido = true;
        }
    },
    autosParaLaVenta: function () {
        const autosFiltrados = this.autos.filter(
            (auto) => auto.vendido === false
        );

        return autosFiltrados;
    },
    autosNuevos: function () {
        const autosNuevos = this.autosParaLaVenta();
        return autosNuevos.filter((auto) => auto.km === 0);
    },
    listaDeVentas: function () {
        const autosVendidos = this.autos.filter((auto) => auto.vendido);
        const listaPrecios = autosVendidos.map((auto) => auto.precio);

        return listaPrecios;
    },
    totalDeVentas: function () {
        const totalVentas = this.listaDeVentas().reduce(
            (acc, num) => acc + num,
            0
        );

        return totalVentas;
    },
    puedeComprar: function (auto, persona) {
        if (auto.precio > persona.capacidadDePagoTotal) {
            return false;
        }

        if (persona.capacidadDePagoEnCuotas < auto.precio / auto.cuotas) {
            return false;
        }

        return true;
    },
    autosQuePuedeComprar: function (persona) {

        const autosDisponibles = this.autosParaLaVenta();
        
        return autosDisponibles.filter((auto) =>
            this.puedeComprar(auto, persona)
        );
    },
};

// console.log(concesionaria.totalDeVentas());
concesionaria.venderAuto("APL123");
// console.log(concesionaria.totalDeVentas());
// console.table(concesionaria.autosQuePuedeComprar())

// console.log(concesionaria.buscarAuto("APL123"));

console.table(
    concesionaria.autosQuePuedeComprar({
        nombre: "Juan",
        capacidadDePagoEnCuotas: 20000,
        capacidadDePagoTotal: 100000,
    })
);

// {
//     nombre: "Juan",
//     capacidadDePagoEnCuotas: 20000,
//     capacidadDePagoTotal: 100000
//     }
