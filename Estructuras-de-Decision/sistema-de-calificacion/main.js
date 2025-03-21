function convertirCalificacion(calificacion) {
    if (calificacion < 0 || calificacion > 100 || isNaN(calificacion)) {
        return "Error: Ingresa una calificación válida entre 0 y 100."
    } else if (calificacion >= 90) {
        return "Calificación: A"
    } else if (calificacion >= 80) {
        return "Calificación: B"
    } else if (calificacion >= 70) {
        return "Calificación: C"
    } else if (calificacion >= 60) {
        return "Calificación: D"
    } else {
        return "Calificación: F"
    }
}

let nota = parseFloat(prompt("Ingresa tu calificación (0-100):"))

console.log(convertirCalificacion(nota))
