let sourceObject = {
    a: 1,
    b: 2
}

const clone = source => ({...source}); 


console.log(`- El objeto original es: ${JSON.stringify(sourceObject)}`);

let clonedObject = clone(sourceObject);

console.log(`- El objeto clonado es: ${JSON.stringify(clonedObject)}`);

sourceObject.a = 3;

console.log(`- Tras modificar el objeto original,
 ahora el objeto original es ${JSON.stringify(sourceObject)} 
 y el objeto clonado ${JSON.stringify(clonedObject)}`);

