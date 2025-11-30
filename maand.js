// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
// import { use } from 'react';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden



// Voeg hier je eigen code in
let Maand = await userInput.question('Welke maand?');

switch(Maand){
    case 'januari':
    case 'maart':
    case 'mei':
    case 'juli':
    case 'augustus':
    case 'oktober':
    case 'december':
        console.log('31 dagen.');
        break;
    
    case 'april':
    case 'juni':
    case 'september':
    case 'november':
        console.log('30 dagen.');
        break;
    
    case 'februari':
        console.log('28 of 29 dagen.');
        break;
    
    default:
        console.log('maand niet gekend.');
}


process.exit();