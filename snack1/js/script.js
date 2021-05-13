/* Snack 1 */
/* Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal. */

const biciclette = [
    {
        nome : "gialla",
        peso : 20
    },
    {
        nome : "rossa",
        peso : 25
    },
    {
        nome : "verde",
        peso : 15
    }
];

// console.log(arrayBiciclette);

// var indexPesoMinore = 0;
// for (var i = 1; i < arrayBiciclette.length; i++) {
//     var pesoBicicletta = arrayBiciclette[i].peso;
    
//     if (pesoBicicletta < arrayBiciclette[indexPesoMinore].peso) {
//         indexPesoMinore = i;
//     }
// }

// console.log(arrayBiciclette[indexPesoMinore].nome);

// const { nome, peso } = pesoBicicletta;
// console.log(nome);
// console.log(cognome);

let biciLeggera = biciclette[0];

for (var i = 1; i < biciclette.length; i++) {
    let biciCorrente = biciclette[i];

    if (biciCorrente.peso < biciLeggera.peso) {
        biciLeggera = biciCorrente;
    }
}
console.log(biciLeggera);

const { nome, peso } = biciLeggera;
console.log(nome);
console.log(peso);