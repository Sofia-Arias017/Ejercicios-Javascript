function verificarAcceso(edad, contraseña) {
    const contraseñaCorrecta = "segura123"

    if (edad >= 18 && contraseña === contraseñaCorrecta) {
        return "Acceso concedido. ¡Bienvenido!"
    } else {
        return "Error: Acceso denegado. Verifica tu edad y contraseña."
    }
}

let edadUsuario = parseInt(prompt("Ingresa tu edad:"))
let contraseñaUsuario = prompt("Ingresa tu contraseña:")

console.log(verificarAcceso(edadUsuario, contraseñaUsuario))
