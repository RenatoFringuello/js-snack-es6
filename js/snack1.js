// 1.** Creare un oggetto che descriva una studentessa o uno studente, con le seguenti proprietà: `nome`, `cognome` e `età`.
// 2.** Stampare a schermo attraverso un ciclo `for-in` tutte le proprietà dell'oggetto.
// 3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte) e mostriamoli.

const student1 = {
    sName : 'Pippo',
    surname : 'Dumfries',
    age : 17
};
const student2 = {
    sName : 'Pippa',
    surname : 'Sanna',
    age : 18
};
const student3 = {
    sName : 'Pluto',
    surname : 'Pinna',
    age : 17
};
const class1 = [student1, student2, student3];

for(let studentDesc in student1){
    console.log(studentDesc);
}
for (let i = 0; i < class1.length; i++) {
    console.log(class1[i]);
}