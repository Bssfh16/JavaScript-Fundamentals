// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden



// Voeg hier je eigen code in
console.log('Geef twee verschilende getallen:');

let num1 = parseFloat(await userInput.question('Wat is het eerste getal?'));
let num2 = parseFloat(await userInput.question('Wat is het tweede getal?'));

console.log('+, -, *, :');
let operatie = await userInput.question('Welk van de vorige operaties wilt u uitvoeren?');

let uitkomst = 0;

switch(operatie){
    
    case '+':
        uitkomst = num1 + num2;
        console.log('Het resulaat is van de gekozen operatie is '+ uitkomst +'.');
    break;
    
    case '-':
        uitkomst = num1 - num2;
        console.log('Het resulaat is van de gekozen operatie is '+ uitkomst +'.');
    break;

    case '*':
        uitkomst = num1 * num2;
        console.log('Het resulaat is van de gekozen operatie is '+ uitkomst +'.');
    break;

    case ':':
        uitkomst = num1 / num2;
            if(num2 == 0){
                console.log('Delen door nul is niet mogelijk!');
            }else{
                console.log('Het resulaat is van de gekozen operatie is '+ uitkomst +'.');
            }
    break;

    default:
        console.log('De gekozen operatie kan niet worden uitgevoerd.');
}


process.exit();