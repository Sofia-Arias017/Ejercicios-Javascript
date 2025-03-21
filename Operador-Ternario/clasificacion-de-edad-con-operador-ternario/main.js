function clasificarEdad(edad) {
    return isNaN(edad) 
        ? "Error: Ingresa un número válido." 
        : edad < 18 
            ? "Menor de edad" 
            : edad <= 65 
                ? "Adulto" 
                : "Adulto mayor"
}

let edadIngresada = parseInt(prompt("Ingresa tu edad:"))

console.log(clasificarEdad(edadIngresada))
