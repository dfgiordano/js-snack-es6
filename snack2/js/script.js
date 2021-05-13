/* Snack 2  */
/* Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.  */
/* Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate inizialmente a 0.  */
/* Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.  */

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
};


const arraySquadre = [
    {
        nome : "Juventus",
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        nome : "Inter",
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        nome : "Milan",
        puntiFatti : 0,
        falliSubiti : 0
    }
];
console.log(arraySquadre);



/* Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.  */
// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min); 
//   }

const nuovoArray = [];

for (let i = 0; i < arraySquadre.length; i++) {
    var squadra = arraySquadre[i];
    squadra.puntiFatti = getRandomNumber(1,100);
    squadra.falliSubiti = getRandomNumber(1,50);
    
    var { nome, falliSubiti } = squadra;
    nuovoArray.push({ nome, falliSubiti });
}

console.log(nuovoArray);

/* Snack2
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */





