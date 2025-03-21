let numero = parseInt(prompt("Ingresa un número:"))

let resultado = isNaN(numero) 
    ? "Error: Ingresa un número válido." 
    : (numero % 2 === 0 ? "El número es par." : "El número es impar.")

console.log(resultado)
