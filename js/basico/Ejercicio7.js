let numeros = [1, 2, 3, 2, 4, 1, 5];


function eliminarDuplicados(numeros) {
    return numeros.filter((valor, indice) => numeros.indexOf(valor) === indice);
}
let sinDuplicados = eliminarDuplicados(numeros);
console.log(sinDuplicados); 
