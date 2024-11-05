function imprimirTablaMultiplicar(numero) {
    const numeros = Array.from({ length: 10 }, (_, i) => i + 1);

    console.log(`### Tabla del N°: ${numero}`);
    numeros.forEach(num => {
        const resultado = numero * num;
        console.log(`${numero} x ${num} = ${resultado}`);
    });
}
const numeroIngresado = 7;
imprimirTablaMultiplicar(numeroIngresado);
