function calcularPromedio(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    let promedio = suma / numeros.length;
    return promedio;
}

// Solicitar cuántos elementos desea agregar
let cantidad = parseInt(prompt("¿Cuántos elementos desea agregar?: "));
let calificaciones = [];

// Solicitar las calificaciones
for (let i = 0; i < cantidad; i++) {
    let cal = parseFloat(prompt("Ingresa la calificación: ", i + 1));
    calificaciones.push(cal);
}

// Llamar a la función y mostrar el promedio
let promedio = calcularPromedio(calificaciones);
console.log("Su promedio es: ", promedio);
