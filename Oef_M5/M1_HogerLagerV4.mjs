import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});

let som = 0;
let getal = parseFloat(await userInput.question('Geef een getal:'));

deler(getal);
function deler(getal) 
{
    for (let i = 1; i < getal; i++) 
    {
        
            if (getal % i == 0){

                som+= i; 
                console.log(i)

            }
        
        
    }

    console.log("De som van de delers: " + som)
    
}


process.exit();