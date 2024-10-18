const valores = ["Hola", "Hola","adios"]
let valorBuscado = "Hola"
let contar = valores.reduce((acumulador, valorActual)=>valorActual===valorBuscado ? acumulador + 1 : acumulador, 0)
console.log(contar)