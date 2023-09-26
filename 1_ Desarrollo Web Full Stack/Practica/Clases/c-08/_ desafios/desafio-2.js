let html = "30 45 25 34 18 23 16 50 72 70";
let css = "50 45 71 34 23 45 65 75 63 43 74 70";
let js = "70 65 58 45 23 57 34 17 72";
let node = "45 56 73 34 65 72 70 32";

let arrayHtml = html.split(" ");
let arrayCss = css.split(" ");
let arrayJs = js.split(" ");
let arrayNode = node.split(" ");

let promedioCurso = (param) => {
  let sumatoria = 0;
  let promedio = 0;

  switch (param) {
    case 1:
      for (let i = 0; i < arrayHtml.length; i++) {
        sumatoria += Number(arrayHtml[i]);
      }

      promedio = sumatoria / arrayHtml.length;

      break;
    case 2:
      for (let i = 0; i < arrayCss.length; i++) {
        sumatoria += Number(arrayCss[i]);
      }

      promedio = sumatoria / arrayCss.length;

      break;
    case 3:
      for (let i = 0; i < arrayJs.length; i++) {
        sumatoria += Number(arrayJs[i]);
      }

      promedio = sumatoria / arrayJs.length;

      break;
    case 4:
      for (let i = 0; i < arrayNode.length; i++) {
        sumatoria += Number(arrayNode[i]);
      }

      promedio = sumatoria / arrayNode.length;

      break;
    default:
      return `El valor que ingresaste no está comprendido entre el 1 y el 4.`;
  }

  return `El promedio del curso de ${
    param === 1
      ? "HTML5"
      : param === 2
      ? "CSS3"
      : param === 3
      ? "JAVASCRIPT"
      : param === 4
      ? "NODEJS"
      : ""
  } es de: ${parseInt(promedio)}`;
};

console.log(promedioCurso(5));
