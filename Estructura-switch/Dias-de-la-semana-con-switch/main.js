let dia = prompt("Ingresa un día de la semana:")

switch (dia) {
    case "Lunes":
        console.log("Inicio de semana, ¡mucho ánimo!")
        break;
    case "Martes":
        console.log("Martes de productividad, sigue adelante.")
        break;
    case "Miércoles":
    case "Miercoles":
        console.log("Mitad de semana, ya falta menos.")
        break;
    case "Jueves":
        console.log("Jueves con sabor a viernes.")
        break;
    case "Viernes":
        console.log("¡Por fin viernes! A disfrutar.")
        break;
    case "Sábado":
    case "Sabado":
        console.log("Sábado de descanso y diversión.")
        break;
    case "Domingo":
        console.log("Domingo para recargar energías.")
        break;
    default:
        console.log("Error: Ingresa un día válido.")
}