let tragos = parseInt(prompt("¿Cuántos tragos has tomado?", "0"))

if (isNaN(tragos) || tragos < 0) {
    alert("Por favor, ingresa un número válido.")
} else {

let mensaje = tragos > 0 
    ? "No puedes manejar."
    : "Nos alegra que seas un conductor responsable."

alert(mensaje)
}
