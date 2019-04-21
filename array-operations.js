const params = [1,2,3,4];


const head = arr => {
    let [first, ...others] = arr;
    return first;
}

console.log(`Resultado del operador head con parámetros [${params}]: ${head(params)}`);



const tail = arr => {
    [first, ...others] = arr;
    return others;
}

console.log(`Resultado del operador tail con parámetros [${params}]: ${tail(params)}`);



const init = arr => arr.slice(0 , arr.length - 1);

console.log(`Resultado del operador init con parámetros [${params}]: ${init(params)}`);



const last = arr => arr.slice(arr.length - 1 , arr.length);

console.log(`Resultado del operador last con parámetros [${params}]: ${last(params)}`);
