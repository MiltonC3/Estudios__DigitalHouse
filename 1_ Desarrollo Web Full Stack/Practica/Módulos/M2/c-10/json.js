let amigos = ["Coco", "Pablito", "Sus", "Franco"]
let amigosJSON = JSON.stringify(amigos)
let amigosOriginal = JSON.parse(amigosJSON)

let persona = {
    nombre: "Carli",
    edad: 26,
    domicilio: "Calle Falsa 123"
}

console.log(persona)

let personaJSON = JSON.stringify(persona)

console.log(personaJSON)

let personaOriginal = JSON.parse(personaJSON)

console.log(personaOriginal)