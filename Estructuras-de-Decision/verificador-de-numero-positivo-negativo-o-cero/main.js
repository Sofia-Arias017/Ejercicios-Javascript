function verificarNumero(numero) {
    if (numero > 0) {
        return "El número es positivo."
    } else if (numero < 0) {
        return "El número es negativo."
    } else {
        return "El número es cero."
    }
}

let numeroIngresado = parseFloat(prompt("Ingresa un número:"))

console.log(verificarNumero(numeroIngresado))
