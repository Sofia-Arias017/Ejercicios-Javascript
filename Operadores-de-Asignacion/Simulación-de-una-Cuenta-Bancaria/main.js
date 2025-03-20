let saldo = parseFloat(prompt("Ingresa el saldo inicial de tu cuenta bancaria:", "10000"))

if (isNaN(saldo) || saldo <= 0) {
    console.log("Por favor, ingresa un monto válido mayor a 0.")
} else {
    console.log(`Saldo inicial en la cuenta: $${saldo.toFixed(2)}`)

    let deposito = parseFloat(prompt("Ingresa el monto a depositar:", "2000"))
    saldo += deposito
    console.log(`Después del depósito de $${deposito.toFixed(2)}: $${saldo.toFixed(2)}`)

    let retiro = parseFloat(prompt("Ingresa el monto a retirar:", "5000"))
    if (retiro > saldo) {
        console.log("No puedes retirar más dinero del que tienes en la cuenta.")
    } else {
        saldo -= retiro
        console.log(`Después del retiro de $${retiro.toFixed(2)}: $${saldo.toFixed(2)}`)
        
        saldo *= 0.98
        console.log(`Después de la comisión bancaria (2%): $${saldo.toFixed(2)}`)

        saldo /= 3
        console.log(`Saldo final en cada cuenta después de dividir en 3: $${saldo.toFixed(2)}`)
    }
}
