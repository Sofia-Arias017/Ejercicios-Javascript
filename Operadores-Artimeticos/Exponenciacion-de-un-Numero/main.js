function elevarAlCuadrado(numero) {
    if (isNaN(numero)) {
        return "Error: Debes ingresar un número válido."
    }
    return numero ** 2
}
let entrada = prompt("Por favor, ingresa un número entero:")
let numero = parseInt(entrada)
if (isNaN(numero)) {
    console.log("El valor ingresado no es un número válido. Intenta de nuevo.")
} else {
    console.log(`El resultado de elevar ${numero} al cuadrado es: ${elevarAlCuadrado(numero)}`)
}
