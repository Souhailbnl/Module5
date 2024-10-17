import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});
 
 
let Maand = await userInput.question('Geef een maand in het jaar ?');
 
 
let jaartal = await userInput.question('Geef een jaartal:');
 
let dagen=0;
 
 
function kalender(Maand){
 
 
switch(Maand)
{
    case "Januari":
        dagen = 31;
        console.log("De gegeven maand heeft " + dagen + " " + "Dagen");
        break;
 
    case "Februari":
       
    if(jaartal % 400 == 0 || (jaartal % 4 == 0 && jaartal % 100!= 0))
    {
 
        console.log("Het jaartal " + jaartal + " " + " telt 29 dagen in de maand februari")
    }
       
    else
    {
        console.log("Het jaartal " + jaartal + " " + " telt 28 dagen in de maand februari")
    }
 
        break;
   
    case "Maart":
        dagen = 31;
        console.log("De gegeven maand heeft " + dagen + " " + "Dagen");
        break;
 
     case "April":
         dagen = 30;
         console.log("De gegeven maand heeft " + dagen + " " + "Dagen");
         break;
   
     case "Mei":
        dagen = 31;
        console.log("De gegeven maand heeft " + dagen + " " + "Dagen");
        break;
       
    case "Juni":
        dagen = 30;
        console.log("De gegeven maand heeft " + dagen + " " + "Dagen");
        break;
   
    case "Juli":
        dagen = 31;
        console.log("De gegeven maand heeft " + dagen + " " + "Dagen");
        break;
 
    case "Augustus":
        dagen = 31;
        console.log("De gegeven maand heeft " + dagen + " " + "Dagen");
        break;
   
    case "September":
        dagen = 30;
        console.log("De gegeven maand heeft " + dagen + " " + "Dagen");
        break;
 
     case "Oktober":
         dagen = 31;
         console.log("De gegeven maand heeft " + dagen + " " + "Dagen");
         break;
   
     case "November":
        dagen = 30;
        console.log("De gegeven maand heeft " + dagen + " " + "Dagen");
        break;
       
    case "December":
        dagen = 31;
        console.log("De gegeven maand heeft " + dagen + " " + "Dagen");
        break;
 
        default:
            console.log('Maand niet gekend');
}
 
}
 
kalender(Maand);
 
 
 
process.exit();