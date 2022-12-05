const cars = [
    {
        marca : 'bmw',
        modello : 'serie 3',
        alimentazione : 'benzina'
    },
    {
        marca : 'bmw',
        modello : 'serie 3',
        alimentazione : 'metano'
    },
    {
        marca : 'bmw',
        modello : 'serie 3',
        alimentazione : 'elettrica'
    },
    {
        marca : 'bmw',
        modello : 'serie 3',
        alimentazione : 'gpl'
    },
    {
        marca : 'bmw',
        modello : 'serie 3',
        alimentazione : 'gpl'
    },
    {
        marca : 'bmw',
        modello : 'serie 3',
        alimentazione : 'benzina'
    },
    {
        marca : 'bmw',
        modello : 'serie 3',
        alimentazione : 'diesel'
    },
    {
        marca : 'bmw',
        modello : 'serie 3',
        alimentazione : 'benzina'
    },
    {
        marca : 'bmw',
        modello : 'serie 3',
        alimentazione : 'diesel'
    },
    {
        marca : 'bmw',
        modello : 'serie 3',
        alimentazione : 'diesel'
    }
];
const dieselCars = [], benzinaCars = [], otherCars = [];

for (let i = 0; i < cars.length; i++) {
    switch(cars[i].alimentazione){
        case 'benzina':
            benzinaCars.push(cars[i]);
            break;
        case 'diesel':
            dieselCars.push(cars[i]);
            break;
        default:
            otherCars.push(cars[i]);
            break;
    }
}

for (let i = 0; i < benzinaCars.length; i++) {
    console.log('benzina',benzinaCars[i]);
}
for (let i = 0; i < dieselCars.length; i++) {
    console.log('diesel',dieselCars[i]);
}
for (let i = 0; i < otherCars.length; i++) {
    console.log('other',otherCars[i]);
}