/**
 * Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età, creiamone almeno una decina.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

 */

const persone =  [
    { firstname: 'jessico', lastname: 'calcetto', age: 20 },
    { firstname: 'lello', lastname: 'sanna', age: 23 },
    { firstname: 'andrea', lastname: 'berti', age: 30 },
    { firstname: 'ciccio', lastname: 'pasticcio', age: 26 },
    { firstname: 'carmela', lastname: 'unali', age: 16 },
    { firstname: 'annalauro', lastname: 'padel', age: 21 },
    { firstname: 'pietro', lastname: 'sanna', age: 13 },
    { firstname: 'andrea', lastname: 'berti', age: 30 },
    { firstname: 'paolo', lastname: 'pasticcio', age: 26 },
    { firstname: 'uga', lastname: 'estetista', age: 36 },
];

const diverList = persone.map((persona) => {
    if(persona.age > 17){
        return `${persona.firstname} ${persona.lastname} can drive`;
    }
    return `${persona.firstname} ${persona.lastname} can't drive`;
});

console.log(diverList);