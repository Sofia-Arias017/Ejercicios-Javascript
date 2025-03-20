let num1 = parseInt(prompt("Por favor, ingresa el primer número entero:"))
let num2 = parseInt(prompt("Ahora ingresa el segundo número entero:"))

if (isNaN(num1) || isNaN(num2)) {
    console.log("Parece que ingresaste un valor no válido. Asegúrate de escribir solo números enteros.");
} else {
    console.log("Resultados de las operaciones matemáticas:")
    console.log(`Suma: ${num1} + ${num2} = ${num1 + num2}`)
    console.log(`Resta: ${num1} - ${num2} = ${num1 - num2}`)
    console.log(`Multiplicación: ${num1} × ${num2} = ${num1 * num2}`)

    if (num2 !== 0) {
        console.log(`División: ${num1} ÷ ${num2} = ${num1 / num2}`)
        console.log(`Módulo: ${num1} % ${num2} = ${num1 % num2}`)
    } else {
        console.log("No se puede dividir por cero. Intenta con otro número.");
    }
}
