let pagoMes = 13000;
let consumoKWH = 200;

consumoKWH > 300
  ? console.log(
      `Debido a que su hogar tuvo un consumo de ${consumoKWH}kwh, en base al ajuste tarifario (hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%), cumplimos con informarle que se ha ajustado el total a pagar, que será de $${
        pagoMes + pagoMes * 0.2
      }`
    )
  : console.log(`Debido a que su hogar tuvo un consumo de ${consumoKWH}kwh, en base al ajuste tarifario, cumplimos con informarle que debido al bajo consumo se mantendrá el subsidio y no tendrá ningún aumento.`);
