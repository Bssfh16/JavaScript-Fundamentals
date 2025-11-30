// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden



// Voeg hier je eigen code in
let jaartal = parseFloat(await userInput.question(('Wat is het jaartal?')));

if((jaartal % 4 == 0) || (jaartal % 400 == 0) || (jaartal % 100 == 1)){
    console.log(' '+ jaartal +' is een schrikkeljaar.');
}else if((jaartal % 4 == 1) || (jaartal % 400 == 1) || (jaartal % 100 == 0)){
    console.log(' '+ jaartal +' is geen schrikkeljaar.');
}else{
    console.log('Ik kan niet bepalen als '+ jaartal +' een schrikkeljaar is of niet.');
}

process.exit();