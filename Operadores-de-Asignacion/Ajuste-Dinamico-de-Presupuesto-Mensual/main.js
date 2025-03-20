let presupuesto = parseFloat(prompt("Ingresa tu presupuesto mensual:"))

if (isNaN(presupuesto) || presupuesto <= 0) {
    console.log("Por favor, ingresa un valor numérico válido mayor a 0.")
} else {
    console.log(`Presupuesto inicial: $${presupuesto.toFixed(2)}`)

    presupuesto -= 1000
    console.log(`Después de la compra del supermercado: $${presupuesto.toFixed(2)}`)

    presupuesto -= 800
    console.log(`Después de pagar los servicios: $${presupuesto.toFixed(2)}`)

    presupuesto += 1500
    console.log(`Después de recibir un ingreso extra: $${presupuesto.toFixed(2)}`)

    presupuesto *= 1.05
    console.log(`Después del ajuste de inversión (5% extra): $${presupuesto.toFixed(2)}`)

    presupuesto /= 1.3
    console.log(`Después de pagar impuestos (30%): $${presupuesto.toFixed(2)}`)

    console.log(`Saldo final disponible: $${presupuesto.toFixed(2)}`)
}
