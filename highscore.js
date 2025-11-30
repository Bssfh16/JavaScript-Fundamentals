// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden



// Voeg hier je eigen code in
console.log('Geef vijf verschillende getallen:');

let num1 = parseFloat(await userInput.question('Wat is het eerste getal?'));
let num2 = parseFloat(await userInput.question('Wat is het tweede getal?'));
let num3 = parseFloat(await userInput.question('Wat is het derde getal?'));
let num4 = parseFloat(await userInput.question('Wat is het vierde getal?'));
let num5 = parseFloat(await userInput.question('Wat is het vijfde getal?'));



let kleinste = num1;

if(num2 < kleinste);
    kleinste = num2;
if(num3 < kleinste);
    kleinste = num3;
if(num4 < kleinste);
    kleinste = num4;
if(num5 < kleinste);
    kleinste = num5;


let hoogste = num1;

if(num2 > hoogste);
    hoogste = num2;
if(num3 > hoogste);
    hoogste = num3;
if(num4 > hoogste);
    hoogste = num4;
if(num5 > hoogste);
    hoogste = num5;



let som = num1 + num2 + num3 + num4 + num5;
let gemiddelde = som / 5;


console.log('Het hoogste getal is '+ hoogste +', het laagste getal is '+ kleinste +' en het gemiddelde is '+ gemiddelde +'.');


process.exit();