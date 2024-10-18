const palabras = ['hola', 'mundo', 'sol', 'luna', 'adios']
let n = 4

function mayorAn (palabras, n){
    let resultado = palabras.filter (palabra => palabra.length > n)
    console.log(resultado)
}

mayorAn (palabras, n)


/*const palabras = ['hola', 'mundo', 'sol', 'luna', 'adios']

const resultado = palabras.filter((palabra) => palabra.length > 3);

console.log(resultado);*/ 