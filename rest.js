// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden



// Voeg hier je eigen code in
let Getal = parseFloat(await userInput.question(('Wat is jouw getal?')));

let uitkomst = Getal % 2;

if(uitkomst == 1){ // of Getal % 2 == 1
    console.log(' '+ Getal +' is oneven.');
}else{
    console.log(' '+ Getal +' is even.');
} 

process.exit();