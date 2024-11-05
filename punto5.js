// Diferencias entre map y forEach

// 1. Propósito
// map: Transforma elementos y devuelve un nuevo arreglo
const numeros = [1, 2, 3];
const dobles = numeros.map(num => num * 2); // Devuelve [2, 4, 6]

// forEach: Ejecuta una función en cada elemento sin devolver un nuevo arreglo
numeros.forEach(num => console.log(num)); // Imprime 1, 2, 3

// 2. Valor de retorno
// map: Retorna un nuevo arreglo
console.log(dobles); // [2, 4, 6]

// forEach: No retorna nada
const resultado = numeros.forEach(num => num * 2);
console.log(resultado); // undefined

// 3. Uso típico
// map: Usado cuando necesitas un nuevo arreglo
const cuadrados = numeros.map(num => num ** 2); // [1, 4, 9]
console.log(cuadrados);

// forEach: Usado para realizar una acción en cada elemento
numeros.forEach(num => {
    // Acción sin crear un nuevo arreglo
    console.log(`Número: ${num}`);
});
