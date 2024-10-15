import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question('Geef een eerste getal:'));
let getal2 = parseFloat(await userInput.question('Geef een tweede getal:'));


function som(getal1,getal2) {

    console.log("De optelling van de twee getallen is: " + (getal1 + getal2))
    
}

som(getal1,getal2)


process.exit();
