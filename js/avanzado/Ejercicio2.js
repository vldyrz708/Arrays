const valores = [  true, false, 0, 1, "", "Hola", null, undefined, NaN, [], {}];

let sinFalsos = valores.filter(valor=>Boolean(valor))

console.log(sinFalsos)

