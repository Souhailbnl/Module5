import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});

let namen = [];
let naam;


while (true) {

naam = await userInput.question('Voer een nieuwe naam in :');

if (naam == '') {

  break;
  
}

namen.push(naam);
}


console.log("Ingevoerde namen: " + namen);

process.exit();