const zucchine = [
    {
        varieta : 'tipo',
        peso : 280,
        lunghezza : '10mt'
    },
    {
        varieta : 'tipo',
        peso : 20,
        lunghezza : '1mt'
    },
    {
        varieta : 'tipo',
        peso : 80,
        lunghezza : '8mt'
    },
    {
        varieta : 'tipo',
        peso : 2,
        lunghezza : '0.1mt'
    },
    {
        varieta : 'tipo',
        peso : 15,
        lunghezza : '3mt'
    },
    {
        varieta : 'tipo',
        peso : 9,
        lunghezza : '6mt'
    },
    {
        varieta : 'tipo',
        peso : 80,
        lunghezza : '8mt'
    },
    {
        varieta : 'tipo',
        peso : 2,
        lunghezza : '0.1mt'
    },
    {
        varieta : 'tipo',
        peso : 15,
        lunghezza : '3mt'
    },
    {
        varieta : 'tipo',
        peso : 9,
        lunghezza : '6mt'
    }
];
let pesoTutte = 0;
for (let i = 0; i < zucchine.length; i++) {
    pesoTutte += zucchine[i].peso;
}
console.log(pesoTutte);