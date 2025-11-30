// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden



// Voeg hier je eigen code in
console.log('Welkom bij de Quiz! Beantwoord de vijf volgende vragen:');

//let score1 = 0;
//let score2 = 0;
//let score3 = 0;
//let score4 = 0;
//let score5 = 0;
let score = 0;

let q1 = await userInput.question('Wat is de hoofdstad van Frankrijk?');

if(q1 == 'Parijs'){
    //score1 = 1;
    score = score + 1;
    console.log('Goed Antwoord!');
}else{
    //score1 = 0;
    console.log('Fout antwoord! Het juiste antwoord is: Parijs');
}

let q2 = await userInput.question('Hoeveel planeten zijn er in ons zonnestelsel?');

if(q2 == 8){
    //score2 = 1;
    score = score + 1;
    console.log('Goed Antwoord!');
}else{
    //score2 = 0;
    console.log('Fout antwoord! Het juiste antwoord is: 8');
}

let q3 = await userInput.question('Wat is het grootste zoogdier ter wereld?');

if(q3 == 'Blauwe vinvis'){
    //score3 = 1;
    score = score + 1;
    console.log('Goed Antwoord!');
}else{
    //score3 = 0;
    console.log('Fout antwoord! Het juiste antwoord is: het blauwe vinvis');
}

let q4 = await userInput.question('Wie schreef het toneelstuk "Romeo en Julia"?');

if(q4 == 'Shakespeare'){
    //score4 = 1;
    score = score + 1;
    console.log('Goed Antwoord!');
}else{
    //score4 = 0;
    console.log('Fout antwoord! Het juiste antwoord is: Shakespeare');
}

let q5 = await userInput.question('Hoeveel poten heeft een spin?');

if(q5 == 8){
    //score5 = 1;
    score = score + 1;
    console.log('Goed Antwoord!');
}else{
    //score5 = 0;
    console.log('Fout antwoord! Het juiste antwoord is: 8');
}

//et totaal = score1 + score2 + score3 + score4 + score5;

console.log(''+ score +' van de vijf vragen werden goed beantwoord!');

process.exit();

