let energia = parseFloat(prompt("Ingresa la energía inicial del jugador:", "100"))

if (isNaN(energia) || energia <= 0) {
    console.log("Por favor, ingresa un número válido mayor a 0.")
} else {
    console.log(`Energía inicial del jugador: ${energia} puntos`)

let bonus = parseFloat(prompt("Ingresa el bonus de energía obtenido:", "50"))
energia += bonus
console.log(`Después de recibir un bonus de ${bonus} puntos: ${energia} puntos`)

let perdida = parseFloat(prompt("Ingresa la energía perdida en la batalla:", "20"))
energia -= perdida
console.log(`Después de la batalla, pierde ${perdida} puntos: ${energia} puntos`)

let potenciador = parseFloat(prompt("Ingresa el multiplicador de energía del potenciador:", "2"))
energia *= potenciador
console.log(`Después de obtener un potenciador, su energía se multiplica por ${potenciador}: ${energia.toFixed(2)} puntos`)

let consumo = parseFloat(prompt("Ingresa el porcentaje de energía consumida en la acción especial (ejemplo: 25 para 25%):", "25"))
energia /= (1 + consumo / 100)
console.log(`Después de usar una acción especial, queda con: ${energia.toFixed(2)} puntos`)

energia %= 7
console.log(`Después del ajuste final, la energía restante es: ${energia.toFixed(2)} puntos`)
}
