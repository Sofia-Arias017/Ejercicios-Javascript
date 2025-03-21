function esPrimo(numero) {
if (numero < 2) return false
for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
    return false
        }
    }
    return true
}

let opcion = parseInt(prompt(
    "Elige una opción:\n" +
    "1 - Ver todos los números entre -20 y 30\n" +
    "2 - Ver los números pares entre 20 y 60\n" +
    "3 - Ver los números impares entre 600 y 666\n" +
    "4 - Ver los números primos entre 1 y 150"
));

if (isNaN(opcion) || opcion < 1 || opcion > 4) {
    console.log("Por favor, elige un número del 1 al 4.")
} else {
    console.log("Aquí tienes los resultados:")

if (opcion === 1) {
    console.log("Números entre -20 y 30:")
for (let i = -20; i <= 30; i++) {
    console.log(i)
        }
} else if (opcion === 2) {
    console.log("Números pares entre 20 y 60:")
for (let i = 20; i <= 60; i += 2) {
    console.log(i)
        }
} else if (opcion === 3) {
    console.log("Números impares entre 600 y 666:")
for (let i = 601; i <= 666; i += 2) { 
    console.log(i)
        }
} else if (opcion === 4) {
    console.log("Números primos entre 1 y 150:")
for (let i = 1; i <= 150; i++) {
if (esPrimo(i)) {
    console.log(i)
        }
    }
}
}
