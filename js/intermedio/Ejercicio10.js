const  numeros = [3,2,2]

let valorInicial = 1


let producto = numeros.reduce((acumulador , valorActual)=>acumulador * valorActual, valorInicial) 

console.log(producto)