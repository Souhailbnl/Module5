import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});

let keuze = await userInput.question('Jouw keuze uit een tv reeks: ');


function tvSerie(serieTv) {


    if (serieTv == "Flash") {

        return "Flash vindt plaats in Central City";
        
    }
    else if (serieTv == "The Simpson") {

        return "The Simpsons vindt plaats in Springfield";

    }

    else if (serieTv == "Game of Thrones") {

        return "Game of Thrones vindt plaats in Westeros";
        
    }
    
    else{
        return "Sorry, ik weet niet waar de serie " + serieTv + " zich afspeelt"
    }


}


let toonserie = tvSerie(keuze);

console.log(toonserie);
    
process.exit();

