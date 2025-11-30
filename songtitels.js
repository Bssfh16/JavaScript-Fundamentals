// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden



// Voeg hier je eigen code in
console.log('Kies één van de volgende artiesten:');
console.log('1. Red Hot Chili Peppers');
console.log('2. AC/DC');
console.log('3. Netsky');
console.log('4. De Strangers');

let keuze = parseFloat(await userInput.question('Geef jouw keuze in:'));

let a1 = 'Red Hot Chili Peppers';
let a2 = 'AC/DC';
let a3 = 'Netsky';
let a4 = 'De strangers';

switch(keuze){
    case 1:
        console.log('Je koos voor '+ a1 +'.');
        console.log('Ze zijn achter het nummer: Snow.');
    break;

    case 2:
        console.log('Je koos voor '+ a2 +'.');
        console.log('Ze zijn achter het nummer: Thunderstruck.');
    break;

    case 3:
        console.log('Je koos voor '+ a3 +'.');
        console.log('Hij is achter het nummer: Rio.');
    break;

    case 4:
        console.log('Je koos voor '+ a4 +'.');
        console.log('Ze zijn achter het nummer: Virginieke.');
    break;

    default:
        console.log('Geen artiest gevonden.');
}



process.exit();