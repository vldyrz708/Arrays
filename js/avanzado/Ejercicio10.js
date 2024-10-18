const objetos1 = [
    { nombre: "Vladimir", edad: 19 },
    { nombre: "Mani", edad: 20 },
    { nombre: "Yeni", edad: 30 }
]

const objetos2 = [
    {ciudad: "Zacualtipan", estado: "Hidalgo"},
    {ciudad: "Chicontepec", estado: "Veracruz"},
    {ciudad: "Tlanchinol", estado: "Hidalgo"}
]

let unirObjetos = objetos1.map((objeto1, indice)=>({...objeto1,...objetos2[indice]}))
console.log(unirObjetos)