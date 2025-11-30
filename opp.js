import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let zijde1 = parseFloat (await userInput.question('Geef de lengte van de eerste zijde: '));

let zijde2 = parseFloat (await userInput.question('Geef de lengte van de tweede zijde: '));


if((zijde1 < 0) || (zijde2 < 0)){
    console.log('Ongeldige waarden om oppervlakte te kunnen berekenen.');
} else{
    let opp = zijde1 * zijde2;
    console.log('De rechthoek heeft een oppervlakte van '+ opp +'.');
}

process.exit();