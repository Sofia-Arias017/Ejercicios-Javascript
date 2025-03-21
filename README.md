[TOC]

# 1. Operadores Aritméticos: [Solucion en la rama operadores-aritmeticos](https://github.com/Sofia-Arias017/Ejercicios-Javascriptt/tree/operadores-aritmeticos)

## **Calculadora Básica**

Escribe un programa que solicite al usuario dos números enteros y realice las siguientes operaciones matemáticas: suma, resta, multiplicación, división y módulo. Luego, muestra los resultados en la consola. Asegúrate de manejar el caso en el que el usuario intente dividir por cero.

## **Exponenciación de un Número**

 Crea una función que reciba un número entero y devuelva su resultado elevado al cuadrado utilizando el operador de exponenciación (`**`). La función debe manejar casos en los que el usuario ingrese valores no numéricos.

------

# 2. Operadores de Asignación: [Solucion en la rama operadores-de-asignacion](https://github.com/Sofia-Arias017/Ejercicios-Javascriptt/tree/operadores-de-asignacion)

## **Ajuste Dinámico de Presupuesto Mensual**

 Un usuario tiene un presupuesto mensual de **$5000**. Escribe un programa que modifique esta cantidad con base en los siguientes gastos e ingresos:

1. **Compra de supermercado**: Reduce `1000` al presupuesto (`-=`).
2. **Pago de servicios**: Reduce `800` (`-=`).
3. **Ingreso adicional**: Aumenta `1500` (`+=`).
4. **Ajuste de inversión**: Multiplica el presupuesto restante por `1.05` (`*=`) para reflejar un **rendimiento del 5%**.
5. **Pago de impuestos**: Reduce el presupuesto en un **30%** (`/=`).

Al final, imprime cuánto dinero queda disponible.

------

## **Simulación de una Cuenta Bancaria**

Crea una simulación de una **cuenta bancaria** en la que:

1. El saldo inicial es de **$10,000**.
2. Se recibe un depósito de **$2000** (`+=`).
3. Se hace un retiro de **$5000** (`-=`).
4. Se cobra una **comisión bancaria del 2%** sobre el saldo restante (`*=`).
5. Se divide el saldo en **3 cuentas diferentes** (`/=`).

Finalmente, imprime el saldo final y explica cómo se modificó en cada paso.

------

## **Cálculo de Puntos en un Videojuego**

Imagina un juego en el que el jugador tiene una **barra de energía inicial de 100 puntos**. Escribe un programa que modifique el valor de energía basado en las siguientes condiciones:

1. **Gana un bonus de 50 puntos** (`+=`).
2. **Pierde 20 puntos en una batalla** (`-=`).
3. **Duplica su energía tras obtener un potenciador** (`*=`).
4. **Consume el 25% de su energía en una acción especial** (`/=`).
5. **Aplica un ajuste para redondear la energía al dividirla entre 7** (`%=`).

Al final, imprime cuánta energía le queda al jugador.

------

## **Ajuste de Stock en una Tienda Online**

 Una tienda online gestiona el inventario de un producto con **200 unidades disponibles**. El stock se modifica de la siguiente manera:

1. Se reciben **50 unidades nuevas** (`+=`).
2. Se venden **30 unidades** (`-=`).
3. Se aplica una oferta **"Compra 1 y llévate otro gratis"** (`*=` por `2`).
4. Se distribuyen las unidades entre **5 almacenes** (`/=`).
5. Se asignan los productos restantes al área de **descuentos** usando `%=` con `6`.

Al final, muestra cuántas unidades quedan disponibles en cada área de almacenamiento y en descuentos.

------

# 3. Operadores Logicos: [Solucion en la rama Operadores-Logicos](https://github.com/Sofia-Arias017/Ejercicios-Javascriptt/tree/Operadores-Logicos)

## **Tragos a tomado.**

Crea un algoritmo utilizando el operador ternario que le pregunte al usuario cuantos tragos a tomado.

1. Si el número de trago es mayor a cero debe emitir una alerta que diga que no puede manejar.
2. Si el usuario indica que no ha tomado nada, entonces decirle que “Nos alegra que seas un conductor responsable”.

## **Rango de numeros**

