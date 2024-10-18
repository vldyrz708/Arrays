const numeros1 = [7,4]
const numeros2 = [1,8,5]
const numeros3 = [3,2,6]

let combinarOrdenar = (numeros1.concat(numeros2,numeros3)).sort((a, b)=> a-b) 

console.log(combinarOrdenar)