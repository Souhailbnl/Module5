import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});
 
 
 let grootgetallenreeks = parseFloat(await userInput.question('geef een getal in '));
 
 
perfectnumbercalculator(grootgetallenreeks);
function perfectnumbercalculator(grootgetallenreeks)
{
for(let i =1; i < grootgetallenreeks; i++)
{
 
let som =0;
 
    for( let j=1; j<i; j++)
    {
        if(i % j== 0)
        {
            som +=j;
        }

    }   

    if(som == i)
    {
        
        console.log(i + " is een perfect getal");
        
    }
}

}
process.exit()