// Operadores
const clone = source => ({...source}); 
const merge = (source,target) => ({...target, ...source});
// ----------

let sourceObject = {
    a: 1,
    b: 2
}

console.log(`- El objeto original es: ${JSON.stringify(sourceObject)}`);

let clonedObject = clone(sourceObject);

console.log(`- El objeto clonado con el operador clone es: ${JSON.stringify(clonedObject)}`);

sourceObject.a = 3;

console.log(`- Tras modificar el objeto original,
 ahora el objeto original es ${JSON.stringify(sourceObject)} 
 pero el objeto clonado se mantiene como ${JSON.stringify(clonedObject)}`);


 const a = {
     name: "María",
     surname: "Ibañez",
     country: "SPA"
 }

 const b = {
    name: "Luisa",
    age: 31,
    married: true
 }

 console.log(`- Si tenemos dos objetos como estos:
  ${JSON.stringify(a)}
  y ${JSON.stringify(b)}`);

 console.log(`- El objeto creado con el operador merge sobre los dos objetos anteriores es: ${JSON.stringify(merge(a,b))}`);