// Operadores
const concat = (...params) => [...params];
// ----------

const param1 = [1,2,3,4];
const param2 = [7,8,9];
const param3 = ['a','b','c'];
const param4 = [true, false];


console.log(`Resultado del operador concat con parámetros
 [${param1}], [${param2}], [${param3}], [${param4}]:
  ${concat(param1, param2, param3, param4)}`);