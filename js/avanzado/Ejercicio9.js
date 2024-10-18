const objetos = [
    { nombre: "Vladimir", edad: 19 },
    { nombre: "Mani", edad: 20 },
    { nombre: "Yeni", edad: 30 }
];

let decadas = objetos.reduce((acumulador, persona) => {
    // Calculamos la década
    const decada = Math.floor(persona.edad / 10) * 10 + "s";

    // Si la década no existe en el acumulador, la inicializamos como un arreglo vacío
    if (!acumulador[decada]) {
        acumulador[decada] = [];
    }

    // Añadimos a la persona al grupo de su década correspondiente
    acumulador[decada].push(persona);

    return acumulador;
}, {});

console.log(decadas);
