// && -- ||

// and --> &&

// ticket
// 18 o mas

if (null || "juan") {
}

// null - undefined - NaN - 0 - false - "" --> falsy
// [] - {} - true - "dsada" - 14 --> truthy

let devuelve = true && "pepe" && [] && {} && "carmen"; //
// nos quedamos con , el primer falsy o con el ultimo truthy

console.log(devuelve);

let devuelveOr = false || 0 || undefined || "" || NaN;
// nos quedamos con , el primer truthy o con el ultimo falsy

console.log(devuelveOr);

// quiero una funcion que determine si necesito salir con paraguas o no
// clima --> lluvioso

// const salgoConParaguas = (clima)=>{
//     if(clima === "lluvioso"){
//         return "Si, llevalo"
//     }else{
//         return "No, no hace falta"
//     }
// }
const salgoConParaguas = (clima) =>
  clima === "lluvioso" ? "Si, llevalo" : "no, no hace falta";

salgoConParaguas("soleado");
salgoConParaguas("nevando");

salgoConParaguas("despejado");

salgoConParaguas("lluvioso");
