// callback
let libros = [
  {
    nombre: "historiasInconscientes",
    autor: "Gabriel Rolón",
    paginas: 352,
    precio: 150,
    cantidad: 5,
  },
  {
    nombre: "operacionMasacre",
    autor: "Rodolfo Walsh",
    paginas: 236,
    precio: 120,
    cantidad: 3,
  },
  {
    nombre: "elAlquimista",
    autor: "Paulo Coehlo",
    paginas: 192,
    precio: 170,
    cantidad: 2,
  },
  {
    nombre: "elCampamento",
    autor: "Blue Jeans",
    paginas: 70,
    precio: 190,
    cantidad: 3,
  },
];

// map --> devuelve un nuevo array - y siempre de la misma longitud

// let nuevosLibros = libros.map((libro) => {
//   return { nombre: libro.nombre, autor: libro.autor };
// }); // [{}, {} {}]

// console.log(nuevosLibros);

let librosConId = libros.map((libro, indice) => {
  return { ...libro, id: indice + 1 };
});

console.log(librosConId);

// filter --> devuelve un nuevo array con todos los que cumplan la condicion
// return --> condicion

let arrayFiltrado = libros.filter((libro) => {
  return libro.precio < 180;
}); // [ {}, {}, {}]

console.log(arrayFiltrado);

// find --> devuelve el elemento encontrado o undefined
// retornar una condicion
let libroEncontrado = libros.find((libro) => {
  return libro.nombre === "elAlquimista";
});

console.log(libroEncontrado); // --> {} o undefined

// forEach --> no devuelve nada y no tengo que retorna nada
// ejecutar instrucciones

libros.forEach((libro) => {
  console.log(libro);
});

// some --> para saber si algun elemento cumple la condicion
// siempre siempre siempre devuelve un booleano
// saber si en el array de libros hay un elemento con mas de 300 paginas

// let libroDe300 = libros.find((libro) => {
//   return libro.paginas > 300; // ---> {} o undefined
// });

// console.log( libroDe300 !== undefined  )

let libro300Paginas = libros.some((libro) => {
  return libro.paginas > 1200;
}); // true o false
console.log(libro300Paginas);

// reduce
// sort

// [].push(123)
// [].slice(0, 2)

// [].map( ()=>{} )
