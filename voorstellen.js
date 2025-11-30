import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let hond1 = {
    naam: "Jos",
    leeftijd: 11,
    lievelingsfruit: "Appel",
    stelVoor: function(){
        console.log(`Hallo ik ben ${this.naam}, ik ben ${this.leeftijd} jaar oud en mijn lievelingsfruit is ${this.lievelingsfruit}.`)
    } 
};

let hond2 = {
    naam: "Piet",
    leeftijd: 8,
    lievelingsfruit: "Banaan",
    stelVoor: function(){
        console.log(`Hallo ik ben ${this.naam}, ik ben ${this.leeftijd} jaar oud en mijn lievelingsfruit is ${this.lievelingsfruit}.`)
    } 
};


let dier = [hond1, hond2];

hond1.stelVoor();
hond2.stelVoor();

process.exit();