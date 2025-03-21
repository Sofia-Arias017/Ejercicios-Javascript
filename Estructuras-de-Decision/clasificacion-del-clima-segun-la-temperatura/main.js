let temperatura = parseFloat(prompt("Ingresa la temperatura en grados Celsius:"))

if (isNaN(temperatura)) {
    console.log("Error: Debes ingresar un número válido.")
} else {

    if (temperatura <= 15) {
        console.log("El clima es frío.")
    } else if (temperatura >= 16 && temperatura <= 25) {
        console.log("El clima es templado.")
    } else {
        console.log("El clima es caluroso.")
    }
}
