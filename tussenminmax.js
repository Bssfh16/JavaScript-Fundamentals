// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden



// Voeg hier je eigen code in
let Getal = parseFloat(await userInput.question(('Wat is jouw getal?')));


let Minimum = 10;
let Maximum = 20;

if (Getal >= Minimum && Getal <= Maximum){
    //De tekens kleiner of gelijk aan/groter of gelijk aan waren gevolgd door een getal in plaats van een variabele
    //De getallen werden dus hier veranderd door de variabelen 'Minimum' en 'Maximum' 
    console.log('Jouw getal ligt tussen '+ Minimum +' en '+ Maximum +'.');
}else{
    console.log('Jouw getal ligt niet tussen '+ Minimum +' en '+ Maximum +'.');
}


process.exit();
