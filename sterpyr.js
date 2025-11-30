import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { get } from 'node:http';
const userInput = readline.createInterface({input, output});


let hoogte = parseFloat(await userInput.question('Geef een getal in: '));

for (let i = 1; i <= hoogte; i++) {
    let regel = '';
    for (let j = 1; j <= i; j++) {
        regel += '*';
    }
    console.log(regel);
}

