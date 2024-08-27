// objetos

let persona = {
  nombre: "pepito",
  edad: 12,
};
let persona2 = {
  nombre: "juan",
  edad: 12,
};

// console.log(persona.nombre);
// console.log(persona.edad);

// no importa el orden , si importa el nombre
let { nombre: nombreUno } = persona;
let { nombre: nombreDos } = persona2;

console.log(nombreUno);
console.log(nombreDos);

// arrays

let personas = ["pepe", "maria", "juancito", { x: 2, y: 1 }];

// console.log(personas[0]);
// console.log(personas[1]);
// console.log(personas[2]);
// console.log(personas[3]);

// no importa el nombre, si importa el orden
let [, , , u4] = personas;
let { x, y } = u4;
console.log(x);