1. Imprimí todos los números entre -20 y 30
2. Imprimí todos los números pares entre 20 y 60
3. Imprimí todos los números impares entre 600 y 666
4. Imprimí todos los números primos entre 1 y 150

## **Una entrada para tu película favorita.**

Declara una variable que se llame **peliculaElegida** y asignale el método **prompt()** para que le puedas solicitar al usuario que ingrese su película favorita de una lista, que tú vas a proporcionar en dicho método.
Importante: para que puedas enlistar las opciones de películas una debajo de otra, necesitaras el carácter especial (\n ) ó colocar un **br** para hacer un salto de línea. Sino te queda muy claro cómo usarlo, deberás googlea para ver un ejemplo.

------

# 4. Operadores de Comparacion: [Solucion en la rama Operadores-de-Comparacion](https://github.com/Sofia-Arias017/Ejercicios-Javascriptt/tree/Operadores-de-Comparacion)

## **Comparación de Números**

 Crea una función que reciba **dos números** y retorne un mensaje indicando si el primer número es **mayor, menor o igual** al segundo.

## **Determinar el Mayor de Tres Números**

 Declara tres variables con diferentes valores numéricos y determina cuál es el mayor de ellos usando operadores de comparación (`>`, `<`, `>=`, `<=`). Imprime el resultado en consola.

## **Comparación Estricta de Cadenas**

 Escribe un programa que solicite dos cadenas de texto y determine si son **idénticas en valor y tipo** (`===`). Muestra el resultado en consola con un mensaje explicativo.

------

# 5. Estructuras de Decision: [Solucion en la rama Estructuras-de-Decision](https://github.com/Sofia-Arias017/Ejercicios-Javascriptt/tree/Estructuras-de-Decision)

## **Clasificación del Clima según la Temperatura**

 Escribe un programa que solicite una temperatura en grados Celsius y determine si el clima es **frío** (≤15°C), **templado** (16-25°C) o **caluroso** (>25°C) usando `if-else`.

## **Sistema de Calificaciones**

 Crea una función que reciba una **calificación numérica** (0-100) y devuelva su equivalente en letras (`A`, `B`, `C`, `D`, `F`). Usa condiciones `if-else if` para definir los rangos de calificaciones.

## **Verificador de Acceso Seguro**

 Implementa un **verificador de acceso**: si el usuario es **mayor de 18 años** y tiene una **contraseña correcta**, puede acceder; de lo contrario, debe mostrar un mensaje de error.

## **Verificador de Número Positivo, Negativo o Cero**

 Escribe un programa que reciba un número y determine si es **positivo, negativo o cero** usando `if-else`. Muestra el resultado en consola.

------

# 6. Operador Ternario: [Solucion en la rama Operador-Ternario](https://github.com/Sofia-Arias017/Ejercicios-Javascriptt/tree/Operador-Ternario)

## **Verificador de Paridad con Operador Ternario**

 Crea un programa que determine si un número es **par o impar** utilizando el operador ternario (`? :`). Si el número ingresado no es válido, debe mostrar un mensaje de error.

## **Clasificación de Edad con Operador Ternario**

 Escribe una función que reciba la edad de una persona y devuelva `"Menor de edad"` si tiene **menos de 18 años**, `"Adulto"` si tiene entre **18 y 65**, y `"Adulto mayor"` si tiene más de **65 años**, usando **un operador ternario anidado**.

------

# 7. Estructura switch: [Solucion en la rama Estructura-switch](https://github.com/Sofia-Arias017/Ejercicios-Javascriptt/tree/Estructura-switch)

## **Días de la Semana con `switch`**

 Implementa un programa que reciba un **día de la semana** (por ejemplo, `"Lunes"`) y muestre un mensaje distinto para cada día usando `switch-case`. Si el usuario ingresa un valor inválido, muestra un mensaje de error.

## **Clasificación de Colores Primarios y Secundarios con `switch`**

 Escribe una función que reciba el nombre de un **color** y devuelva un mensaje indicando si es un **color primario** (`rojo`, `azul`, `amarillo`) o un **color secundario** (`verde`, `naranja`, `violeta`).

## **Conversión de Número a Mes del Año con `switch`**

 Crea un programa que reciba un **número del 1 al 12** y muestre el nombre del mes correspondiente utilizando `switch`. Si el número está fuera del rango, debe mostrar un mensaje de error.