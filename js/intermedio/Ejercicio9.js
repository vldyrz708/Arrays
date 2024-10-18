const  numeros = [7,3,2]

let valorInicial = 0


let suma = numeros.reduce((acumulador , valorActual)=>acumulador + valorActual, valorInicial) 

console.log(suma)