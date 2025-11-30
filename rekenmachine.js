import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let berekening = await userInput.question('Welke berekening wil je doen? ("+","-","*","/")');



let getal1 = parseFloat(await userInput.question('Wat is jouw eerste getal?'));
let getal2 = parseFloat(await userInput.question('Wat is jouw tweede getal?'));


let uitkomst = 0;

if(berekening == '+'){

    uitkomst = getal1 + getal2;

}else if(berekening == '-'){
    uitkomst = getal1 - getal2;

}else if(berekening == '/'){
    if(getal2 == 0){
        console.log("je mag niet delen door 0");
        uitkomst = "infinity";
    }else{
        uitkomst = getal1 / getal2;
    }
} else if(berekening == '*'){
    uitkomst = getal1 * getal2;
}

console.log("de uitkomst is: " + uitkomst);

process.exit();