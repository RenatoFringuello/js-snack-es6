const zucchine = [
    {
        varieta : 'tipo',
        peso : 280,
        lunghezza : 10
    },
    {
        varieta : 'tipo',
        peso : 20,
        lunghezza : 1
    },
    {
        varieta : 'tipo',
        peso : 80,
        lunghezza : 8
    },
    {
        varieta : 'tipo',
        peso : 2,
        lunghezza : 0.1
    },
    {
        varieta : 'tipo',
        peso : 15,
        lunghezza : 3
    },
    {
        varieta : 'tipo',
        peso : 9,
        lunghezza : 6
    },
    {
        varieta : 'tipo',
        peso : 80,
        lunghezza : 8
    },
    {
        varieta : 'tipo',
        peso : 2,
        lunghezza : 0.1
    },
    {
        varieta : 'tipo',
        peso : 15,
        lunghezza : 3
    },
    {
        varieta : 'tipo',
        peso : 9,
        lunghezza : 6
    }
];
let pesoTutte = 0;
let lunghezzaTutte = 0;
let lunghezzaMedia, pesoMedio;
for (let i = 0; i < zucchine.length; i++) {
    pesoTutte += zucchine[i].peso;
    lunghezzaTutte += zucchine[i].lunghezza;
}
pesoMedio = pesoTutte / zucchine.length;
lunghezzaMedia = lunghezzaTutte / zucchine.length;

console.log('peso tutte (kg)', pesoTutte);
console.log('peso medio (kg)', pesoMedio);
console.log('lunghezza media (metri)', lunghezzaMedia.toFixed(2));