// copia por valor vs copia por referencia

let a = 1;
let b = a;

console.log(a);
console.log(b);

a += 10;

console.log(a);
console.log(b);

b++;

console.log(a);

let perro = {
  nombre: "jack",
  edad: 3,
};

// let copiaPerro = perro;

// copiaPerro.edad = 52;

// console.log(perro);

let copiaPerro = { ...perro };

console.log(copiaPerro);

copiaPerro.nombre = "firulais";

console.log(perro);

let numeros = [1, 5, 2];

let copiaNumeros = [...numeros];
