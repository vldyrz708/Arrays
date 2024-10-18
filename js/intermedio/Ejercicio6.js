const productos = [
    { nombre: 'Laptop', precio: 1000 },
    { nombre: 'Audífonos', precio: 45 },
    { nombre: 'Teclado', precio: 75 },
    { nombre: 'Mouse', precio: 25 }
  ];
  
  //  find() para encontrar el primer producto con precio menor a 50
  const productoBarato = productos.find(producto => producto.precio < 50);
  // para encontrar el producto con nombre Mouse
  const producto = productos.find(producto => producto.nombre == "Mouse");
  
  console.log(productoBarato);
  console.log(producto)