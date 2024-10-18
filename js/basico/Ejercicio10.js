const numeros = [1,2,3,4,5,6]
const porDos = multiplicar (numeros)

function multiplicar (numeros){
    return numeros.map(numeros=>numeros*2) 
}
console.log(porDos)
multiplicar(numeros)