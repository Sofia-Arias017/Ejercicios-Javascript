let stock = parseInt(prompt("Ingresa el stock inicial del producto:", "200"))

if (isNaN(stock) || stock <= 0) {
    console.log("Por favor, ingresa una cantidad válida mayor a 0.")
} else {
    console.log(`Stock inicial del producto: ${stock} unidades`)

let nuevasUnidades = parseInt(prompt("Ingresa la cantidad de unidades nuevas recibidas:", "50"))
stock += nuevasUnidades
console.log(`Después de recibir ${nuevasUnidades} unidades: ${stock} unidades disponibles`)

let unidadesVendidas = parseInt(prompt("Ingresa la cantidad de unidades vendidas:", "30"))
stock -= unidadesVendidas
console.log(`Después de vender ${unidadesVendidas} unidades: ${stock} unidades disponibles`)

stock *= 2
console.log(`Después de aplicar la oferta "Compra 1 y llévate otro gratis": ${stock} unidades disponibles`)

let almacenes = parseInt(prompt("Ingresa la cantidad de almacenes donde se distribuirá el stock:", "5"))
let stockPorAlmacen = Math.floor(stock / almacenes)
stock /= almacenes
console.log(`Cada uno de los ${almacenes} almacenes recibe: ${stockPorAlmacen} unidades`)

let stockDescuentos = stock % 6
console.log(`Unidades restantes asignadas al área de descuentos: ${stockDescuentos}`)

console.log(`Stock final distribuido entre ${almacenes} almacenes y área de descuentos:`)
console.log(`- Unidades por almacén: ${stockPorAlmacen}`)
console.log(`- Unidades en descuentos: ${stockDescuentos}`)
}
