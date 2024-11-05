const numeros = Array.from({ length: 10 }, (_, i) => i + 1);

numeros.forEach(num => {
    const resultado = 7 * num;
    console.log(`7 x ${num} = ${resultado}`);
});
