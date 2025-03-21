function compararNumeros(num1, num2) {
    if (num1 > num2) {
        return `El número ${num1} es mayor que ${num2}.`
    } else if (num1 < num2) {
        return `El número ${num1} es menor que ${num2}.`
    } else {
        return `Ambos números son iguales.`
    }
}

let numero1 = parseFloat(prompt("Ingresa el primer número:"))
let numero2 = parseFloat(prompt("Ingresa el segundo número:"))

if (isNaN(numero1) || isNaN(numero2)) {
    console.log("Error: Debes ingresar valores numéricos.")
} else {

    console.log(compararNumeros(numero1, numero2))
}
