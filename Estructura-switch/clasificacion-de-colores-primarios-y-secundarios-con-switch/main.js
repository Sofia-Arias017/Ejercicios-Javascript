function clasificarColor() {

let color = prompt("Ingresa un color: rojo, azul, amarillo, verde, naranja o violeta").trim().toLowerCase()

    switch (color) {
        case "rojo":
        case "azul":
        case "amarillo":
            console.log(`${color} es un color primario.`)
            break
        case "verde":
        case "naranja":
        case "violeta":
            console.log(`${color} es un color secundario.`)
            break
        default:
            console.log("Ese color no está en la lista. Intenta con otro.")
    }
}

clasificarColor()
