// Operadores
const head = arr => {
    let [first, ...others] = arr;
    return first;
}

const tail = arr => {
    [first, ...others] = arr;
    return others;
}

const init = arr => arr.slice(0 , arr.length - 1);
const last = arr => arr.slice(arr.length - 1 , arr.length);
// ----------

const params = [1,2,3,4];


console.log(`Resultado del operador head con parámetros [${params}]: ${head(params)}`);


console.log(`Resultado del operador tail con parámetros [${params}]: ${tail(params)}`);


console.log(`Resultado del operador init con parámetros [${params}]: ${init(params)}`);


console.log(`Resultado del operador last con parámetros [${params}]: ${last(params)}`);
