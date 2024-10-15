import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});
 
 
let randomGetal = random(1, 10);
let getal;
 
function random(min, max)
{
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
     return num;
}
 
 
 
   
 while (getal!= randomGetal)
   
{
 
    getal = parseFloat(await userInput.question('Geef een getal:'));
 
    if (getal == randomGetal)
    {
 
    console.log("Uw koos voor het juiste getal")
    }
 
  else if (getal < randomGetal)
    {
    console.log("Het getal die uw hebt gekozen is lager dan het random getal probeer opnieuw")
   
    }
 
  else if (getal > randomGetal)
    {
    console.log("Het getal die uw hebt gekozen is hoger dan het random getal probeer opnieuw")
   
    }
 
}
 
process.exit();