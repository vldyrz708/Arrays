const numeros = [1,2,3,4,5,6,7,8,9,10]

function pares (numeros){
    let sonPar = numeros.filter((valor,indice) => indice % 2)
    console.log(sonPar)
}
pares(numeros)