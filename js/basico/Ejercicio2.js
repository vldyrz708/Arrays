// Definimos la función
function encontrarMayorNumero(arr) {
    return Math.max(...arr); // Usamos Math.max con el operador de propagación
}

// Ejemplo de uso:
const numeros = [3, 6, 2, 8, 5, 10, 4]; // Arreglo de números
const mayorNumero = encontrarMayorNumero(numeros); // Llamamos a la función

// Mostramos el resultado en consola
console.log("El número más grande es:", mayorNumero);

