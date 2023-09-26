let html = "30 45 25 34 18 23 16 50 72 70";
let css = "50 45 71 34 23 45 65 75 63 43 74 70";
let js = "70 65 58 45 23 57 34 17 72";
let node = "45 56 73 34 65 72 70 32";

let arrayHtml = html.split(" ")
let arrayCss = css.split(" ")
let arrayJs = js.split(" ")
let arrayNode = node.split(" ")

function calcularPromedio(arrayHtml, arrayCss, arrayJs, arrayNode, numero){
   let cursoElegido = [];

   let sumatoria = 0

    switch(numero){
        case 1:
            cursoElegido = arrayHtml
            break;
        case 2:
            cursoElegido = arrayCss
            break;
        case 3:
            cursoElegido = arrayJs
            break;
        case 4:
            cursoElegido = arrayNode
            break;
        default:
            return `El número ingresado es inválido, ingrese un número comprendido entre el 1 y el 4, donde:
1 = HTML5
2 = CSS3
3 = JAVASCRIPT
4 = NODEJS`
    }

    for (let i = 0; i < cursoElegido.length; i++) {
        sumatoria += Number(cursoElegido[i])
    }

    return sumatoria / cursoElegido.length
}

console.log(calcularPromedio(arrayHtml, arrayCss, arrayJs, arrayNode, 2))

